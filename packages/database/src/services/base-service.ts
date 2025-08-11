import { dbClient } from "../client";

export interface BaseEntity {
  id: string;
  userId: string;
  syncId?: string | null;
  lastSync?: Date | null;
  isDeleted: boolean;
  version: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEntityData {
  userId: string;
  [key: string]: any;
}

export interface UpdateEntityData {
  id: string;
  [key: string]: any;
}

export interface EntityFilters {
  userId?: string;
  search?: string;
  [key: string]: any;
}

export abstract class BaseService<
  T extends BaseEntity,
  CreateData extends CreateEntityData,
  UpdateData extends UpdateEntityData,
  Filters extends EntityFilters,
> {
  protected abstract entityName: string;
  protected abstract prismaModel: any;

  async create(data: CreateData): Promise<T> {
    const entity = await this.prismaModel.create({
      data: {
        ...data,
        version: 1,
        lastSync: new Date(),
      },
      include: this.getIncludeOptions(),
    });

    // Логируем операцию для синхронизации
    await dbClient.logSyncOperation(
      entity.id,
      this.entityName,
      "CREATE",
      entity
    );

    return entity;
  }

  async update(id: string, data: Omit<UpdateData, "id">): Promise<T> {
    const existingEntity = await this.prismaModel.findUnique({
      where: { id },
    });

    if (!existingEntity) {
      throw new Error(`${this.entityName} with id ${id} not found`);
    }

    const entity = await this.prismaModel.update({
      where: { id },
      data: {
        ...data,
        version: { increment: 1 },
        lastSync: new Date(),
      },
      include: this.getIncludeOptions(),
    });

    // Логируем операцию для синхронизации
    await dbClient.logSyncOperation(
      entity.id,
      this.entityName,
      "UPDATE",
      entity
    );

    return entity;
  }

  async delete(id: string): Promise<void> {
    const entity = await this.prismaModel.findUnique({
      where: { id },
    });

    if (!entity) {
      throw new Error(`${this.entityName} with id ${id} not found`);
    }

    // Soft delete
    await this.prismaModel.update({
      where: { id },
      data: {
        isDeleted: true,
        version: { increment: 1 },
        lastSync: new Date(),
      },
    });

    // Логируем операцию для синхронизации
    await dbClient.logSyncOperation(id, this.entityName, "DELETE", {
      id,
      isDeleted: true,
    });
  }

  async getById(id: string): Promise<T | null> {
    return this.prismaModel.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: this.getIncludeOptions(),
    });
  }

  async getList(filters: Filters = {} as Filters): Promise<T[]> {
    const where: any = {
      isDeleted: false,
      ...filters,
    };

    if (filters.search) {
      where.OR = this.getSearchConditions(filters.search);
    }

    return this.prismaModel.findMany({
      where,
      include: this.getIncludeOptions(),
      orderBy: this.getOrderByOptions(),
    });
  }

  async getByUser(
    userId: string,
    filters?: Omit<Filters, "userId">
  ): Promise<T[]> {
    return this.getList({ ...filters, userId } as Filters);
  }

  protected abstract getIncludeOptions(): any;
  protected abstract getOrderByOptions(): any;
  protected abstract getSearchConditions(search: string): any[];
}

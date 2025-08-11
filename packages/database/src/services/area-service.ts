import { dbClient } from "../client";

export interface CreateAreaData {
  name: string;
  description?: string;
  color?: string;
  position?: number;
  userId: string;
}

export interface UpdateAreaData {
  name?: string;
  description?: string;
  color?: string;
  position?: number;
}

export interface AreaFilters {
  search?: string;
  userId?: string;
}

export class AreaService {
  async createArea(data: CreateAreaData) {
    const area = await dbClient.client.area.create({
      data: {
        ...data,
        version: 1,
        lastSync: new Date(),
      },
      include: {
        user: true,
        tasks: {
          where: { isDeleted: false },
          orderBy: { position: "asc" },
        },
      },
    });

    await dbClient.logSyncOperation(area.id, "Area", "CREATE", area);
    return area;
  }

  async updateArea(id: string, data: UpdateAreaData) {
    const existingArea = await dbClient.client.area.findUnique({
      where: { id },
    });

    if (!existingArea) {
      throw new Error(`Area with id ${id} not found`);
    }

    const area = await dbClient.client.area.update({
      where: { id },
      data: {
        ...data,
        version: { increment: 1 },
        lastSync: new Date(),
      },
      include: {
        user: true,
        tasks: {
          where: { isDeleted: false },
          orderBy: { position: "asc" },
        },
      },
    });

    await dbClient.logSyncOperation(area.id, "Area", "UPDATE", area);
    return area;
  }

  async deleteArea(id: string) {
    const area = await dbClient.client.area.findUnique({
      where: { id },
    });

    if (!area) {
      throw new Error(`Area with id ${id} not found`);
    }

    await dbClient.client.area.update({
      where: { id },
      data: {
        isDeleted: true,
        version: { increment: 1 },
        lastSync: new Date(),
      },
    });

    await dbClient.logSyncOperation(id, "Area", "DELETE", {
      id,
      isDeleted: true,
    });
  }

  async getById(id: string) {
    return dbClient.client.area.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        user: true,
        tasks: {
          where: { isDeleted: false },
          orderBy: { position: "asc" },
        },
      },
    });
  }

  async getByUser(userId: string, filters?: AreaFilters) {
    const where: any = {
      isDeleted: false,
      userId,
    };

    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search } },
        { description: { contains: filters.search } },
      ];
    }

    return dbClient.client.area.findMany({
      where,
      include: {
        user: true,
        tasks: {
          where: { isDeleted: false },
          orderBy: { position: "asc" },
        },
      },
      orderBy: { position: "asc" },
    });
  }

  async create(data: CreateAreaData) {
    return this.createArea(data);
  }

  async update(id: string, data: UpdateAreaData) {
    return this.updateArea(id, data);
  }

  async delete(id: string) {
    return this.deleteArea(id);
  }
}

export const areaService = new AreaService();

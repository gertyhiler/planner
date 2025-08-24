import { z } from "zod";
import { UserResponseSchema } from "./auth";
import { TaskResponseSchema } from "./tasks";
import { AreaModel, } from "../generated/models";
export const CreateAreaRequestSchema = z.object({
    name: AreaModel.shape.name.min(1, "Название области обязательно"),
    description: AreaModel.shape.description,
    color: AreaModel.shape.color,
});
export const UpdateAreaRequestSchema = z.object({
    name: AreaModel.shape.name.min(1, "Название области обязательно").optional(),
    description: AreaModel.shape.description.optional(),
    color: AreaModel.shape.color.optional(),
});
export const AreaResponseSchema = z.object({
    id: AreaModel.shape.id,
    name: AreaModel.shape.name,
    description: AreaModel.shape.description,
    color: AreaModel.shape.color,
    position: AreaModel.shape.position,
    createdAt: AreaModel.shape.createdAt,
    updatedAt: AreaModel.shape.updatedAt,
    userId: AreaModel.shape.userId,
    syncId: AreaModel.shape.syncId,
    lastSync: AreaModel.shape.lastSync,
    isDeleted: AreaModel.shape.isDeleted,
    version: AreaModel.shape.version,
    user: UserResponseSchema.optional(),
    tasks: z.array(TaskResponseSchema).optional(),
});
export const AreaParamsSchema = z.object({
    id: AreaModel.shape.id,
});
export const UpdateAreaParamsSchema = z.object({
    id: AreaModel.shape.id,
});
export const DeleteAreaParamsSchema = z.object({
    id: AreaModel.shape.id,
});
//# sourceMappingURL=areas.js.map
import { z } from "zod";
export declare const CreateAreaRequestSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const UpdateAreaRequestSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    color: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.core.$strip>;
export declare const AreaResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    userId: z.ZodString;
    syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    isDeleted: z.ZodBoolean;
    version: z.ZodNumber;
    user: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, z.core.$strip>>;
    tasks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodEnum<{
            ACTIVE: "ACTIVE";
            COMPLETED: "COMPLETED";
            ARCHIVED: "ARCHIVED";
            CANCELLED: "CANCELLED";
        }>>;
        priority: z.ZodOptional<z.ZodEnum<{
            LOW: "LOW";
            MEDIUM: "MEDIUM";
            HIGH: "HIGH";
            URGENT: "URGENT";
        }>>;
        startDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
        endDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
        allDay: z.ZodBoolean;
        position: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sort: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        userId: z.ZodString;
        projectId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        areaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        parentTaskId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        recurrenceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
        isDeleted: z.ZodBoolean;
        version: z.ZodNumber;
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, z.core.$strip>>;
        project: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
            userId: z.ZodString;
            syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
            isDeleted: z.ZodBoolean;
            version: z.ZodNumber;
        }, z.core.$strip>>;
        area: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            position: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
            userId: z.ZodString;
            syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
            isDeleted: z.ZodBoolean;
            version: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const AreaParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const UpdateAreaParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const DeleteAreaParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type CreateAreaRequest = z.infer<typeof CreateAreaRequestSchema>;
export type UpdateAreaRequest = z.infer<typeof UpdateAreaRequestSchema>;
export type AreaResponse = z.infer<typeof AreaResponseSchema>;
export type AreaParams = z.infer<typeof AreaParamsSchema>;
export type UpdateAreaParams = z.infer<typeof UpdateAreaParamsSchema>;
export type DeleteAreaParams = z.infer<typeof DeleteAreaParamsSchema>;
//# sourceMappingURL=areas.d.ts.map
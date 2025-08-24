import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "@planner/core/zod";

extendZodWithOpenApi(z);

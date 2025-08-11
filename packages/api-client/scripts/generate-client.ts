import { generate } from "openapi-typescript-codegen";
import { join } from "path";

async function generateClient() {
  const inputPath = join(
    __dirname,
    "../node_modules/@planner/api-schema/generated/openapi.yaml"
  );
  const outputPath = join(__dirname, "../generated");

  try {
    await generate({
      input: inputPath,
      output: outputPath,
      useUnionTypes: true,
      exportSchemas: true,
      exportServices: true,
      exportCore: true,
      exportModels: true,
    });

    console.log("✅ API клиент сгенерирован:", outputPath);
  } catch (error) {
    console.error("❌ Ошибка генерации API клиента:", error);
    process.exit(1);
  }
}

generateClient();

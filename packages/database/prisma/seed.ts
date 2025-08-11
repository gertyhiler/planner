import { PrismaClient } from "../generated/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Создаем тестового пользователя
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      name: "Test User",
    },
  });

  console.log("✅ Created user:", user.email);

  // Создаем тестовые области
  const areas = await Promise.all([
    prisma.area.upsert({
      where: { id: "area-1" },
      update: {},
      create: {
        id: "area-1",
        name: "Работа",
        description: "Задачи, связанные с работой",
        color: "#3B82F6",
        position: 1,
        userId: user.id,
      },
    }),
    prisma.area.upsert({
      where: { id: "area-2" },
      update: {},
      create: {
        id: "area-2",
        name: "Личное",
        description: "Личные задачи",
        color: "#10B981",
        position: 2,
        userId: user.id,
      },
    }),
  ]);

  console.log(
    "✅ Created areas:",
    areas.map((a) => a.name)
  );

  // Создаем тестовые проекты
  const projects = await Promise.all([
    prisma.project.upsert({
      where: { id: "project-1" },
      update: {},
      create: {
        id: "project-1",
        name: "Разработка приложения",
        description: "Основной проект по разработке",
        color: "#8B5CF6",
        userId: user.id,
      },
    }),
    prisma.project.upsert({
      where: { id: "project-2" },
      update: {},
      create: {
        id: "project-2",
        name: "Изучение новых технологий",
        description: "Проект для изучения новых технологий",
        color: "#F59E0B",
        userId: user.id,
      },
    }),
  ]);

  console.log(
    "✅ Created projects:",
    projects.map((p) => p.name)
  );

  // Создаем секции для проектов
  const sections = await Promise.all([
    prisma.section.upsert({
      where: { id: "section-1" },
      update: {},
      create: {
        id: "section-1",
        name: "В работе",
        position: 1,
        projectId: projects[0].id,
      },
    }),
    prisma.section.upsert({
      where: { id: "section-2" },
      update: {},
      create: {
        id: "section-2",
        name: "Завершено",
        position: 2,
        projectId: projects[0].id,
      },
    }),
  ]);

  console.log(
    "✅ Created sections:",
    sections.map((s) => s.name)
  );

  // Создаем тестовые задачи
  const tasks = await Promise.all([
    prisma.task.upsert({
      where: { id: "task-1" },
      update: {},
      create: {
        id: "task-1",
        name: "Создать дизайн интерфейса",
        description: "Разработать макеты для основных экранов приложения",
        status: "ACTIVE",
        priority: "HIGH",
        position: 1,
        userId: user.id,
        areaId: areas[0].id,
        projectId: projects[0].id,
        sectionId: sections[0].id,
      },
    }),
    prisma.task.upsert({
      where: { id: "task-2" },
      update: {},
      create: {
        id: "task-2",
        name: "Изучить React Native",
        description: "Изучить основы разработки мобильных приложений",
        status: "ACTIVE",
        priority: "MEDIUM",
        position: 2,
        userId: user.id,
        areaId: areas[0].id,
        projectId: projects[1].id,
      },
    }),
    prisma.task.upsert({
      where: { id: "task-3" },
      update: {},
      create: {
        id: "task-3",
        name: "Купить продукты",
        description: "Молоко, хлеб, яйца",
        status: "ACTIVE",
        priority: "LOW",
        position: 3,
        userId: user.id,
        areaId: areas[1].id,
      },
    }),
  ]);

  console.log(
    "✅ Created tasks:",
    tasks.map((t) => t.name)
  );

  // Создаем теги
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { id: "tag-1" },
      update: {},
      create: {
        id: "tag-1",
        name: "Важно",
        color: "#EF4444",
        sort: 1,
      },
    }),
    prisma.tag.upsert({
      where: { id: "tag-2" },
      update: {},
      create: {
        id: "tag-2",
        name: "Срочно",
        color: "#F97316",
        sort: 2,
      },
    }),
  ]);

  console.log(
    "✅ Created tags:",
    tags.map((t) => t.name)
  );

  console.log("🎉 Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createProject = async (data) => {
  const {
    title,
    description,
    category,
    techStack,
    difficulty,
    teamSize,
    ownerId,
  } = data;

  if (
    !title ||
    !description ||
    !category ||
    !techStack ||
    !difficulty ||
    !teamSize ||
    !ownerId
  ) {
    throw new Error("All fields are required.");
  }

  const project = await prisma.project.create({
    data: {
      title,
      description,
      category,
      techStack,
      difficulty,
      teamSize: Number(teamSize),
      ownerId,
    },
    include: {
      owner: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
  });

  return project;
};

const getAllProjects = async () => {
  return await prisma.project.findMany({
    include: {
      owner: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

module.exports = {
  createProject,
  getAllProjects,
};
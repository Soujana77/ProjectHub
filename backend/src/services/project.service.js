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

module.exports = {
  createProject,
};
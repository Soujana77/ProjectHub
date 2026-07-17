import type { Project } from "@/services/project.service";

export const mapProjectToCard = (project: Project) => {
  return {
    id: project.id,
    title: project.title,
    tagline: project.description,
    department: project.category,
    category: project.category,
    difficulty: project.difficulty,
    skills: project.techStack
      .split(",")
      .map((skill) => skill.trim()),
    owner: project.owner.fullName,
    members: `${project.currentMembers}/${project.teamSize}`,
    status: project.status,
  };
};
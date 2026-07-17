import { api } from "@/lib/api";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string;
  difficulty: string;
  status: string;
  teamSize: number;
  currentMembers: number;
  owner: {
    id: string;
    fullName: string;
    email: string;
  };
}

export const ProjectService = {
  async getAllProjects() {
    const response = await api.get("/projects");
    return response.data.projects as Project[];
  },
};
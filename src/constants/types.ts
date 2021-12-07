export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count?: number;
}

export interface BlogPost {
  title: string;
  pubDate: Date;
  link: string;
  guid: string;
  description: string;
  content: string;
  categories: string[];
  thumbnail: string;
}

export const filteredRepos = [345075300];

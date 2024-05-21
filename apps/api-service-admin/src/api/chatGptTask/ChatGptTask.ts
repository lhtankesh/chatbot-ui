export type ChatGptTask = {
  createdAt: Date;
  id: string;
  maxTokens: number | null;
  model: string | null;
  prompt: string | null;
  updatedAt: Date;
};

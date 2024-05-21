export type KnowledgeBase = {
  createdAt: Date;
  id: string;
  knowledgeBaseId: string | null;
  maxSize: number | null;
  query: string | null;
  updatedAt: Date;
};

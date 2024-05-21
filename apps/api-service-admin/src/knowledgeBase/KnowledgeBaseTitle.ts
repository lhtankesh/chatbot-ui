import { KnowledgeBase as TKnowledgeBase } from "../api/knowledgeBase/KnowledgeBase";

export const KNOWLEDGEBASE_TITLE_FIELD = "knowledgeBaseId";

export const KnowledgeBaseTitle = (record: TKnowledgeBase): string => {
  return record.knowledgeBaseId?.toString() || String(record.id);
};

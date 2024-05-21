import { SortOrder } from "../../util/SortOrder";

export type KnowledgeBaseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  knowledgeBaseId?: SortOrder;
  maxSize?: SortOrder;
  query?: SortOrder;
  updatedAt?: SortOrder;
};

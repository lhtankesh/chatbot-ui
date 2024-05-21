import { KnowledgeBaseWhereInput } from "./KnowledgeBaseWhereInput";
import { KnowledgeBaseOrderByInput } from "./KnowledgeBaseOrderByInput";

export type KnowledgeBaseFindManyArgs = {
  where?: KnowledgeBaseWhereInput;
  orderBy?: Array<KnowledgeBaseOrderByInput>;
  skip?: number;
  take?: number;
};

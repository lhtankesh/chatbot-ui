import { SortOrder } from "../../util/SortOrder";

export type ChatGptTaskOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  maxTokens?: SortOrder;
  model?: SortOrder;
  prompt?: SortOrder;
  updatedAt?: SortOrder;
};

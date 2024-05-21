import { SortOrder } from "../../util/SortOrder";

export type WebhookTriggerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};

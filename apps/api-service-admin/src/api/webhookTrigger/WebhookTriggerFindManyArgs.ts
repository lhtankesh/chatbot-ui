import { WebhookTriggerWhereInput } from "./WebhookTriggerWhereInput";
import { WebhookTriggerOrderByInput } from "./WebhookTriggerOrderByInput";

export type WebhookTriggerFindManyArgs = {
  where?: WebhookTriggerWhereInput;
  orderBy?: Array<WebhookTriggerOrderByInput>;
  skip?: number;
  take?: number;
};

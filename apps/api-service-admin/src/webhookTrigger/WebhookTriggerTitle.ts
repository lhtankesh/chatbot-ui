import { WebhookTrigger as TWebhookTrigger } from "../api/webhookTrigger/WebhookTrigger";

export const WEBHOOKTRIGGER_TITLE_FIELD = "url";

export const WebhookTriggerTitle = (record: TWebhookTrigger): string => {
  return record.url?.toString() || String(record.id);
};

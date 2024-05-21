import * as graphql from "@nestjs/graphql";
import { WebhookTriggerResolverBase } from "./base/webhookTrigger.resolver.base";
import { WebhookTrigger } from "./base/WebhookTrigger";
import { WebhookTriggerService } from "./webhookTrigger.service";

@graphql.Resolver(() => WebhookTrigger)
export class WebhookTriggerResolver extends WebhookTriggerResolverBase {
  constructor(protected readonly service: WebhookTriggerService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { WebhookTrigger } from "../webhookTrigger/base/WebhookTrigger";
import { WebhookTriggerDto } from "../webhookModule/WebhookTriggerDto";
import { WebhookModuleService } from "./webhookmodule.service";

export class WebhookModuleResolver {
  constructor(protected readonly service: WebhookModuleService) {}

  @graphql.Query(() => String)
  async WebhookTrigger(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.WebhookTrigger(args);
  }

  @graphql.Mutation(() => String)
  async WebhookTriggerAction(
    @graphql.Args()
    args: WebhookTriggerDto
  ): Promise<string> {
    return this.service.WebhookTriggerAction(args);
  }
}

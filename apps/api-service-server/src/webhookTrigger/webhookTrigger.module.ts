import { Module } from "@nestjs/common";
import { WebhookTriggerModuleBase } from "./base/webhookTrigger.module.base";
import { WebhookTriggerService } from "./webhookTrigger.service";
import { WebhookTriggerController } from "./webhookTrigger.controller";
import { WebhookTriggerResolver } from "./webhookTrigger.resolver";

@Module({
  imports: [WebhookTriggerModuleBase],
  controllers: [WebhookTriggerController],
  providers: [WebhookTriggerService, WebhookTriggerResolver],
  exports: [WebhookTriggerService],
})
export class WebhookTriggerModule {}

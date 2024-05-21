import { Module } from "@nestjs/common";
import { WebhookModuleService } from "./webhookmodule.service";
import { WebhookModuleController } from "./webhookmodule.controller";
import { WebhookModuleResolver } from "./webhookmodule.resolver";

@Module({
  controllers: [WebhookModuleController],
  providers: [WebhookModuleService, WebhookModuleResolver],
  exports: [WebhookModuleService],
})
export class WebhookModuleModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WebhookModuleService } from "./webhookmodule.service";
import { WebhookTriggerDto } from "../webhookModule/WebhookTriggerDto";
import { WebhookTrigger } from "../webhookTrigger/base/WebhookTrigger";

@swagger.ApiTags("webhookModules")
@common.Controller("webhookModules")
export class WebhookModuleController {
  constructor(protected readonly service: WebhookModuleService) {}

  @common.Get("/:id/webhook-trigger")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async WebhookTrigger(
    @common.Body()
    body: WebhookTriggerDto
  ): Promise<string> {
        return this.service.WebhookTrigger(body);
      }

  @common.Post("/webhook-trigger")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async WebhookTriggerAction(
    @common.Body()
    body: WebhookTriggerDto
  ): Promise<string> {
        return this.service.WebhookTriggerAction(body);
      }
}

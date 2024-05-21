import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebhookTriggerService } from "./webhookTrigger.service";
import { WebhookTriggerControllerBase } from "./base/webhookTrigger.controller.base";

@swagger.ApiTags("webhookTriggers")
@common.Controller("webhookTriggers")
export class WebhookTriggerController extends WebhookTriggerControllerBase {
  constructor(protected readonly service: WebhookTriggerService) {
    super(service);
  }
}

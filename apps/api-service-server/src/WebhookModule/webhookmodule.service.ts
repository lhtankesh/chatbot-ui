import { Injectable } from "@nestjs/common";
import { WebhookTrigger } from "../webhookTrigger/base/WebhookTrigger";
import { WebhookTriggerDto } from "../webhookModule/WebhookTriggerDto";

@Injectable()
export class WebhookModuleService {
  constructor() {}
  async WebhookTrigger(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async WebhookTriggerAction(args: WebhookTriggerDto): Promise<string> {
    throw new Error("Not implemented");
  }
}

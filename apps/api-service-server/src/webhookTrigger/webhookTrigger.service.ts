import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebhookTriggerServiceBase } from "./base/webhookTrigger.service.base";

@Injectable()
export class WebhookTriggerService extends WebhookTriggerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

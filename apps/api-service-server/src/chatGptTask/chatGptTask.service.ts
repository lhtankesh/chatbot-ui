import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatGptTaskServiceBase } from "./base/chatGptTask.service.base";

@Injectable()
export class ChatGptTaskService extends ChatGptTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

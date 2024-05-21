import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KnowledgeBaseServiceBase } from "./base/knowledgeBase.service.base";

@Injectable()
export class KnowledgeBaseService extends KnowledgeBaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

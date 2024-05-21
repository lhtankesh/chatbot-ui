import { Module } from "@nestjs/common";
import { KnowledgeBaseModuleBase } from "./base/knowledgeBase.module.base";
import { KnowledgeBaseService } from "./knowledgeBase.service";
import { KnowledgeBaseController } from "./knowledgeBase.controller";
import { KnowledgeBaseResolver } from "./knowledgeBase.resolver";

@Module({
  imports: [KnowledgeBaseModuleBase],
  controllers: [KnowledgeBaseController],
  providers: [KnowledgeBaseService, KnowledgeBaseResolver],
  exports: [KnowledgeBaseService],
})
export class KnowledgeBaseModule {}

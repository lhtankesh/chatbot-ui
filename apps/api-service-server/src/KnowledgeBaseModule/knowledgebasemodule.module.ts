import { Module } from "@nestjs/common";
import { KnowledgeBaseModuleService } from "./knowledgebasemodule.service";
import { KnowledgeBaseModuleController } from "./knowledgebasemodule.controller";
import { KnowledgeBaseModuleResolver } from "./knowledgebasemodule.resolver";

@Module({
  controllers: [KnowledgeBaseModuleController],
  providers: [KnowledgeBaseModuleService, KnowledgeBaseModuleResolver],
  exports: [KnowledgeBaseModuleService],
})
export class KnowledgeBaseModuleModule {}

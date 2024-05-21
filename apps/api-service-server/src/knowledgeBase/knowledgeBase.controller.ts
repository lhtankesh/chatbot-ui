import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KnowledgeBaseService } from "./knowledgeBase.service";
import { KnowledgeBaseControllerBase } from "./base/knowledgeBase.controller.base";

@swagger.ApiTags("knowledgeBases")
@common.Controller("knowledgeBases")
export class KnowledgeBaseController extends KnowledgeBaseControllerBase {
  constructor(protected readonly service: KnowledgeBaseService) {
    super(service);
  }
}

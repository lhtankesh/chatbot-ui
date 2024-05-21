import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KnowledgeBaseModuleService } from "./knowledgebasemodule.service";
import { KnowledgeBaseDto } from "../knowledgeBaseModule/KnowledgeBaseDto";

@swagger.ApiTags("knowledgeBaseModules")
@common.Controller("knowledgeBaseModules")
export class KnowledgeBaseModuleController {
  constructor(protected readonly service: KnowledgeBaseModuleService) {}

  @common.Get("/:id/query-knowledge-base")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async QueryKnowledgeBase(
    @common.Body()
    body: KnowledgeBaseDto
  ): Promise<string> {
        return this.service.QueryKnowledgeBase(body);
      }

  @common.Post("/query-knowledgebase")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async QueryKnowledgeBaseAction(
    @common.Body()
    body: KnowledgeBaseDto
  ): Promise<string> {
        return this.service.QueryKnowledgeBaseAction(body);
      }
}

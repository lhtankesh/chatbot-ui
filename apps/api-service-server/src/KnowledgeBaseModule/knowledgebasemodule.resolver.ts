import * as graphql from "@nestjs/graphql";
import { KnowledgeBaseDto } from "../knowledgeBaseModule/KnowledgeBaseDto";
import { KnowledgeBaseModuleService } from "./knowledgebasemodule.service";

export class KnowledgeBaseModuleResolver {
  constructor(protected readonly service: KnowledgeBaseModuleService) {}

  @graphql.Query(() => String)
  async QueryKnowledgeBase(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.QueryKnowledgeBase(args);
  }

  @graphql.Mutation(() => String)
  async QueryKnowledgeBaseAction(
    @graphql.Args()
    args: KnowledgeBaseDto
  ): Promise<string> {
    return this.service.QueryKnowledgeBaseAction(args);
  }
}

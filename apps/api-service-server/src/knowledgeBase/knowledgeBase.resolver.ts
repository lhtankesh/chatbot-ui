import * as graphql from "@nestjs/graphql";
import { KnowledgeBaseResolverBase } from "./base/knowledgeBase.resolver.base";
import { KnowledgeBase } from "./base/KnowledgeBase";
import { KnowledgeBaseService } from "./knowledgeBase.service";

@graphql.Resolver(() => KnowledgeBase)
export class KnowledgeBaseResolver extends KnowledgeBaseResolverBase {
  constructor(protected readonly service: KnowledgeBaseService) {
    super(service);
  }
}

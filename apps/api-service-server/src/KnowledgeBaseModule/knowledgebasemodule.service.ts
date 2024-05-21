import { Injectable } from "@nestjs/common";
import { KnowledgeBaseDto } from "../knowledgeBaseModule/KnowledgeBaseDto";

@Injectable()
export class KnowledgeBaseModuleService {
  constructor() {}
  async QueryKnowledgeBase(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async QueryKnowledgeBaseAction(args: KnowledgeBaseDto): Promise<string> {
    throw new Error("Not implemented");
  }
}

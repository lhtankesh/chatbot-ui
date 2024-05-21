import * as graphql from "@nestjs/graphql";
import { ChatGptTaskResolverBase } from "./base/chatGptTask.resolver.base";
import { ChatGptTask } from "./base/ChatGptTask";
import { ChatGptTaskService } from "./chatGptTask.service";

@graphql.Resolver(() => ChatGptTask)
export class ChatGptTaskResolver extends ChatGptTaskResolverBase {
  constructor(protected readonly service: ChatGptTaskService) {
    super(service);
  }
}

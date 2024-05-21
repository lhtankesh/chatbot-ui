import * as graphql from "@nestjs/graphql";
import { ChatGptTask } from "../chatGptTask/base/ChatGptTask";
import { ChatGptTaskDto } from "../chatGptModule/ChatGptTaskDto";
import { ChatGptModuleService } from "./chatgptmodule.service";

export class ChatGptModuleResolver {
  constructor(protected readonly service: ChatGptModuleService) {}

  @graphql.Query(() => String)
  async ChatGptTask(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ChatGptTask(args);
  }

  @graphql.Mutation(() => String)
  async ChatGptTaskAction(
    @graphql.Args()
    args: ChatGptTaskDto
  ): Promise<string> {
    return this.service.ChatGptTaskAction(args);
  }
}

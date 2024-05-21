import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatGptTaskService } from "./chatGptTask.service";
import { ChatGptTaskControllerBase } from "./base/chatGptTask.controller.base";

@swagger.ApiTags("chatGptTasks")
@common.Controller("chatGptTasks")
export class ChatGptTaskController extends ChatGptTaskControllerBase {
  constructor(protected readonly service: ChatGptTaskService) {
    super(service);
  }
}

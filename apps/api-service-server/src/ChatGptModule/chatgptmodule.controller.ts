import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ChatGptModuleService } from "./chatgptmodule.service";
import { ChatGptTaskDto } from "../chatGptModule/ChatGptTaskDto";
import { ChatGptTask } from "../chatGptTask/base/ChatGptTask";

@swagger.ApiTags("chatGptModules")
@common.Controller("chatGptModules")
export class ChatGptModuleController {
  constructor(protected readonly service: ChatGptModuleService) {}

  @common.Get("/:id/chat-gpt-task")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ChatGptTask(
    @common.Body()
    body: ChatGptTaskDto
  ): Promise<string> {
        return this.service.ChatGptTask(body);
      }

  @common.Post("/chatgpt-task")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ChatGptTaskAction(
    @common.Body()
    body: ChatGptTaskDto
  ): Promise<string> {
        return this.service.ChatGptTaskAction(body);
      }
}

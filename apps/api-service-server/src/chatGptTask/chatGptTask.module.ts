import { Module } from "@nestjs/common";
import { ChatGptTaskModuleBase } from "./base/chatGptTask.module.base";
import { ChatGptTaskService } from "./chatGptTask.service";
import { ChatGptTaskController } from "./chatGptTask.controller";
import { ChatGptTaskResolver } from "./chatGptTask.resolver";

@Module({
  imports: [ChatGptTaskModuleBase],
  controllers: [ChatGptTaskController],
  providers: [ChatGptTaskService, ChatGptTaskResolver],
  exports: [ChatGptTaskService],
})
export class ChatGptTaskModule {}

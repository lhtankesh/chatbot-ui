import { Module } from "@nestjs/common";
import { ChatGptModuleService } from "./chatgptmodule.service";
import { ChatGptModuleController } from "./chatgptmodule.controller";
import { ChatGptModuleResolver } from "./chatgptmodule.resolver";

@Module({
  controllers: [ChatGptModuleController],
  providers: [ChatGptModuleService, ChatGptModuleResolver],
  exports: [ChatGptModuleService],
})
export class ChatGptModuleModule {}

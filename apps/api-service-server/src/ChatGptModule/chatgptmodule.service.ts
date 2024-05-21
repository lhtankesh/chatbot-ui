import { Injectable } from "@nestjs/common";
import { ChatGptTask } from "../chatGptTask/base/ChatGptTask";
import { ChatGptTaskDto } from "../chatGptModule/ChatGptTaskDto";

@Injectable()
export class ChatGptModuleService {
  constructor() {}
  async ChatGptTask(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ChatGptTaskAction(args: ChatGptTaskDto): Promise<string> {
    throw new Error("Not implemented");
  }
}

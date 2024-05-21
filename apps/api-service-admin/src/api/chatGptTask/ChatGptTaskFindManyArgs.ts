import { ChatGptTaskWhereInput } from "./ChatGptTaskWhereInput";
import { ChatGptTaskOrderByInput } from "./ChatGptTaskOrderByInput";

export type ChatGptTaskFindManyArgs = {
  where?: ChatGptTaskWhereInput;
  orderBy?: Array<ChatGptTaskOrderByInput>;
  skip?: number;
  take?: number;
};

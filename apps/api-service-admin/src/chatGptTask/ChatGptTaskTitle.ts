import { ChatGptTask as TChatGptTask } from "../api/chatGptTask/ChatGptTask";

export const CHATGPTTASK_TITLE_FIELD = "model";

export const ChatGptTaskTitle = (record: TChatGptTask): string => {
  return record.model?.toString() || String(record.id);
};

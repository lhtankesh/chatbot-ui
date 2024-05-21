import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChatGptTaskWhereInput = {
  id?: StringFilter;
  maxTokens?: IntNullableFilter;
  model?: StringNullableFilter;
  prompt?: StringNullableFilter;
};

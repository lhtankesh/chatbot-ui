import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WebhookTriggerWhereInput = {
  id?: StringFilter;
  method?: "Option1";
  url?: StringNullableFilter;
};

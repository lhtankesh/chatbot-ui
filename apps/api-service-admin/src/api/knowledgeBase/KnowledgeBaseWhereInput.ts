import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type KnowledgeBaseWhereInput = {
  id?: StringFilter;
  knowledgeBaseId?: StringNullableFilter;
  maxSize?: IntNullableFilter;
  query?: StringNullableFilter;
};

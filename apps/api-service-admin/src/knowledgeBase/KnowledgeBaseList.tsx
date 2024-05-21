import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const KnowledgeBaseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"KnowledgeBases"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="KnowledgeBaseId" source="knowledgeBaseId" />
        <TextField label="MaxSize" source="maxSize" />
        <TextField label="Query" source="query" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

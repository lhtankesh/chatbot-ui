import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChatGptTaskList } from "./chatGptTask/ChatGptTaskList";
import { ChatGptTaskCreate } from "./chatGptTask/ChatGptTaskCreate";
import { ChatGptTaskEdit } from "./chatGptTask/ChatGptTaskEdit";
import { ChatGptTaskShow } from "./chatGptTask/ChatGptTaskShow";
import { KnowledgeBaseList } from "./knowledgeBase/KnowledgeBaseList";
import { KnowledgeBaseCreate } from "./knowledgeBase/KnowledgeBaseCreate";
import { KnowledgeBaseEdit } from "./knowledgeBase/KnowledgeBaseEdit";
import { KnowledgeBaseShow } from "./knowledgeBase/KnowledgeBaseShow";
import { WebhookTriggerList } from "./webhookTrigger/WebhookTriggerList";
import { WebhookTriggerCreate } from "./webhookTrigger/WebhookTriggerCreate";
import { WebhookTriggerEdit } from "./webhookTrigger/WebhookTriggerEdit";
import { WebhookTriggerShow } from "./webhookTrigger/WebhookTriggerShow";
import { AwsDataList } from "./awsData/AwsDataList";
import { AwsDataCreate } from "./awsData/AwsDataCreate";
import { AwsDataEdit } from "./awsData/AwsDataEdit";
import { AwsDataShow } from "./awsData/AwsDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"APIService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ChatGptTask"
          list={ChatGptTaskList}
          edit={ChatGptTaskEdit}
          create={ChatGptTaskCreate}
          show={ChatGptTaskShow}
        />
        <Resource
          name="KnowledgeBase"
          list={KnowledgeBaseList}
          edit={KnowledgeBaseEdit}
          create={KnowledgeBaseCreate}
          show={KnowledgeBaseShow}
        />
        <Resource
          name="WebhookTrigger"
          list={WebhookTriggerList}
          edit={WebhookTriggerEdit}
          create={WebhookTriggerCreate}
          show={WebhookTriggerShow}
        />
        <Resource
          name="AwsData"
          list={AwsDataList}
          edit={AwsDataEdit}
          create={AwsDataCreate}
          show={AwsDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;

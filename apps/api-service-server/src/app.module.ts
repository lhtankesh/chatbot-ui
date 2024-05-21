import { Module } from "@nestjs/common";
import { ChatGptTaskModule } from "./chatGptTask/chatGptTask.module";
import { KnowledgeBaseModule } from "./knowledgeBase/knowledgeBase.module";
import { WebhookTriggerModule } from "./webhookTrigger/webhookTrigger.module";
import { AwsDataModule } from "./awsData/awsData.module";
import { AwsDataModuleModule } from "./AwsDataModule/awsdatamodule.module";
import { ChatGptModuleModule } from "./ChatGptModule/chatgptmodule.module";
import { KnowledgeBaseModuleModule } from "./KnowledgeBaseModule/knowledgebasemodule.module";
import { WebhookModuleModule } from "./WebhookModule/webhookmodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ChatGptTaskModule,
    KnowledgeBaseModule,
    WebhookTriggerModule,
    AwsDataModule,
    AwsDataModuleModule,
    ChatGptModuleModule,
    KnowledgeBaseModuleModule,
    WebhookModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

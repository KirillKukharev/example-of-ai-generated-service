import { Module } from "@nestjs/common";
import { LogModule } from "./log/log.module";
import { AdminUserModule } from "./adminUser/adminUser.module";
import { BotActivityModule } from "./botActivity/botActivity.module";
import { BotCommandModule } from "./botCommand/botCommand.module";
import { TaskModule } from "./task/task.module";
import { ReportModule } from "./report/report.module";
import { AnalyticsDataModule } from "./analyticsData/analyticsData.module";
import { TaskModule } from "./Task/task.module";
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
    LogModule,
    AdminUserModule,
    BotActivityModule,
    BotCommandModule,
    TaskModule,
    ReportModule,
    AnalyticsDataModule,
    TaskModule,
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

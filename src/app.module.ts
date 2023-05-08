import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { DevelopersModule } from "./developers/developers.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ["./**/*.graphql"],
    }),
    DevelopersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

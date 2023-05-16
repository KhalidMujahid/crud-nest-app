import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as dotenv from "dotenv";
import * as express from "express";
import helmet from "helmet";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(helmet());

  app.use(express.static("public"));

  app.enableCors({ origin: "*" });

  app.setViewEngine("ejs");

  app.setBaseViewsDir("views");

  await app.listen(PORT);
}
bootstrap();

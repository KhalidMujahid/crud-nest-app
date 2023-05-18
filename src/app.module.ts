import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { BooksModule } from "./books/books.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1/nest-book"),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

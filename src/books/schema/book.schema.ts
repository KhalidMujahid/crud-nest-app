import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Book {
  @Prop()
  book_id: string;

  @Prop()
  book_title: string;

  @Prop()
  book_author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);

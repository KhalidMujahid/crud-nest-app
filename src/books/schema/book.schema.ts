import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Book {
  @Prop()
  book_title: string;

  @Prop()
  book_author: string;
}

export type bookModel = Document & Book;

export const BookSchema = SchemaFactory.createForClass(Book);

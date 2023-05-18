import { Document } from "mongoose";

class addNewBookDto {
  book_author: string;
  book_title: string;
}

export type addNewBookDtoModel = Document & addNewBookDto;

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Book } from "./interfaces/book.interface";

@Injectable()
export class BooksService {
  constructor(@InjectModel("Book") private readonly bookModel: Model<Book>) {}

  findAllBooks(): Promise<Book[]> {
    return this.bookModel.find();
  }

  findOneBook(id: string): Promise<Book> | string {
    const book = this.bookModel.findById(id);

    if (book) {
      return book;
    } else {
      return "Book not found";
    }
  }
}

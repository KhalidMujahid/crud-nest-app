import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { bookModel } from "./schema/book.schema";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel("Book") private readonly bookModel: Model<bookModel>
  ) {}

  async findAllBooks(): Promise<bookModel[]> {
    return await this.bookModel.find();
  }

  async findOneBook(id: string): Promise<bookModel | string | never> {
    const book = this.bookModel.findById(id);

    if (book) {
      return await book;
    } else {
      throw new HttpException(
        "Book with the request id not found!",
        HttpStatus.NOT_FOUND
      );
    }
  }

  async addNewBook(book: bookModel): Promise<bookModel> {
    const newBook = await this.bookModel.create(book);
    return newBook;
  }
}

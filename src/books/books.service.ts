import { Injectable } from "@nestjs/common";
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

  async findOneBook(id: string): Promise<bookModel> {
    const book = this.bookModel.findById(id);

    if (book) {
      return await book;
    } else {
      return book;
    }
  }

  async addNewBook(book: bookModel): Promise<bookModel> {
    const newBook = await this.bookModel.create(book);
    return newBook;
  }

  async removeBook(id: string): Promise<bookModel> {
    return await this.bookModel.findByIdAndRemove(id);
  }

  async updateBook(id: string, whatToUpdate: bookModel): Promise<bookModel> {
    const findId = await this.bookModel.findById(id);

    if (findId) {
      return await this.bookModel.findByIdAndUpdate(id, whatToUpdate);
    } else {
      return findId;
    }
  }
}

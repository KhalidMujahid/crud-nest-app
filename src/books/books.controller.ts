import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { BooksService } from "./books.service";
import { addNewBookDtoModel } from "./dto/addNewBookDto.dto";
import { bookModel } from "./schema/book.schema";

@Controller("books")
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  //get all books
  @Get()
  findAllBooks(): Promise<bookModel[]> {
    return this.bookService.findAllBooks();
  }

  //get single book
  @Get(":id")
  findOneBook(@Param("id") id: string): Promise<bookModel | string> {
    const book = this.bookService.findOneBook(id);

    if (book) {
      return book;
    } else {
      throw new HttpException(
        "Book with the request id not found!",
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Post()
  addNewBook(@Body() addNewBookDto: addNewBookDtoModel): Promise<bookModel> {
    return this.bookService.addNewBook(addNewBookDto);
  }

  @Delete(":id")
  removeBook(@Param("id") id: string): Promise<bookModel> {
    return this.bookService.removeBook(id);
  }

  @Put(":id")
  updateBook(
    @Param("id") id: string,
    @Body() updateBook: addNewBookDtoModel
  ): Promise<bookModel | string> {
    const result = this.bookService.updateBook(id, updateBook);

    if (result) {
      return result;
    } else {
      throw new HttpException(
        "Book with the request id not found!",
        HttpStatus.NOT_FOUND
      );
    }
  }
}

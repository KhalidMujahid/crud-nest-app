import { Body, Controller, Get, Param } from "@nestjs/common";
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
    return this.bookService.findOneBook(id);
  }

  addNewBook(@Body() addNewBookDto: addNewBookDtoModel): Promise<bookModel> {
    return this.bookService.addNewBook(addNewBookDto);
  }
}

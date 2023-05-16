import { Controller, Get, Param } from "@nestjs/common";
import { BooksService } from "./books.service";
import { Book } from "./interfaces/book.interface";

@Controller("books")
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  //get all books
  @Get()
  findAllBooks(): Promise<Book[]> {
    return this.bookService.findAllBooks();
  }

  //get single book
  @Get(":id")
  findOneBook(@Param("id") id: string): Promise<Book> | string {
    return this.bookService.findOneBook(id);
  }
}

import { Book } from '../../../Book';
import { ICreateBookDTO } from '../../../dtos/ICreateBookDTO';
import { IUpdateBookDTO } from '../../../dtos/IUpdateBookDTO';
import { IBookRepository } from '../../types/IBookRepository';
import { IBookFilters } from '../../types/IBookFilters';

export class BookRepositoryInMemory implements IBookRepository {
  public books: Book[] = [];

  constructor(withSeeds?: boolean) {
    if (withSeeds) {
      this.books.push({
        id: 'book-id',
        title: 'Book Test',
        author: 'Author test',
        genre: 'Genre test',
        img: 'image-test.png',
        synopsis: 'Synopsis test',
        systemEntryDate: new Date(),
        isActive: true,
        isLent: false,
      });
    }
  }

  async create(bookData: ICreateBookDTO): Promise<Book> {
    const book = new Book(bookData);
    this.books.push(book);
    return book;
  }

  async update(bookData: IUpdateBookDTO): Promise<Book> {
    const index = this.books.findIndex((book) => book.id === bookData.id);
    const book = { ...this.books[index] };

    this.books[index] = {
      id: book.id,
      title: bookData.title ?? book.title,
      author: bookData.author ?? book.author,
      genre: bookData.genre ?? book.genre,
      img: bookData.img ?? book.img,
      synopsis: bookData.synopsis ?? book.synopsis,
      systemEntryDate: bookData.systemEntryDate ?? book.systemEntryDate,
      isActive: bookData.isActive !== undefined ? bookData.isActive : book.isActive,
      isLent: bookData.isLent !== undefined ? bookData.isLent : book.isLent,
      description: bookData.description ?? book.description,
    };

    return this.books[index];
  }

  async findById(bookId: string): Promise<Book | null> {
    const book = this.books.find((book) => book.id === bookId);
    if (!book) return null;
    return book;
  }

  async findAll(filters: IBookFilters): Promise<{ books: Book[]; total: number }> {
    let filteredBooks: Book[] = [...this.books];

    if (filters.title) filteredBooks = filteredBooks.filter((book) => book.title === filters.title);
    return { books: filteredBooks, total: this.books.length };
  }

  async delete(bookId: string): Promise<void> {
    const index = this.books.findIndex((book) => book.id === bookId);
    if (index !== -1) this.books.splice(index, 1);
  }
}

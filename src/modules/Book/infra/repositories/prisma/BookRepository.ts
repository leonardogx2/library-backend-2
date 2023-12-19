import { prisma } from '../../../../../shared/database/prisma';
import { Book } from '../../../Book';
import { ICreateBookDTO } from '../../../dtos/ICreateBookDTO';
import { IUpdateBookDTO } from '../../../dtos/IUpdateBookDTO';
import { IBookFilters } from '../../types/IBookFilters';
import { IBookRepository } from '../../types/IBookRepository';
import { Prisma } from '@prisma/client';

export class BookRepository implements IBookRepository {
  async create(bookData: ICreateBookDTO): Promise<Book> {
    const bookInstance = new Book(bookData);

    const book = await prisma.book.create({ data: bookInstance });

    return book;
  }

  async update(bookData: IUpdateBookDTO): Promise<Book> {
    const book = (await prisma.book.findUnique({ where: { id: bookData.id } })) as Book;

    const updatedBook = await prisma.book.update({
      where: { id: bookData.id },
      data: {
        img: bookData.img ?? book.img,
        title: bookData.title ?? book.title,
        author: bookData.author ?? book.author,
        genre: bookData.genre ?? book.genre,
        synopsis: bookData.synopsis ?? book.synopsis,
        systemEntryDate: bookData.systemEntryDate ?? book.systemEntryDate,
        isActive: bookData.isActive !== undefined ? bookData.isActive : book.isActive,
        isLent: bookData.isLent !== undefined ? bookData.isLent : book.isLent,
        description: bookData.description ?? book.description,
      },
    });

    return updatedBook;
  }

  async findById(bookId: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({ where: { id: bookId } });
    return book;
  }

  async findAll(filters: IBookFilters): Promise<{ books: Book[]; total: number }> {
    const { page, size, title } = filters;

    const pagination = {
      skip: ((page as number) - 1) * (size as number),
      take: Number(size),
    };

    const where: Prisma.BookWhereInput = {};
    const include: Prisma.BookInclude = {
      rents: true,
    };

    if (title) where.title = title;

    const books = await prisma.book.findMany({ where, include, ...pagination });
    const total = await prisma.book.count({ where });

    return { books, total };
  }

  async delete(bookId: string): Promise<void> {
    await prisma.book.delete({ where: { id: bookId } });
  }
}

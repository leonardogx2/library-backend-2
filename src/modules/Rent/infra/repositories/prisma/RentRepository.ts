import { Prisma } from '@prisma/client';
import { prisma } from '../../../../../shared/database/prisma';
import { ICreateRentDTO } from '../../../dtos/ICreateRentDTO';
import { Rent } from '../../../Rent';
import { IRentFilters, IRentRepository } from '../types/IRentRepository';

export class RentRepository implements IRentRepository {
  async create(rentData: ICreateRentDTO): Promise<Rent> {
    const rentInstance = new Rent(rentData);

    const rent = await prisma.rent.create({ data: rentInstance });

    return rent;
  }

  async findAll(filters: IRentFilters): Promise<Rent[]> {
    const { page, size } = filters;

    const where: Prisma.RentWhereInput = {};
    const include: Prisma.RentInclude = { book: true };

    const pagination = {
      skip: ((page as number) - 1) * (size as number),
      take: Number(size),
    };

    const rents = await prisma.rent.findMany({ where, include, ...pagination });

    return rents;
  }
}

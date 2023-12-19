import { ICreateRentDTO } from '../../../dtos/ICreateRentDTO';
import { Rent } from '../../../Rent';
import { IRentFilters, IRentRepository } from '../types/IRentRepository';

export class RentRepositoryInMemory implements IRentRepository {
  public rents: Rent[] = [];

  constructor(withSeeds?: boolean) {
    if (withSeeds) {
      this.rents.push({
        id: 'rent-id',
        student_name: 'Leonardo',
        bookId: 'book-id',
        class: 'T40',
        withdrawalDate: new Date(),
        deliveryDate: new Date(),
      });
    }
  }

  async create(rentData: ICreateRentDTO): Promise<Rent> {
    const rent = new Rent(rentData);
    this.rents.push(rent);
    return rent;
  }

  async findAll(filters: IRentFilters): Promise<Rent[]> {
    const { page, size } = filters;

    return this.rents;
  }
}

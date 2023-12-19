import { AppError } from '../../../../shared/errors/AppError';
import { IBookRepository } from '../../../Book/infra/types/IBookRepository';
import { ICreateRentDTO } from '../../dtos/ICreateRentDTO';
import { IRentRepository } from '../../infra/repositories/types/IRentRepository';

export class CreateRentUseCase {
  constructor(private rentRepo: IRentRepository, private bookRepo: IBookRepository) {}

  async execute(rentData: ICreateRentDTO) {
    const BookExists = await this.bookRepo.findById(rentData.bookId);
    if (!BookExists) throw new AppError('Livro não encontrado.');

    const currentDate = new Date();
    const withdrawalDate = new Date(rentData.withdrawalDate);
    const deliveryDate = new Date(rentData.deliveryDate);

    if (withdrawalDate.getFullYear() < currentDate.getFullYear() || withdrawalDate.getMonth() < currentDate.getMonth())
      throw new AppError('Data de retirada antiga.');

    if (withdrawalDate > deliveryDate)
      throw new AppError('A data de entrega não pode mais antiga que a data de retirada.');

    await this.bookRepo.update({ id: rentData.bookId, isLent: true });
    const rent = await this.rentRepo.create(rentData);
    return rent;
  }
}

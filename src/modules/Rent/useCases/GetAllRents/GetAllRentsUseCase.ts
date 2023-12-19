import { IRentFilters, IRentRepository } from '../../infra/repositories/types/IRentRepository';

export class GetAllRentsUseCase {
  constructor(private rentRepo: IRentRepository) {}

  async execute(filters: IRentFilters) {
    const rents = await this.rentRepo.findAll(filters);
    return rents;
  }
}

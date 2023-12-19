import { Rent } from '../../../Rent';
import { ICreateRentDTO } from '../../../dtos/ICreateRentDTO';

export interface IRentFilters {
  page?: number;
  size?: number;
}

export interface IRentRepository {
  create(rentData: ICreateRentDTO): Promise<Rent>;
  findAll(filters: IRentFilters): Promise<Rent[]>;
}

export interface IUpdateBookDTO {
  id: string;
  img?: string;
  title?: string;
  author?: string;
  genre?: string;
  synopsis?: string;
  systemEntryDate?: Date;
  isActive?: boolean;
  isLent?: boolean;
  description?: string;
}

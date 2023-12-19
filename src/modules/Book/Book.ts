import crypto from 'crypto';

interface BookProps {
  id?: string;
  title: string;
  author: string;
  genre: string;
  img: string;
  synopsis: string;
  systemEntryDate: Date;
  isActive?: boolean;
  isLent?: boolean;
  description?: string;
}

export class Book {
  title: string = '';
  author: string = '';
  genre: string = '';
  img: string = '';
  synopsis: string = '';
  systemEntryDate: Date = new Date();
  isActive: boolean = true;
  isLent: boolean = false;
  description?: string;
  id: string = '';

  constructor(props: BookProps) {
    if (!props.id) props.id = crypto.randomUUID();

    Object.assign(this, props);
  }
}

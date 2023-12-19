import crypto from 'crypto';

interface RentProps {
  id?: string;
  bookId: string;
  student_name: string;
  class: string;
  withdrawalDate: Date;
  deliveryDate: Date;
}

export class Rent {
  id: string = '';
  bookId: string = '';
  student_name: string = '';
  class: string = '';
  withdrawalDate: Date = new Date();
  deliveryDate: Date = new Date();

  constructor(props: RentProps) {
    if (!props.id) props.id = crypto.randomUUID();

    Object.assign(this, props);
  }
}

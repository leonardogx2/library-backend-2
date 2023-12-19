import crypto from 'crypto';

interface UserProps {
  email: string;
  name: string;
  password: string;
  id?: string;
}

export class User {
  public email: string = '';
  public name: string = '';
  public password: string = '';
  public id: string;

  constructor(props: UserProps) {
    Object.assign(this, props);
    this.id = props.id ? props.id : crypto.randomUUID();
  }
}

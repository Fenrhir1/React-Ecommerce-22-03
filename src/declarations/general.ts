export interface Product {
  id?: number;
  title: string;
  price: number;
  image: string;
  stock: number;
}

export interface Users {
  id: number;
  name: string;
  email: string;
  password?: string;
  isAdmin: boolean;
}

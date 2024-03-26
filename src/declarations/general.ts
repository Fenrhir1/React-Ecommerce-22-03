export interface Product {
  id?: number;
  description?: string;
  title: string;
  price: number;
  image: string;
  stock?: any;
  category?: string;
}

export interface Users {
  id: number;
  name: string;
  email: string;
  password?: string;
  isAdmin: boolean;
}

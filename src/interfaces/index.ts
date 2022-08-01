export interface Products {
  name: string,
  amount: string,
}

export interface Users {
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface Orders {
  id: number,
  userId: number,
  productsIds: number[]
}
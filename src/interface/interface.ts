export interface IProduct {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  rating: number;
  numReviews: number;
  description: string;
}

export interface ResponseGenerator{
    config?: string;
    data: IProduct[];
    headers?:string;
    request?:string;
    status?:string;
    statusText?:string;
}

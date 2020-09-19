export interface Product {
    _id?: number;
    title: string;
    price: number;
    image: string;
    description: string;
    _stock?: number;
    _cant?: number;
}
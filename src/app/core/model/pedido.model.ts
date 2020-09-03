export interface Pedido {
    id_pedido: number;
    products: Pedido[];
    nombre: string;
    dni: number;
    fecha: Date;
}
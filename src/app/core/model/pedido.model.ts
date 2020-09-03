import { Producto } from './producto.model';

export interface Pedido {
    id?: number;
    productos?: Pedido[];
    nombre?: string;
    dni?: string;
    fecha?: Date;
    descripcion?: string;
    cant?: number;
}
import { marca } from "./marca.interface";
import { medida } from "./medida.interface";
import { product } from "./product.interface";

export interface componenteforSearch {
  medidas :medida[],
  marcas: marca[],
  productos:product[]
}
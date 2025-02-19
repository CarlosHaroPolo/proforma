import { Marca } from "./marca.interface";
import { Medida } from "./medida.interface";

export interface product {
  id:         string;
  Marca:      Marca;
  medida:     Medida;
  name:       string;
  sale_price: string;
}

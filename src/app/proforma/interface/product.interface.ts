/* import { marca } from "./marca.interface";
import { medida } from "./medida.interface"; */

import { itemMarca } from "./marca.interface";
import { itemMedida } from "./medida.interface";

export interface product {
  id:         string;
  Marca:      itemMarca;
  medida:     itemMedida;
  name:       string;
  sale_price: string;
}

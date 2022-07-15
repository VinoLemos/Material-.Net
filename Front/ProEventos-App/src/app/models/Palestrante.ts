import { RedeSocial } from "./RedeSocial";
import { PalestranteEvento } from "./PalestranteEvento";

export interface Palestrante {
  id: number;
  nome : string;
  minicurriculo : string;
  imagemurl : string;
  telefone : string;
  email : string;
  redessociais : RedeSocial[];
  palestranteseventos : PalestranteEvento[];
}

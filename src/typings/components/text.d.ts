import { EHeadingSizes, ETextSizes } from "~ts/enums";

export type TTextSizes = ETextSizes;

export interface ITextSizes {
  size?: TTextSizes;
}

export type THeadingSizes =
  | EHeadingSizes.Large
  | EHeadingSizes.Medium
  | EHeadingSizes.Regular
  | EHeadingSizes.Small;

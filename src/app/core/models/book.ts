export interface Book {
  images?: Images;
  title?: string;
  author?: string[];
  summary?: string;
  alt?: string;
}

export interface Images {
  large?: string;
  medium?: string;
  small?: string;
}

declare module 'Tmodule' {
  export interface MyInt {
    (): string;
  }

  export interface NewInt {
    new (): string;
  }

  export type Size = 'large' | 'small';
}

declare module 'Module2' {
  import { NewInt, Size } from 'Tmodule';

  export const size: Size;
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      gray: string;
      primary: string;
      background: string;
      white: string;
      error: string;
      success: string;
      sale: string;
    };
  }
}

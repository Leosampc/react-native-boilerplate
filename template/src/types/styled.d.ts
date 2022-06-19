import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blackColor: string;
      grayColor: string;
      primaryColor: string;
      backgroundColor: string;
      whiteColor: string;
      errorColor: string;
      successColor: string;
      saleColor: string;
    };
  }
}

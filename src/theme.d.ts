// theme.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text_primary: string;
    text_secondary: string;
    text_third: string,
    font_primary: string;
    font_secondary: string;
    color_adm: string;
    color_text: string,
    page_construct_background: string,
    page_construct_color: string,
    page_construct_accent: string,
  }
}

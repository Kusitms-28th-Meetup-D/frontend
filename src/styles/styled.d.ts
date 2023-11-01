//styled.d.ts
//theme.ts를 설명해주는 파일?
import 'styled-components';
import { ColorsTypes } from './theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
  }
}

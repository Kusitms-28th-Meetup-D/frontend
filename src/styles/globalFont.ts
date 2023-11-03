import { createGlobalStyle } from 'styled-components';
import PRETENDARD from '/assets/fonts/PretendardVariable.woff2';
import SUIT from '/assets/fonts/PSuitVariable.woff2';

const GlobalFont = createGlobalStyle`    
  @font-face {
    font-family: "Pretendard";
    src: url(${PRETENDARD}) format('woff2'); 
  }

  @font-face {
    font-family: "Suit";
    src: url(${SUIT}) format('woff2'); 
  }
`;

export default GlobalFont;

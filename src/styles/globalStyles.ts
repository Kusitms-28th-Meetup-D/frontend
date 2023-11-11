import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family:
      "Pretendard"; 
    box-sizing: border-box;
    outline: none;
  }

  svg {
    display: inline-block;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    // font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    width: 100%;
    height: 100vh;
    font-size: 10px;
  }
  body {
    width: 100%;
    height: 100%;
    //font-family: 'Pretendard';
    /* margin-top: 8.2rem; */
  }

  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    background: inherit;
    border: none;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -moz-appearance: none;
    appearance: none;
  }

  input:focus {
    outline: none;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  i {
    font-style: normal;
  }
`;

export default GlobalStyle;

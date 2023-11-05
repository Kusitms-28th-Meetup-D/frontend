import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';
import GlobalStyle from './styles/globalStyles.ts';
import { theme } from './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import GlobalFont from './styles/globalFont.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </RecoilRoot>,
);

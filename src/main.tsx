import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';
import GlobalStyle from './styles/globalStyles.ts';
import { theme } from './theme.ts';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </RecoilRoot>,
);

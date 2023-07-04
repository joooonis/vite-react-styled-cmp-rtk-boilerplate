import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes.tsx';
import darkTheme from './styles/darkTheme';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/globalstyle';

const router = createBrowserRouter(routes);

function App() {
  const isDarkMode = false;
  const [theme, setTheme] = useState(isDarkMode ? darkTheme : defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reset />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

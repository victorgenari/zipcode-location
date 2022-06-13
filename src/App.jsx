import { RoutesApp } from './routes/index'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}

export default App;
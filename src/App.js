import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((element, index) => {
              const Page = element.component;
              return (
                <Route
                  key={index}
                  path={element.path}
                  element={
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;

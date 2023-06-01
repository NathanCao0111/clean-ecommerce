import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
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
  );
}

export default App;

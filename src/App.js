import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import AdminLayout from './admin/components/AdminLayout';

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

          {privateRoutes.map((element, index) => {
            if (element.layout === 'adminDefault') {
              return <Route key={index} path={element.path} element={<AdminLayout>{element.component}</AdminLayout>} />;
            } else {
              return <Route key={index} path={element.path} element={element.component} />;
            }
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

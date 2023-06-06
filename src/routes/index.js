import Home from '../pages/Home';
import Categories from '../pages/Categories';
import ProductPage from '../pages/ProductPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/categories', component: Categories },
  { path: '/categories/product/:productId', component: ProductPage },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
];

const privateRoutes = [
  // must login
];

export { publicRoutes, privateRoutes };

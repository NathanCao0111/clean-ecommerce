import Home from '../pages/Home';
import Categories from '../pages/Categories';
import ProductPage from '../pages/ProductPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PageNotFound from '../pages/PageNotFound';
import Dashboard from '../admin/pages/Dashboard';
import AdminLogin from '../admin/pages/AdminLogin';
import AdminSignup from '../admin/pages/AdminSignup';
import UsersTable from '../admin/pages/UsersTable';
import ProductsTable from '../admin/pages/ProductsTable';
import AdminSingle from '../admin/pages/AdminSingle';
import AdminNew from '../admin/pages/AdminNew';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/categories', component: Categories },
  { path: '/product/:productId', component: ProductPage },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '*', component: PageNotFound },
];

const privateRoutes = [
  { path: '/admin', component: <Dashboard /> },
  { path: '/admin/login', component: <AdminLogin /> },
  { path: '/admin/signup', component: <AdminSignup /> },
  { path: '/admin/products', component: <ProductsTable /> },
  { path: '/admin/product/:adminProductId', component: <AdminSingle /> },
  { path: '/admin/product/new', component: <AdminNew /> },
  { path: '/admin/users', component: <UsersTable /> },
  { path: '/admin/user/:adminUserId', component: <AdminSingle /> },
  { path: '/admin/user/new', component: <AdminNew /> },
];

export { publicRoutes, privateRoutes };

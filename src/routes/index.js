import Home from '../pages/Home';
import Categories from '../pages/Categories';
import ProductPage from '../pages/ProductPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PageNotFound from '../pages/PageNotFound';

import Dashboard from '../admin/pages/Dashboard';
import AdminLogin from '../admin/pages/AdminLogin';
import UsersTable from '../admin/pages/UsersTable';
import ProductsTable from '../admin/pages/ProductsTable';
import UserSinglePage from '../admin/pages/UserSinglePage';
import ProductSinglePage from '../admin/pages/ProductSinglePage';
import AdminNew from '../admin/pages/AdminNew';
import { userInputs, productInputs } from '../admin';

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
  { path: '/admin/products', component: <ProductsTable /> },
  {
    path: '/admin/product/:adminProductId',
    component: <ProductSinglePage inputs={productInputs} title="update product" />,
  },
  { path: '/admin/product/new', component: <AdminNew inputs={productInputs} title="Add New Product" /> },
  { path: '/admin/users', component: <UsersTable /> },
  {
    path: '/admin/user/:adminUserId',
    component: <UserSinglePage inputs={userInputs} title="update user" />,
  },
  { path: '/admin/user/new', component: <AdminNew inputs={userInputs} title="Add New User" /> },
];

export { publicRoutes, privateRoutes };

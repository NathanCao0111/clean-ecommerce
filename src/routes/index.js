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
import UserNew from '../admin/pages/UserNew';
import ProductNew from '../admin/pages/ProductNew';
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
  { path: '/admin', component: <Dashboard />, layout: 'adminDefault' },
  { path: '/admin/login', component: <AdminLogin />, layout: 'adminLogin' },
  { path: '/admin/products', component: <ProductsTable />, layout: 'adminDefault' },
  {
    path: '/admin/product/:adminProductId',
    component: <ProductSinglePage inputs={productInputs} title="update product" />,
    layout: 'adminDefault',
  },
  {
    path: '/admin/product/new',
    component: <ProductNew inputs={productInputs} title="Add New Product" />,
    layout: 'adminDefault',
  },
  { path: '/admin/users', component: <UsersTable />, layout: 'adminDefault' },
  {
    path: '/admin/user/:adminUserId',
    component: <UserSinglePage inputs={userInputs} title="update user" />,
    layout: 'adminDefault',
  },
  { path: '/admin/user/new', component: <UserNew inputs={userInputs} title="Add New User" />, layout: 'adminDefault' },
];

export { publicRoutes, privateRoutes };

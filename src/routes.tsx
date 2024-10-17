import { Icon } from '@chakra-ui/react';
import {
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdCategory,
  MdOutlineReceiptLong,
  MdOutlineLocalOffer,
  MdOutlinePeopleAlt,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import Profile from 'views/admin/profile';
import Orders from 'views/admin/orders';
import Products from 'views/admin/products';
import Categories from 'views/admin/categories';
import Users from 'views/admin/users';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Category',
    layout: '/admin',
    path: '/category',
    icon: <Icon as={MdCategory} width="20px" height="20px" color="inherit" />,
    component: <Categories />,
    secondary: true,
  },
  {
    name: 'Order',
    layout: '/admin',
    path: '/order',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <Orders />,
    secondary: true,
  },
  {
    name: 'Product',
    layout: '/admin',
    icon: <Icon as={MdOutlineReceiptLong} width="20px" height="20px" color="inherit" />,
    path: '/product',
    component: <Products />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdOutlinePeopleAlt} width="20px" height="20px" color="inherit" />,
    component: <Users />,
  },
  {
    name: 'User',
    layout: '/admin',
    path: '/user',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
];

export default routes;

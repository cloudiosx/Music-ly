import Feed from './components/Feed/Feed';
import User from './components/User';
import UsersList from './components/UsersList';
import PostDetail from './components/PostDetail/PostDetail';
import Following from './components/Following/Following';
import Profile from './components/Profile/Profile';

export const mainLayoutRoutes = [
  {
    path: '/',
    component: Feed,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/users',
    component: UsersList,
  },
  {
    path: '/users/:userId',
    component: Profile,
  },
  {
    path: '/posts/:postId',
    component: PostDetail,
  },
];

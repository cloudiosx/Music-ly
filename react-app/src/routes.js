import Feed from './components/Feed/Feed';
import User from './components/User';
import UsersList from './components/UsersList';
import PostDetail from './components/PostDetail/PostDetail';
import Following from './components/Following/Following';

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
    component: User,
  },
  {
    path: '/posts/:postId',
    component: PostDetail,
  },
];

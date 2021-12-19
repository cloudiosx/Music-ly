import Feed from "./components/Feed/Feed";
import User from "./components/User";
import UsersList from "./components/UsersList";

export const mainLayoutRoutes = [
  {
    path: '/',
    component: Feed,
  },
  {
    path: '/users',
    component: UsersList,
  },
  {
    path: '/users/:userId',
    component: User,
  }
]

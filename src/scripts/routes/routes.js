import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import LearnNow from '../views/pages/learn-now';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/learn-now': LearnNow,
};

export default routes;

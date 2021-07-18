import PublicRouter from '../components/routers/public-router';
import PrivateRouter from '../components/routers/private-router';

const useRoutes = (isLogged: boolean): JSX.Element => {
  return <>{isLogged ? <PrivateRouter /> : <PublicRouter />}</>;
};

export default useRoutes;

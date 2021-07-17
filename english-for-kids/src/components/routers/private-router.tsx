import { Redirect, Route, Switch } from 'react-router-dom';
import AdminCategoryList from '../admin-categories-list/admin-categories-list';
import AdminHeader from '../admin-header/admin-header';
import AdminWordList from '../admin-word-list/admin-word-list';

const PrivateRouter: React.FC = () => {
  return (
    <>
      <AdminHeader />
      <div className="container">
        <Switch>
          <Route exact path="/admin" component={AdminCategoryList} />
          <Route exact path="/admin/category/:name" component={AdminWordList} />
          <Redirect to="/admin" />
        </Switch>
      </div>
    </>
  );
};

export default PrivateRouter;

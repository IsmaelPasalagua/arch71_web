import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';

import CreateCategoryPage from './pages/categories/CreateCategoryPage';
import DeleteCategoryPage from './pages/categories/DeleteCategoryPage';
import UpdateCategoryPage from './pages/categories/UpdateCategoryPage';
import ReadAllCategoryPage from './pages/categories/ReadAllCategoryPage';

import CreateCustomerPage from './pages/customers/CreateCustomerPage';
import DeleteCustomerPage from './pages/customers/DeleteCustomerPage';
import UpdateCustomerPage from './pages/customers/UpdateCustomerPage';
import ReadAllCustomerPage from './pages/customers/ReadAllCustomerPage';

import CreateProductPage from './pages/products/CreateProductPage';
import DeleteProductPage from './pages/products/DeleteProductPage';
import UpdateProductPage from './pages/products/UpdateProductPage';
import ReadAllProductPage from './pages/products/ReadAllProductPage';
import ReadOneProductPage from './pages/products/ReadOneProductPage';

import CreateSalePage from './pages/sales/CreateSalePage';
import DeleteSalePage from './pages/sales/DeleteSalePage';
import UpdateSalePage from './pages/sales/UpdateSalePage';
import ReadAllSalePage from './pages/sales/ReadAllSalePage';
import ReadOneSalePage from './pages/sales/ReadOneSalePage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/categories/index' component={ReadAllCategoryPage} />
        <Route exact path='/categories/store' component={CreateCategoryPage} />
        <Route exact path='/categories/update' component={UpdateCategoryPage} />
        <Route exact path='/categories/destroy' component={DeleteCategoryPage} />

        <Route exact path='/customers/index' component={ReadAllCustomerPage} />
        <Route exact path='/customers/store' component={CreateCustomerPage} />
        <Route exact path='/customers/update' component={UpdateCustomerPage} />
        <Route exact path='/customers/destroy' component={DeleteCustomerPage} />

        <Route exact path='/products/index' component={ReadAllProductPage} />
        <Route exact path='/products/store' component={CreateProductPage} />
        <Route exact path='/products/update' component={UpdateProductPage} />
        <Route exact path='/products/destroy' component={DeleteProductPage} />
        <Route exact path='/products/show' component={ReadOneProductPage} />

        <Route exact path='/sales/index' component={ReadAllSalePage} />
        <Route exact path='/sales/store' component={CreateSalePage} />
        <Route exact path='/sales/update' component={UpdateSalePage} />
        <Route exact path='/sales/destroy' component={DeleteSalePage} />
        <Route exact path='/sales/show' component={ReadOneSalePage} />

        <Route exact path="/" component={HomePage} />
        
        <Route path="*" component={NoPage} />
      </Switch>
    </BrowserRouter>
  );
}

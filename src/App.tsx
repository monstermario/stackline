import styles from './App.module.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Header } from './components/header';
import { ProductItemPage } from './pages/productItem';
import { ProductListPage } from './pages/productList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProducts } from './app/reducers/appState';
import { getProducts } from './utils/apis';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const products = await getProducts();
      dispatch(updateProducts({ products }));
    })();
  }, []);
  return (
    <Router>
      <div className={styles.page}>
        <Header />
        <div className={styles.container}>
          <Switch>
            <Route
              path="/product/:productId"
              exact
              component={ProductItemPage}
            />
            <Route path="/" exact component={ProductListPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

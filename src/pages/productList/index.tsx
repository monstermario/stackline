import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../app/reducers/appState';
import styles from './ProductList.module.scss';

export const ProductListPage: React.FC = () => {
  const products = useSelector((state: AppState) => state.appState.products);
  return (
    <div className={styles.productList}>
      <h1>Products :</h1>
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          className={styles.item}
          key={`product-${product.id}`}
        >
          {product.id}
        </Link>
      ))}
    </div>
  );
};

import { ProductInfo } from '../../components/productInfo';
import styles from './ProductItem.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppState } from '../../app/reducers/appState';
import { createSelector } from 'reselect';
import { ProductGraph } from '../../components/productGraph';
import { ProductTable } from '../../components/productTable';

export const ProductItemPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const selectProductById = createSelector(
    (state: AppState) => state.appState.products,
    (products) => products.find((product) => product.id === productId)
  );
  const product = useSelector(selectProductById);
  return (
    <div className={styles.productItem}>
      {product ? (
        <>
          <ProductInfo product={product} />
          <div className={styles.productDetail}>
            <ProductGraph sales={product.sales} />
            <ProductTable sales={product.sales} />
          </div>
        </>
      ) : (
        <p className={styles.noProduct}>There is no such product.</p>
      )}
    </div>
  );
};

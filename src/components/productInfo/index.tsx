import { StateInterface } from '../../app/reducers/appState';
import styles from './ProductInfo.module.scss';

type PageProps = {
  product: StateInterface['products'][0];
};

export const ProductInfo = ({ product }: PageProps): JSX.Element => {
  return (
    <div className={styles.productInfo}>
      <div className={styles.basicInfo}>
        <img src={product.image} alt="" />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.subTitle}>{product.subtitle}</p>
      </div>
      <div className={styles.tags}>
        {product.tags.map((tag: string) => (
          <span className={styles.tag} key={`tag-${tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

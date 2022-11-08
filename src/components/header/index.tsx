import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="/img/stackline_logo.svg" alt="" />
      </Link>
    </div>
  );
};

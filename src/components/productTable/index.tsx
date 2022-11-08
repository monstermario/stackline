/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { StateInterface } from '../../app/reducers/appState';
import { getRegNumber } from '../../utils/functions';
import styles from './ProductTable.module.scss';

type PageProps = {
  sales: StateInterface['products'][0]['sales'];
};

const Menus = [
  {
    name: 'weekEnding',
    title: 'WEEK ENDING',
  },
  {
    name: 'retailSales',
    title: 'RETAIL SALES',
  },
  {
    name: 'wholesaleSales',
    title: 'WHOLESALE SALES',
  },
  {
    name: 'unitsSold',
    title: 'UNITS SOLD',
  },
  {
    name: 'retailerMargin',
    title: 'RETAILER MARGIN',
  },
];

export const ProductTable = ({ sales }: PageProps): JSX.Element => {
  const [sort, setSort] = useState<{ name: string; order: 'asc' | 'desc' }>({
    name: 'weekEnding',
    order: 'asc',
  });

  const updateSort = (sortName: string) => {
    if (sortName === sort.name && sort.order === 'asc')
      setSort({ name: sortName, order: 'desc' });
    else setSort({ name: sortName, order: 'asc' });
  };

  return (
    <div className={styles.productTable}>
      <table>
        <thead>
          {Menus.map((menu) => (
            <th
              key={menu.name}
              className={
                menu.name === sort.name
                  ? sort.order === 'asc'
                    ? styles.active
                    : styles.activeDesc
                  : ''
              }
              onClick={() => {
                updateSort(menu.name);
              }}
            >
              {menu.title}
            </th>
          ))}
        </thead>
        <tbody>
          {sales
            .slice()
            .sort((a: any, b: any) => {
              return (
                (sort.name === 'weekEnding'
                  ? new Date(a[sort.name]).valueOf() -
                    new Date(b[sort.name]).valueOf()
                  : a[sort.name] - b[sort.name]) *
                (sort.order === 'asc' ? 1 : -1)
              );
            })
            .map((sale) => (
              <tr key={sale.weekEnding}>
                <td>{sale.weekEnding}</td>
                <td>${getRegNumber(sale.retailSales)}</td>
                <td>${getRegNumber(sale.wholesaleSales)}</td>
                <td>{getRegNumber(sale.unitsSold)}</td>
                <td>${getRegNumber(sale.retailerMargin)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

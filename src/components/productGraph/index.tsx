import { StateInterface } from '../../app/reducers/appState';
import styles from './ProductGraph.module.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type PageProps = {
  sales: StateInterface['products'][0]['sales'];
};

const MONTH = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

export const ProductGraph = ({ sales }: PageProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomizedTick = (props: any) => {
    const { x, y, payload } = props;
    const [, month] = payload.value.split('-').map((x: string) => Number(x));

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fill="#999">
          <tspan textAnchor="middle" x="0" className={styles.label}>
            {MONTH[month - 1]}
          </tspan>
        </text>
      </g>
    );
  };

  return (
    <div className={styles.productGraph}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={sales}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 25,
          }}
        >
          <XAxis
            dataKey="weekEnding"
            tick={<CustomizedTick />}
            axisLine={{ stroke: '#0000002f' }}
            tickLine={false}
          />
          <YAxis domain={[-1000000, 2000000]} hide />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            content={<p>Retail Sales</p>}
          />
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#42a6f6"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="#98a4bd"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

import style from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={style.item}>
            <td className={style.history}>{type}</td>
            <td className={style.history}>{amount}</td>
            <td className={style.history}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

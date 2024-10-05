import css from "./TransactionHistory.module.css";
// import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
	return (
		<table className={css.transactionHistory}>
			<thead>
				<tr>
					<th className={css.tableHead}>Type</th>
					<th className={css.tableHead}>Amount</th>
					<th className={css.tableHead}>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map((element) => (
					<tr key={element.id} className={css.tableData}>
						<td className={css.tableDataCell}>{element.type}</td>
						<td className={css.tableDataCell}>{element.amount}</td>
						<td className={css.tableDataCell}>{element.currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

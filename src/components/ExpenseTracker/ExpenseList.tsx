import { useState } from "react";
import ExpenseDropdown from "./ExpenseDropdown";

interface Item {
	id: number;
	name: string;
	price: number;
	category: string;
}

interface ExpenseListProps {
	items: Item[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({ items, onDelete }: ExpenseListProps) => {
	if (items.length === 0) return null;

	return (
		<>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Description</th>
						<th scope="col">Amount</th>
						<th scope="col">Category</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>{item.category}</td>
							<td>
								<button
									className="btn btn-outline-danger"
									onClick={() => onDelete(item.id)}
								>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td>
							$
							{items
								.reduce((acc, items) => items.price + acc, 0)
								.toFixed(2)}
						</td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</>
	);
};

export default ExpenseList;

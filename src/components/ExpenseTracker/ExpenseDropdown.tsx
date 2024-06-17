import React from "react";
import categories from "./categories";

interface ExpenseDropdownProps {
	onSelectCategory: (category: string) => void;
}

const ExpenseDropdown = ({ onSelectCategory }: ExpenseDropdownProps) => {
	return (
		<select
			className="form-select"
			onChange={(e) => onSelectCategory(e.target.value)}
		>
			<option value="">All categories</option>
			{categories.map((category) => (
				<option key={category}>{category}</option>
			))}
		</select>
	);
};

export default ExpenseDropdown;

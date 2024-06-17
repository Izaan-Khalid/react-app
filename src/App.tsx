import { useState } from "react";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import ExpenseDropdown from "./components/ExpenseTracker/ExpenseDropdown";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";
import categories from "./components/ExpenseTracker/categories";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [items, setItems] = useState([
		{ id: 1, name: "aaa", price: 10, category: "Utilities" },
		{ id: 2, name: "aaa", price: 10, category: "Entertainment" },
		{ id: 3, name: "aaa", price: 10, category: "Utilities" },
		{ id: 4, name: "aaa", price: 10, category: "Utilities" },
	]);

	const visibleItems = selectedCategory
		? items.filter((e) => e.category === selectedCategory)
		: items;

	return (
		<div>
			<div className="mb-5">
				<ExpenseForm
					onSubmit={(item) =>
						setItems([...items, { ...item, id: items.length + 1 }])
					}
				/>
			</div>
			<div className="mb-3">
				<ExpenseDropdown
					onSelectCategory={(category) =>
						setSelectedCategory(category)
					}
				/>
			</div>

			<ExpenseList
				items={visibleItems}
				onDelete={(id) => setItems(items.filter((e) => e.id !== id))}
			/>
		</div>
	);
}

export default App;

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";

const schema = z.object({
	name: z
		.string()
		.min(3, { message: "Name should be atleast 3 characters" })
		.max(50),
	price: z
		.number({ invalid_type_error: "Amount is required." })
		.min(0.01)
		.max(100_000),
	category: z.enum(categories, {
		errorMap: () => ({ message: "Category is required." }),
	}),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
	onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	return (
		<form
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
		>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					{...register("name")}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name && (
					<p className="text-danger">{errors.name.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="price" className="form-label">
					Price
				</label>
				<input
					{...register("price", { valueAsNumber: true })}
					id="price"
					type="number"
					className="form-control"
				/>
				{errors.price && (
					<p className="text-danger">{errors.price.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="category" className="form-label">
					Category
				</label>
				<select
					{...register("category")}
					id="category"
					className="form-select"
				>
					<option value=""></option>
					{categories.map((category) => (
						<option key={category}>{category}</option>
					))}
				</select>
				{errors.category && (
					<p className="text-danger">{errors.category.message}</p>
				)}
			</div>
			<button className="btn btn-primary">Submit</button>
		</form>
	);
};

export default ExpenseForm;

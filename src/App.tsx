import { useEffect, useState } from "react";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
	const { users, err, isLoading, setUsers, setErr } = useUsers();

	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));

		userService.delete(user.id).catch((err) => {
			setErr(err.message);
			setUsers(originalUsers);
		});
	};

	const addUser = () => {
		const originalUsers = [...users];
		const newUser = { id: 0, name: "Mosh" };
		setUsers([newUser, ...users]);

		userService
			.create(newUser)
			.then(({ data: savedUser }) => setUsers([savedUser, ...users]))
			.catch((err) => {
				setErr(err.message);
				setUsers(originalUsers);
			});
	};

	const updateUser = (user: User) => {
		const originalUsers = [...users];

		const updatedUser = { ...user, name: user.name + "!" };
		setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

		userService.update(updatedUser).catch((err) => {
			setErr(err.message);
			setUsers(originalUsers);
		});
	};

	return (
		<>
			{err && <p className="text-danger">{err}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<button className="btn btn-primary mb-3" onClick={addUser}>
				Add
			</button>
			<ul className="list-group">
				{users.map((user) => (
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between"
					>
						{user.name}
						<div>
							<button
								className="btn btn-outline-secondary mx-1"
								onClick={() => updateUser(user)}
							>
								Update
							</button>
							<button
								className="btn btn-outline-danger"
								onClick={() => deleteUser(user)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;

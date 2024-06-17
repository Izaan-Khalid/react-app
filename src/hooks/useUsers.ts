import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [err, setErr] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const { request, cancel } = userService.getAll<User>();
		request
			.then((res) => {
				setIsLoading(false);
				setUsers(res.data);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setErr(err.message);
				setIsLoading(false);
			});

		return () => cancel();
	}, []);

    return { users, err, isLoading, setUsers, setErr };

}

export default useUsers;
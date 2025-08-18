import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function Index() {
	const [todoList, setTodoList] = useState([]);
	const [filter, setFilter] = useState("incomplete");

	useEffect(() => {
		let localStorageTodoList = localStorage.getItem("todoList");
		const todoListJson = JSON.stringify(todoList);
		if (localStorageTodoList !== todoListJson) {
			localStorage.setItem("todoList", todoListJson);
		}
	}, [todoList]);
	return (
		<Layout filter={filter} setFilter={setFilter}>
			<Main todoList={todoList} setTodoList={setTodoList} />
		</Layout>
	);
}

export default Index;

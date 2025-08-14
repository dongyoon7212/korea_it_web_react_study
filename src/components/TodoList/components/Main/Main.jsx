/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";

function Main({ todoList, setTodoList }) {
	const [inputValue, setInputValue] = useState("");

	const inputOnChangeHandler = (e) => {
		setInputValue(e.target.value);
	};

	const onKeyDownHandler = (e) => {
		if (e.keyCode !== 13) {
			return;
		}
		if (inputValue.trim().length === 0) {
			return;
		}

		setTodoList((prev) => {
			const lastId = prev.length === 0 ? 0 : prev[prev.length - 1].id;
			const newTodo = {
				id: lastId + 1,
				isComplete: false,
				content: inputValue,
			};

			return [...prev, newTodo];
		});
	};
	return (
		<div css={s.container}>
			<div css={s.listContainer}>
				<ul>
					<li>아무런 투두</li>
					<li>아무런 투두</li>
				</ul>
			</div>
			<div css={s.todoInputContainer}>
				<input
					type="text"
					placeholder="할 일을 입력하세요"
					onChange={inputOnChangeHandler}
					onKeyDown={onKeyDownHandler}
				/>
			</div>
		</div>
	);
}

export default Main;

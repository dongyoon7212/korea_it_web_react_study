/** @jsxImportSource @emotion/react */
import { IoSearch } from "react-icons/io5";
import * as s from "./styles";

function Header({ filter, setFilter }) {
	const filterOnChangeHandler = (e) => {
		setFilter(e.target.id);
	};
	return (
		<>
			<div css={s.container}>
				<input type="text" css={s.searchInput} />
				<button css={s.searchButton}>
					<IoSearch />
				</button>
			</div>
			<div css={s.filterContainer}>
				<input
					type="radio"
					id="all"
					name="filter"
					checked={filter === "all"}
					onChange={filterOnChangeHandler}
				/>
				<label htmlFor="all">전체</label>
				<input
					type="radio"
					id="complete"
					name="filter"
					checked={filter === "complete"}
					onChange={filterOnChangeHandler}
				/>
				<label htmlFor="complete">완료</label>
				<input
					type="radio"
					id="incomplete"
					name="filter"
					checked={filter === "incomplete"}
					onChange={filterOnChangeHandler}
				/>
				<label htmlFor="incomplete">미완료</label>
			</div>
		</>
	);
}

export default Header;

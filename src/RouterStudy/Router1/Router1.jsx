/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function Router1() {
	const [count, setCount] = useState(0);
	/**
	 * React Router Dom
	 * 리액트 => Single Page Application (SPA)
	 * 페이지 이동(라우팅)을 구현할 수 있게 해주는 라이브러리
	 * 페이지의 주소나 링크를 클릭했을때 페이지 전체를 새로고침하지 않고 주소에 맞는 특정 컴포넌트만
	 * 보여주어 마치 여러 페이지가 있는 것처럼 동작하는 것
	 */

	const layout = css`
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	`;

	const header = css`
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-around;
		background-color: darksalmon;
	`;

	const countBox = css`
		display: flex;
	`;

	const main = (color) => css`
		width: 100%;
		height: 800px;
		background-color: ${color};
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40px;
	`;

	const footer = css`
		width: 100%;
		height: 100px;
		background-color: green;
	`;
	return (
		<div css={layout}>
			<header css={header}>
				{/* a태그 클릭 시 브라우저가 페이지 전체를 새로고침 */}
				{/* SPA의 장점의 의미가 없어지고 상태도 초기화 됨 */}
				<a href={"/color/red"}>RED</a>
				<a href={"/color/blue"}>BLUE</a>
				<a href={"/color/orange"}>ORANGE</a>
				<div css={countBox}>
					<h1>{count}</h1>
					<button onClick={() => setCount((prev) => prev + 1)}>
						+1
					</button>
				</div>
			</header>
			<Routes>
				<Route
					path="/"
					element={<main css={main("white")}>메인 홈화면</main>}
				/>
				<Route
					path="/color/red"
					element={<main css={main("red")}>RED 화면</main>}
				/>
				<Route
					path="/color/blue"
					element={<main css={main("blue")}>BLUE 화면</main>}
				/>
				<Route
					path="/color/orange"
					element={<main css={main("orange")}>ORANGE 화면</main>}
				/>
			</Routes>
			<footer css={footer}>푸터 영역</footer>
		</div>
	);
}

export default Router1;

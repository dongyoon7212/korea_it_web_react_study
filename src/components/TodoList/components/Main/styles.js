import { css } from "@emotion/react";

export const container = css`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

export const listContainer = css`
	flex-grow: 1;
	border: 1px solid #dbdbdb;
	border-radius: 8px;

	& > ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		height: 424px;
		overflow-y: auto;

		& > li {
			box-sizing: border-box;
			padding: 5px 15px;
			border-bottom: 1px solid #dbdbdb;
		}
	}
`;

export const todoInputContainer = css`
	margin-top: 10px;
	border: 1px solid #dbdbdb;
	border-radius: 8px;
	box-sizing: border-box;
	overflow: hidden;
	height: 40px;

	& > input {
		border: none;
		outline: none;
		box-sizing: border-box;
		padding: 5px 15px;
		width: 100%;
		height: 100%;
	}
`;

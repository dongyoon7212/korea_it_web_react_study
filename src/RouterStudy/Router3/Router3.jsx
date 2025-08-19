import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

function Router3() {
	const location = useLocation();
	useEffect(() => {
		console.log("경로 이동함!!");
		console.log(location.pathname);
	}, [location.pathname]);
	return (
		<div>
			<Link to={"/location/1"}>location1</Link>
			<Link to={"/location/2"}>location2</Link>
			<Link to={"/location/3"}>location3</Link>
			<Routes>
				<Route path="/location/1" element={<h1>location1</h1>} />
				<Route path="/location/2" element={<h1>location2</h1>} />
				<Route path="/location/3" element={<h1>location3</h1>} />
			</Routes>
		</div>
	);
}

export default Router3;

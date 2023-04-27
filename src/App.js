import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import PeopleList from "./components/list/PeopleList";
import PeopleInfo from "./pages/PeopleInfo";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path = "/" element = {<Layout/>}>
					<Route index element = {< Main/>}/>
					<Route path = "people">
						<Route index element = {<PeopleList/>}/>
						<Route path = ":peopleCd" element = {<PeopleInfo/>}/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

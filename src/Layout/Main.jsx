import { Outlet } from "react-router-dom";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
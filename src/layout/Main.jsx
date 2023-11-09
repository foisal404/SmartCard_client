
import { Outlet } from "react-router-dom";
import NavHead from "../component/NavHead";


const Main = () => {
    return (
        <div className="relative">
            <NavHead/>
            <Outlet/>
        </div>
    );
};

export default Main;
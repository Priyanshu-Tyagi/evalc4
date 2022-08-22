import {Route,Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}

export default AllRoutes;
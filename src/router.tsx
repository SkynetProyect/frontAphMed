import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Register from "./pages/register/Register";
import LoginDoctor from "./pages/login_doctor/LoginDoctor";
import LoginUser from "./pages/login_user/LoginUser";
import Customers from "./pages/doctor/Customers";
import Header from "./components/header/Header";
import HeaderL from "./components/header/HeaderL";
import NavMosaico from "./pages/procedures/components/NavMosaico";
import Procedimientos from "./pages/procedures/Procedimientos";

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<><Header/><Main/></>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login_doctor' element={<LoginDoctor/>}/>
                <Route path='/login_user' element={<LoginUser/>}/>
                <Route path='/seepatient' element={<><HeaderL/><Customers/></>}/>
                <Route path='/procedimiento/:id' element={<NavMosaico />}/>
                <Route path='/procedimientos/:id' element={<Procedimientos />}/>

            </Routes>
        
        </BrowserRouter>
    );
}
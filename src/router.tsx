import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import Main from "./pages/main/Main";
import Register from "./pages/register/Register";
import LoginDoctor from "./pages/login_doctor/LoginDoctor";
import LoginUser from "./pages/login_user/LoginUser";
import Customers from "./pages/doctor/Customers";
import Header from "./components/header/Header";
import HeaderL from "./components/header/HeaderL";
import NavMosaico from "./pages/procedures/components/NavMosaico";
import Procedimientos from "./pages/procedures/Procedimientos";
import { getAuthToken } from "./guards/token";

function RequireAuth({ children }: { children: ReactNode }) {
    const token = getAuthToken();
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login_user" state={{ from: location }} replace />;
    }

    return children;
}

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<><Header/><Main/></>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login_doctor' element={<LoginDoctor/>}/>
                <Route path='/login_user' element={<LoginUser/>}/>
                <Route path='/seepatient' element={<RequireAuth><><HeaderL/><Customers/></></RequireAuth>}/>
                <Route path='/procedimiento/:id' element={<RequireAuth><NavMosaico /></RequireAuth>}/>
                <Route path='/procedimientos/:id' element={<RequireAuth><Procedimientos /></RequireAuth>}/>
                <Route path='*' element={<Navigate to='/' replace />}/>
            </Routes>
        
        </BrowserRouter>
    );
}
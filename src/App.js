import React, {  useContext } from 'react';
import './App.css';
import AuthProvider from './Auth/AuthProvider';
import AuthContext from './Auth/AuthContext';
import Home from './Views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthorizedRoutes from './Auth/AuthorizedRoutes';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Messenger from './Views/Messenger';
import WelcomePage from './Components/WelcomePage';
import SecureRoutes from './Auth/SecureRoutes';
import Weather from './Views/Weather';

function App() {
    const auth = useContext(AuthContext);
    const getUserName = () => {
        return auth.user;
    }

    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<Home />} >
                            <Route index element={ <WelcomePage />} />
                            <Route path='login' element={<Login/>}/>
                            <Route path='register' element={<Registration/>}/>
                            <Route path='in' element={
                                <AuthorizedRoutes>
                                    <SecureRoutes />
                                </AuthorizedRoutes>
                            }>
                                <Route index element={ <WelcomePage name={getUserName} /> } />
                                <Route path="messenger" element={ <Messenger /> } />
                                <Route path="weather" element={ <Weather /> } />
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

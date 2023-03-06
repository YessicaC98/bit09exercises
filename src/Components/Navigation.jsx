import React from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home} from './Home';
import { ExercisesPage } from './ExercisesPage';
export const Navigation = () => {
    return(
        <BrowserRouter>
        <nav className="py-4 text-center">
            <Link className="mx-3 text-dark h3 text-decoration-none" to='/'>Inicio</Link>
            <Link className="mx-3 text-dark h3 text-decoration-none" to='/ejercicios'>Ejercicios</Link>
        </nav>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ejercicios' element={<ExercisesPage />} />
        </Routes>
        </BrowserRouter>
    );
}
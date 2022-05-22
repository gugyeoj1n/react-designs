import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <LandingPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
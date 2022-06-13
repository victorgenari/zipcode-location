// Rotas
import { Routes, Route } from 'react-router-dom'

// Pages
import { Home } from '../pages/Home'

export function RoutesApp() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
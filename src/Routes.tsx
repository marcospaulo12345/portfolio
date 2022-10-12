import {
    BrowserRouter as Router,
    Routes,
    Route

} from 'react-router-dom';

import Home from './pages/Home/index';
import Skills from './pages/Skills/index';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/skills' element={<Skills />}/>
            </Routes>
        </Router>
    );
}
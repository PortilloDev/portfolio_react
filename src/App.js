import React, { useEffect } from 'react';
import Rutas from "./routes/Routes";
import { registerVisited } from './components/services/index';



function App() {

    // Function for register visited
    useEffect(() => {
        let status = registerVisited();
        console.log(status);
    }, []);
    return (

        <div className="app-wrapper">
            <Rutas />
        </div>

    );
}

export default App;

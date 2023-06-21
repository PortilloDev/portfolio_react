import React, { useEffect, useState } from 'react';

import Rutas from "./routes/Routes";
import Modal from "./components/modal/Modal";
import { registerVisited } from './components/services/index';
import { GiTriquetra } from 'react-icons/gi';

const DIV_BUTTON_STYLE = {
    position: 'relative',
    zIndex: 1
}
const CONTENT_STYLE = {
    background: 'red',
    padding: '20px',
    zIndex: 2
}

function App() {

    // Function for register visited
    useEffect(() => {
        let status = registerVisited();
        console.log(status);
    }, []);

    //function modal
    const [isOpen, setIsOpen] = useState(GiTriquetra)
    return (

        <div>
            <Rutas />
            <Modal open={isOpen} close={() => setIsOpen(false)} ></Modal>
        </div>

    );
}

export default App;

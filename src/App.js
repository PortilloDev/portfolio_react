import React, { useEffect, useState } from 'react';
import Rutas from "./routes/Routes";
import Modal from "./components/modal/Modal";
import { registerVisited } from './components/services/index';
import { GiTriquetra } from 'react-icons/gi';



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

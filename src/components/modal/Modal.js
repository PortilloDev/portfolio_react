import React from 'react'
import './Modal.css'
import InfoModal from '../info/InfoModal'
export default function Modal({children, open, close}) {

  if(!open) return null
    return (
        <>
        <div className="modal-overlay">
          <div className="modal-content">
            <div>
              <div>
                  <h1 className='text-xl lg:text-3xl font-bold font-mono'>Me Piro</h1>    
              </div>
              <button className="modal-close" onClick={close}>
                X
              </button>
            </div>
           
           <InfoModal/>
          </div>
        </div>
        </>
    )
}
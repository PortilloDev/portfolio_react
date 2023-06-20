import React from 'react'
import './Modal.css'
import InfoModal from '../info/InfoModal'
export default function Modal({children, open, close}) {
    if(!open) return null
    return (
        <>
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={close}>
              X
            </button>
           <InfoModal/>
          </div>
        </div>
        </>
    )
}
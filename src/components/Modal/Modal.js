import React, { Component } from "react"
import Portal from '../Portal/Portal';
import "./Modal.css";

export default class Modal extends Component {
    render() {
        const {children, toogle, active} = this.props;
        return (
            <Portal>
                {active && (
                    <div className="wrapper">
                        <div className="window">
                            <button className="closeBtn"  onClick={toogle}>X</button>
                            <div>{children}</div>
                        </div>
                    </div>
                )

                }
            </Portal>
        );
    }
}

import React from "react";
import { withStorageListener } from "./withStorageListener";
import './styles.css';

function ChangeAlert ({ show, toggleShow }) {

    if(show){
        return (
            <div className="alert-background">
                <div className="alert-container">
                    <p className="alert-title">List outdated</p>
                    <button
                        className="alert-button"
                        onClick={()=> toggleShow(false)}
                    >
                        Refresh
                    </button>
                </div>
            </div>
        );
    }else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
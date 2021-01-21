import React from 'react';
import './Input.scss';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { useState } from 'react';

export const Input = () => {
    const [isValid, setisValid] = useState(true)
    return (
        <form className="form">
            <div className="form-input">
                <div className= "form-input-container">
                    <input className="form-input-1 style" type="text" placeholder="Tapez X"/>
                    {isValid ?
                        <div className="valid"><DoneIcon style={{fontSize: 40, color: 'green'}}/></div>
                        : <div className="notvalid"><CloseIcon style={{fontSize: 40, color: 'red'}}/></div>  
                    }   
                </div>
                <div className="form-input-container">
                    <input className="form-input-2 style" type="text" placeholder="Tapez Y"/>
                    {isValid ?
                        <div className="valid"><DoneIcon style={{fontSize: 40, color: 'green'}}/></div>
                        : <div className="notvalid"><CloseIcon style={{fontSize: 40, color: 'red'}}/></div>  
                    }
                </div>
                </div>
            <button type="submit" className="btn-visualisation">Visualiser</button>
        </form>
    )

}
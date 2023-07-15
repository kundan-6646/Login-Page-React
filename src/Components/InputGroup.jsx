import eye from '../images/eye.svg';
import closeEye from '../images/close-eye.svg';
import { useState } from 'react';

function InputGroup(props) {
    let [passwordHidden, setPasswordHidden] = useState(false);

    const handleImageClick = (event) => {
        const inputElement = event.target.parentNode.querySelector('input');
        if(passwordHidden) {
            inputElement.setAttribute('type', 'password');
        }else {
            inputElement.setAttribute('type', 'text');
        }
    };

    return (
        <div className="input-group">
            <input type={props.type} id={props.name} name={props.name} onInput={(e) => {
                if(e.currentTarget.value) {
                    e.currentTarget.classList.add('filled');
                }else {
                    e.currentTarget.classList.remove('filled');
                }
            }} />
			<label htmlFor={props.name}>{props.label}</label>

            {props.type == 'password' ? 
                !passwordHidden ? 
                (
                    <img src={eye} alt="eye" onClick={(e) => {
                        setPasswordHidden(true);
                        handleImageClick(e);
                    }} />
                )
                :(
                    <img src={closeEye} alt="close eye" onClick={(e) => {
                        setPasswordHidden(false);
                        handleImageClick(e);
                    }}/>
                )
            :null    
            }

        </div>
    )
}

export default InputGroup;
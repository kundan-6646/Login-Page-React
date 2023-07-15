import { useState } from "react";
import InputGroup from "./InputGroup";


function Form() {
    let [alertMessage, setAlertMessage] = useState('');
    let [alertClass, setAlertClass] = useState('success');

    return (
        <form method="submit" className="form" onSubmit={(e => {
            e.preventDefault();
            const formData = new FormData(e.target);

            // Access form data values
            const fullName = formData.get('fullName').trim();
            const email = formData.get('email').trim();
            const password = formData.get('password').trim();
            const confirmPassword = formData.get('confirmPassword').trim();

            if(!fullName) {
                setAlertMessage('Error: Please Make sure your name is correct!')
                setAlertClass('error');
                return;
            }
            if(!email) {
                setAlertMessage('Error: Please Make sure your email is correct!')
                setAlertClass('error');
                return;
            }
            if(!password) {
                setAlertMessage('Error: Please Make sure your name is correct!')
                setAlertClass('error');
                return;
            }
            if(password !== confirmPassword) {
                setAlertMessage('Error: Please Make sure your passwords and confirm passwords match!')
                setAlertClass('error');
                return;
            }

            setAlertClass('success');
            setAlertMessage('Successfully Created!')
        })}>
            <InputGroup type={'text'} name={'fullName'} label={'Full Name'} />
            <InputGroup type={'email'} name={'email'} label={'Email'} />
            <InputGroup type={'password'} name={'password'} label={'Password'} />
            <InputGroup type={'password'} name={'confirmPassword'} label={'Confirm Password'} />
            <button className="btn"> Create Account</button>
			<p className={`bottom-text ${alertClass}`}>
                {alertMessage}
			</p>
        </form>
    )
}

export default Form;
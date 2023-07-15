import Form from "./Form";
import SocialLogins from "./SocialLogins";


function Wrapper() {
    return (
        <div className="wrapper">
            <h1 className="heading">Create Account</h1>
            <SocialLogins />
            <div className="or">- OR -</div>
            <Form />
        </div>
    )
}

export default Wrapper;
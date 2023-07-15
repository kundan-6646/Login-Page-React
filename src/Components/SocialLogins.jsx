import SocialLoginButton from "./SocialLoginButton";
import googleIcon from "../images/google.png";
import facebookIcon from "../images/facebook.png";

function SocialLogins() {
    return (
        <div className="social-login">
            <SocialLoginButton src={googleIcon} name={'google'} text={'Sign up with Google'}  />
            <SocialLoginButton src={facebookIcon} name={'facebook'} text={'Sign up with Facebook'}  />
        </div>
    )
}

export default SocialLogins;
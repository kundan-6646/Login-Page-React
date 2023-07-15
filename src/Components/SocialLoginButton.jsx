

function SocialLoginButton(props) {
    return (
        <a href="#">
			<img src={props.src} alt={props.name} />
			<span>{props.text}</span>
		</a>
    )
}

export default SocialLoginButton;
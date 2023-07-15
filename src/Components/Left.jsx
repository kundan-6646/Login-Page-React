import logo from "../images/logo.png";
import abstraction from "../images/abstraction.png";

function Left() {
    return (
      <div className="left">
        <img src={logo} alt="logo" className="logo" />
		<p className="desc">Find 3D Objects, Mockups and Illustration here.</p>
		<img src={abstraction} alt="abstraction" className="abstraction"></img>
      </div>
    );
  }
  
  export default Left;
  
// Desc: Header component for the layout
import { useNavigate, useLocation, Link } from "react-router-dom"

function Header() {

  const navigate = useNavigate()
  const location = useLocation()


  // button location and text to align with path  on the header 


  let btnText, targetRoute 

  if (location.pathname === "/signup") {
    btnText = "Login"
    targetRoute = "/"
  } else if (location.pathname === "/profile") {
    btnText = "Logout"
    targetRoute = "/"
  }
  else {
    btnText ="Sign Up"
    targetRoute = "/signup"
  } 

  const handleClick = () => {
    navigate(targetRoute)
  }

  return (
    <>
      <div className="navbar bg-[#AA4A44]">
      <div className="navbar-start">
    <a className="btn btn-ghost text-xl"><Link to="/">Firebase Auth</Link></a>
  </div>

  <div className="navbar-end">
    <a className="btn" onClick={handleClick}>{btnText}</a>
  </div>

</div>
    </>
  )
}

export default Header

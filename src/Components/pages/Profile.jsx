/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { signOut } from "firebase/auth"

function Profile() {
  const navigate = useNavigate()
  const user = auth.currentUser

  const signOutUser = async (e) => {
    e.preventDefault()
    
    await signOut(auth)
    navigate("/")
  }


  return (
    <>
     <div className="flex justify-center mt-10">
      <div className="card w-96 bg-base-100 shadow-xl">
      <h2 className="card-title">Welcome {user.email}</h2>
      
        <div className="card-body">
          
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={(e) => signOutUser(e)}>Logout</button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Profile

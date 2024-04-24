/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { signOut } from "firebase/auth"
import bag from "../../assets/bag.jpg"

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
      <div className="card-body">
      <h2 className="card-title m-1">Welcome {user.email}</h2>

      <div className="items-center text-sm font-semibold ml-10 leading-6">
        <p>Special Deals Available For You</p>
        <p>Get 50% off on your first order</p>
        <img src={bag} alt="bag" className="w-[200px] h-[200px] rounded-md" />
      </div>
         
          <div className="card-actions justify-end mt-3">
            <button className="btn bg-[#AA4A44]">Buy Now</button>
          </div>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default Profile

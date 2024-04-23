/* eslint-disable react/prop-types */


function Profile({user}) {

  return (
    <>
     <div className="flex justify-center mt-10"><div className="flex justify-center mt-10">
      <div className="card w-96 bg-base-100 shadow-xl">
      <h2 className="card-title">Welcome {user}</h2>
      
        <div className="card-body">
          
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Profile

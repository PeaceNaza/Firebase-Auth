import Header from "./Components/layout/Header"
import Login from "./Components/pages/Login"
import Profile from "./Components/pages/Profile"
import SignUp from "./Components/pages/SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
     <Header />
     <Router>
       <Routes>
         <Route index element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/profile" element={<Profile />} />
       </Routes>
     </Router>
    </>
  )
}

export default App

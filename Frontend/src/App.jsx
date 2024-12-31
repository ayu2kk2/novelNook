import Home from "./Home/home"
import { Navigate, Route,Routes } from "react-router-dom"
import Courses from "./courses/courses"
import Signup from "./Components/Signup"
import { useAuth } from "./context/AuthProvider"
import Contacts from "./Contacts/Contacts"
import { Toaster } from 'react-hot-toast';

function App() {
    const [authUser,setAuthUser] = useAuth()
    console.log(authUser)
  return (
    <>
   <div className="dark:bg-slate-100 dark:text-gray-900">
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser ? <Courses/> : <Navigate to="/signup" />}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
    </Routes>
    <Toaster/>
   </div>
    {/* After applying this we got an error, so we added, <BrowserRouter/> in main.jsx  */}
    </>
  )
}

export default App

import Home from "./Home/home"
import { Route,Routes } from "react-router-dom"
import Courses from "./courses/courses"
import Signup from "./Components/Signup"
import Contacts from "./Contacts/Contacts"

function App() {
  return (
    <>

   <div className="dark:bg-slate-100 dark:text-gray-900">
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
    </Routes>
   </div>
    {/* After applying this we got an error, so we added, <BrowserRouter/> in main.jsx  */}
    </>
  )
}

export default App

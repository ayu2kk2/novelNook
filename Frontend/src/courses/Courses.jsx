import Course from "../Components/Course"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
function Courses() {

  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <Course/>
      </div>
      <Footer/>
    </>
  )
}

export default Courses

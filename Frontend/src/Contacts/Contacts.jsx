import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"


function contact() {
  return (
    <>
     <Navbar/>
      <div className="my-12">
      <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default contact

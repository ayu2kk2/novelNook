import Cards from "./Cards"
import list from "../../public/list.json"
import { Link } from "react-router-dom"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
<div className=" pt-28 items-center justify-center text-center ">
  <h1 className=" text-2xl md:text-4xl">Let’s explore new horizons <span className="text-yellow-400">together :<span className="font-sans">)</span></span> </h1>
  <p className="mt-12">
  Dive into the world of books and novels, where stories come to life and imagination knows no bounds. From timeless classics to captivating tales, each page offers a new adventure. Unlock the power of words and let your creativity soar. Together, we’ll journey through unforgettable narratives that inspire and enlighten. Discover the magic of books and embark on a path of endless exploration.
  </p>
  <Link to="/"> 
  {/* Link comes from reat-router-dom , here it is helping to go back to the home page */}
  <button className="bg-yellow-400 text-gray-800 mt-6 px-4 py-2 rounded-md hover:bg-yellow-500 duration-200">
    Back
    </button>
  </Link>

</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-4">
  {
    list.map((data)=>(
      <Cards key={data.id} data={data}/>
    ))
  }
</div>
      </div>
    </>
  )
}

export default Course

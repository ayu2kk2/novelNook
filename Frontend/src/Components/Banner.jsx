// import Bannerimg from "../../public/Banner.png"
// import Bannerimg2 from "../../public/Banner2.png"
import Bannerimg2 from '../Banner2.png';


function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-28">
       <div className="space-y-10">
       <h1 className="text-4xl font-bold">
            Welcome to novelNook :<span className="font-sans">)</span><br /> 
            A Sophisticated Haven for <span className="text-yellow-400"> Bibliophiles</span>
        </h1>
        <p className="text-xl">
        Where timeless classics meet modern masterpieces, and every book is a journey into elegance and intellect. Step into a world where stories unfold with grace, and your literary adventures begin.
        </p>

        {/* Email input  */}
    <label className="input input-bordered flex items-center gap-2 dark:bg-slate-100 dark:border-slate-300">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
   </svg>
   <input type="text" className="grow" placeholder="Email" />
   </label>
       </div>

       <button className="btn btn-secondary mt-6 bg-yellow-400 border-none hover:bg-yellow-500 cursor-pointer ">Get started</button>

        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={Bannerimg2} className="mt-20" alt="Banner" />
        </div>
    </div>
      
    </>
  )
}

export default Banner

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState,useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../url";
export default function Freebook() {
  // Axios 
const [book,setBook] = useState([]);
useEffect(()=>{
  const getBook = async()=>{
    try {
     const res = await axios.get(`${BASE_URL}/books`)
     const filterData = res.data.filter((data)=>{
     return data.category === "Free"})
     console.log(filterData)
     setBook(filterData)
     
    } catch(error) {
    console.log("Errors:",error)
    }
  }
  getBook()
},[])
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,  //changing to 3 becacuse we want to show 3 cards per slide
        slidesToScroll: 3, // also changed 3 here
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024, // If display is bigger than 1024, then 3 cards will apppear
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,// If display is bigger than 600, then 2 cards will apppear
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   // console.log(freeBooks) (checking)
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="">
        <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
        <p className=""> 
        Dive into our library of free books and novels, crafted to spark imagination and enrich minds. From timeless classics to modern tales, there is something for everyone!
        </p>

        </div>
       
    

      <div>
      <div className="slider-container ">
      <Slider {...settings}>
        {/* we are including card here we used from daisyUI  */}
        {book.map((data)=>{
            return <Cards data={data} key={data.id}/>
            // we are using props here
        })}
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div> */}
      </Slider>
    </div>
      </div>
      </div>
    </>
  )
}

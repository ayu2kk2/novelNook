import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {
    const { register,
         handleSubmit, 
         formState:{ errors } } = useForm();
         const onSubmit = async (data) => {
          const userInfo = {
            email:data.email,
            password:data.password
          }
        await axios
        .post("http://localhost:4001/user/login",userInfo)
        .then((response)=>{ //.then will return promise
          console.log(response.data)
          if(response.data){
            toast.success('Login Successfull');
            document.getElementById("my_modal_3").close() //closing modal after logged in successfully
            setTimeout(()=>{
              window.location.reload()  //it reload page automatically
              localStorage.setItem("Users",JSON.stringify(response.data.user)) 
            },1000); // toast message is disappearing too quickly so we are using this
          }
          //JSON.stringify() is used to parse the data
          // We can check the saved data in loccalStorage in Application section of browser
        }
      ).catch((err)=>{
        if(err.response){
          console.log(err)
          toast.error("Error:" + err.response.data.message);
          //to understand this check in console (frontend when error comes like same email signup
        setTimeout(()=>{},2000)
        }
      }) 
        }  ;
  
  return (
    <>
      <div>
      <dialog id="my_modal_3" className="modal">
        {/* this is unique modal id, we will use it in navbar  */}
  <div className="modal-box dark:bg-slate-50">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link
       to="/" 
       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
       onClick={()=> document.getElementById("my_modal_3").close()}
      >✕
      </Link>
    

    <h3 className="font-bold text-lg ">Login</h3>
    {/* Email  */}
    <div className="mt-4 space-y-2 ">
        <span>Email</span>
        <br/>
        <input className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-100 dark:border-slate-300" 
        type="email" 
        placeholder="Enter your email" 
        {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    </div>
     {/* Password */}
     <div className="mt-4 space-y-2">
        <span>Password</span>
        <br/>
        <input className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-100 dark:border-slate-300" 
        type="password" 
        placeholder="Enter your password"
        {...register("password", { required: true })}
        />
        <br/>
        {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        
    </div>
    {/* Button  */}
    <div className="flex justify-around mt-5">
        <button className="bg-yellow-400 text-slate-900 rounded-md px-3 py-1 hover:bg-yellow-500"
        >Login</button>
        <p>Not registered?{" "} 
          {/* {" "} : this gives little space  */}
            <Link to="/signup" className="underline text-blue-500 cursor-pointer"
        > Signup
        </Link> 
        </p>
    </div>
    </form>
  </div>
  </dialog>
      </div>   
    </>
  )
}

export default Login

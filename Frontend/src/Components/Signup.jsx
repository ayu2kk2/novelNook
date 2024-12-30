import { Link } from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form";



function Signup() {
    const { register,
        handleSubmit, 
        formState:{ errors } } = useForm();
        const onSubmit = data => console.log(data);
 
  return (
    <>
      <div className="flex h-screen items-center justify-center  ">
        {/* We have used code from login ( pasted whole dialog here and made some changes) */}
      <div className="w-[600px] px-20"> 
        {/* this is unique modal id, we will use it in navbar  */}
  <div className="modal-box  dark:bg-white ">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
        </Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
     {/* Name */}
     <div className="mt-4 space-y-2">
        <span>Name</span>
        <br/>
        <input className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:border-slate-300" 
        type="text" 
        placeholder="Enter your fullname"
        {...register("fullname", { required: true })}
        />
          <br/>
          {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    {/* Email  */}
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br/>
        <input className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-white dark:border-slate-300" 
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
        <input className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-white dark:border-slate-300" 
        type="password" 
        placeholder="Enter your password"
        {...register("password", { required: true })}
        />
          <br/>
          {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    {/* Button  */}
    <div className="flex justify-around mt-5">
        <button className="bg-yellow-400 text-slate-900 rounded-md px-3 py-1 hover:bg-yellow-500">
            Submit
            </button>
        <p className="text-md">
            Have account?
            <button to="/" className="underline text-blue-500 cursor-pointer"
        onClick={()=>document.getElementById("my_modal_3").showModal()}
        > Login
        </button>
        <Login/>
        </p>
    </div>
    </form>
  </div>
  </div>
      </div>
    </>
  )
}

export default Signup

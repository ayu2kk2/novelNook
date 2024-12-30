import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
function Login() {
    const { register,
         handleSubmit, 
         formState:{ errors } } = useForm();
         const onSubmit = data => console.log(data);
  
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
        <button className="bg-yellow-400 text-slate-900 rounded-md px-3 py-1 hover:bg-yellow-500">Login</button>
        <p>Not registered?
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

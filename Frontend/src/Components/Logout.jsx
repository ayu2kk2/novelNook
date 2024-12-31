import toast from "react-hot-toast"
import { useAuth } from "../context/AuthProvider"
function Logout() {
    const [authUser,setAuthUser] = useAuth()

    const handleLogout = () => {
        try {
       setAuthUser({
        ...authUser,
        user:null,
       })
       localStorage.removeItem("Users")
       toast.success("Logout Successfully")
        setTimeout(()=>{
                window.location.reload()  //it reload page automatically
            },1000); // toast message is disappearing too quickly so we are using this
        } catch (err) {
    toast.error("Error:" + err)
    setTimeout(()=>{},2000)
        }
    }
  return (
    <>
      <div>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
         onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}

export default Logout;

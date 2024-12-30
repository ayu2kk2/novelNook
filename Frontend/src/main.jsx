
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<div className=" dark:bg-slate-100 dark:text-gray-900">
{/* Applying <div> for themees */}
<App />
</div>

</BrowserRouter>
// we add <BrowserRouter></BrowserRouter> here

)

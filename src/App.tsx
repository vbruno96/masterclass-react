import { Outlet, RouterProvider } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import './assets/css/default.css'

function App() {

  return (
    <div className="layout">
      <Sidebar />
      
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default App

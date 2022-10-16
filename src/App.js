import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from './Components/route'
import './App.css'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      <ToastContainer></ToastContainer>
    </div>
  );
}


export default App;

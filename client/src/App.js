import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { ROUTES } from "./Routes/root"

const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
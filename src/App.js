// import layouts
import RootLayout from "./layouts/root-layout";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import NotFound from "./pages/not-found";

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} 
from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Projects />} />
    </Route>

    <Route path="*" element={<NotFound/>}/>
    </>

  )
  )

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

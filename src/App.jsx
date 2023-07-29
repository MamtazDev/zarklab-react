import { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import { useState } from "react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Header } from "./components/Header"
import { TodoItem } from "./components/TodoItem"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Router, Routes } from "react-router"
import { ItemPage } from "./pages/ItemPage"
import { ExamplePage } from "./pages/ExamplePage"
import { Page404 } from "./pages/404Page"
import { Link } from "react-router"

{
  /*export default function App() {
return (
  <>
    <BrowserRouter>
      <div>
        <Link to={"/"}> Home Page</Link>
        <Link to={"/example"}> Example </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/example" example element={<ExamplePage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </>
)
//}
*/
}
import LecturesText from "./components/LecturesText"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <LecturesText />
  </StrictMode>
)

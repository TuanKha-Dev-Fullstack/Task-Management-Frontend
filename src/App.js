import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Tasks from "./Pages/Tasks";
import Important from "./Pages/Important";
const App = () => {
  return (
    <div className="flex h-screen bg-black gap-5">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Tasks color="red-500"/>} />
          <Route path="/myday" element={<Tasks color="red-500"/>} />
          <Route path="/important" element={<Important color="yellow-500"/>} />
          <Route path="/category/:id" element={<Tasks color="red-500"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

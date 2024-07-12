import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Tasks from "./Pages/Tasks";
const App = () => {
  return (
    <div className="flex h-screen bg-black gap-5">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/myday" element={<Tasks />} />
          <Route path="/important" element={<Tasks />} />
          <Route path="/category/:id" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Tasks from "./Pages/Tasks";
import Important from "./Pages/Important";
import Categories from "./Pages/Categories";
import useApi from "./Hooks/UseApi";
import { useState } from "react";
import Notification from "./Components/Notification";
import { toast } from "react-toastify";

const App = () => {
  const url = 'http://localhost:5000/api/v1/categories';
  const { data: categories, refetch } = useApi(url);
  const [refetchTasks, setRefetchTasks] = useState(false);
  const handleRefetchTasks = () => {
    setRefetchTasks(!refetchTasks);
  }
  const handleNotification = (newStatus, newMessage) => {
    const status = newStatus;
    const message = newMessage;
    if (status === 200) {
      toast.success(message, {
        autoClose: 2000,
        theme: "dark",
      });
    } else {
      toast.error(message, {
        autoClose: 2000,
        theme: "dark",
      });
    }
  }
  return (
    <div className="flex h-screen bg-black gap-5">
      <BrowserRouter>
        <Notification />
        <SideBar categories={categories} refetch={refetch} onChange={handleRefetchTasks} onNotify={handleNotification} />
        <Routes>
          <Route path="/" element={<Tasks refetchTasks={refetchTasks} />} />
          <Route path="/important" element={<Important />} />
          {categories?.map((category) => (
            <Route key={category.id}
              path={`/category/${category.id}`}
              element={<Categories data={category}
                onRefetch={refetch} />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

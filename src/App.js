import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Tasks from "./Pages/Tasks";
import Important from "./Pages/Important";
import Categories from "./Pages/Categories";
import useApi from "./Hooks/UseApi";
const App = () => {
  const url = 'http://localhost:5000/api/v1/categories';
  const { data: categories, refetch } = useApi(url);
  return (
    <div className="flex h-screen bg-black gap-5">
      <BrowserRouter>
        <SideBar categories={categories} refetch={refetch} />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/important" element={<Important />} />
          {categories?.map((category) => (
            <Route key={category.id}
              path={`/category/${category.id}`}
              element={<Categories data={category} />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

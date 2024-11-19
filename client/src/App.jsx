import { Outlet } from "react-router-dom";
import NavBar from "./compoents/NavBar";

function App() {
  return (
    <div className="flex flex-col gap-20 p-10">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

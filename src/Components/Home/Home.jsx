import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="bg-orange-400 text-center text-2xl">
        Use loader for collect data and easy to using example :
      </h1>

      <div className="mt-5">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

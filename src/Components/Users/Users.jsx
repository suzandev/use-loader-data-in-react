import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h3>
        Collecting data from json placeholder and using loader from react router
        dom
      </h3>

      <div className="mt-4 grid grid-cols-1 gap-4 border bg-orange-300 p-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;

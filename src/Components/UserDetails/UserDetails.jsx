import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Details about user: {name}</h2>
      <p>website: {website}</p>
      <button
        onClick={handleClick}
        className="rounded-lg bg-black px-4 py-2 text-white "
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;

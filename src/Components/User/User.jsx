import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { name, id, email, phone } = user;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="rounded-lg border-2 border-solid border-indigo-600 p-4">
      <h2 className="text-xl">user name: {name}</h2>
      <p>user email: {email}</p>
      <p>phone number: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>

      <button
        onClick={handleShowDetails}
        className="rounded-lg bg-black px-4 py-2 text-white "
      >
        See Details
      </button>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.node,
};

export default User;

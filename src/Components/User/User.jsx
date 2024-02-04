import PropTypes from "prop-types";

const User = ({ user }) => {
  const { name, id, email, phone } = user;
  return (
    <div className="rounded-lg border-2 border-solid border-indigo-600 p-4">
      <h3>user id: {id}</h3>
      <h2 className="text-xl">user name: {name}</h2>
      <p>user email: {email}</p>
      <p>phone number: {phone}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.node,
};

export default User;

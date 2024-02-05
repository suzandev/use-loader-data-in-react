import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.message);
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-3">
      <h3 className="text-4xl font-semibold">Oops, page not found</h3>
      <p className="text-2xl text-red-600">
        Error: {error.statusText || error.message}
      </p>
      <Link to="/">
        <button className="rounded-md bg-black px-4 py-2 text-white">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;

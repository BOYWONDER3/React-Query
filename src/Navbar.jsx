import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ol className="flex justify-center pt-5 pb-10 space-x-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rq-page">RQ Page</Link>
        </li>
        <li>
          <Link to="/super-page">Super Page</Link>
        </li>
      </ol>
    </>
  );
};

export default Navbar;
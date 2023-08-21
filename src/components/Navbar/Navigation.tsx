import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to="/guides/faq">Help</Link>
      <Link to="/guides/faq/addListing">Add Listing</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
    </>
  );
};

export default Navigation;

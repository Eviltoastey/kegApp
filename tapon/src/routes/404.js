import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="container">
        Page not found.. Return to <Link to="/">homepage</Link>
      </div>
    </>
  );
};

export default NotFoundPage;

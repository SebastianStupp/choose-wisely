import React from "react";
import { Link } from "react-router-dom";

function Vote() {
  return (
    <button>
      <Link to="/Result">Button</Link>
    </button>
  );
}

export default Vote;

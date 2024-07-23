import React from "react";
import { Link } from "react-router-dom";

const Sandbox: React.FC = () => {
  return (
    <div>
      <h1>Sandbox Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sandbox/page1">Sandbox Page 1</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sandbox;

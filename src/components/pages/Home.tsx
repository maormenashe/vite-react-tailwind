import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl">Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sandbox">Sandbox</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

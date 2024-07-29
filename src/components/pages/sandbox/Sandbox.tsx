import React from "react";
import { Link } from "react-router-dom";

const Sandbox: React.FC = () => {
  return (
    <div>
      <h1>Sandbox Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sandbox/utility-first">Utility First</Link>
            <Link to="/sandbox/colors">Colors</Link>
            <Link to="/sandbox/container-spacing">Container Spacing</Link>
            <Link to="/sandbox/typography">Typography</Link>
            <Link to="/sandbox/sizing">Sizing</Link>
            <Link to="/sandbox/layout-position">Layout & Position</Link>
            <Link to="/sandbox/backgrounds-shadows">Backgrounds & Shadows</Link>
            <Link to="/sandbox/borders-border-radius">
              Borders & Border Radius
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sandbox;

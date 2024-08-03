import React from "react";
import SandBoxLink from "./SandBoxLink";

const Sandbox: React.FC = () => {
  return (
    <div className="container bg-gray-50 h-full p-6 max-w-lg">
      <h1 className="text-3xl text-blue-800">Tailwind CSS Sandbox</h1>
      <nav>
        <ul className="mt-6">
          <SandBoxLink to="/sandbox/utility-first" text="Utility First" />

          <SandBoxLink to="/sandbox/colors" text="Colors" />
          <SandBoxLink
            to="/sandbox/container-spacing"
            text="Container Spacing"
          />
          <SandBoxLink to="/sandbox/typography" text="Typography" />
          <SandBoxLink to="/sandbox/sizing" text="Sizing" />
          <SandBoxLink to="Layout & Position" text="Layout & Position" />
          <SandBoxLink
            to="/sandbox/backgrounds-shadows"
            text="Backgrounds & Shadows"
          />
          <SandBoxLink
            to="/sandbox/borders-border-radius"
            text="Borders & Border Radius"
          />
          <SandBoxLink to="/sandbox/filters" text="Filters" />
          <SandBoxLink to="/sandbox/interactivity" text="Interactivity" />
          <SandBoxLink
            to="/sandbox/breakpoint-media-queries"
            text="Breakpoint & MediaQueries"
          />
          <SandBoxLink to="/sandbox/columns" text="Column Layouts" />
          <SandBoxLink to="/sandbox/flex" text="Flex Box" />
          <SandBoxLink to="/sandbox/grid" text="Grid" />
          <SandBoxLink
            to="transition-transform"
            text="Transition & Transform"
          />
          <SandBoxLink
            to="/sandbox/animation-keyframes"
            text="Animation & Keyframes"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Sandbox;

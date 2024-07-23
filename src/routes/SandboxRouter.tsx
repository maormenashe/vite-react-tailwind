import React from "react";
import { Routes, Route } from "react-router-dom";
import Sandbox from "../components/pages/sandbox/Sandbox";
import SandboxPage1 from "../components/pages/sandbox/sub-pages/SandboxPage1";

const SandboxRouter: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Sandbox />} />
      <Route path="page1" element={<SandboxPage1 />} />
    </Routes>
  );
};

export default SandboxRouter;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";
import SandboxRouter from "./SandboxRouter";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sandbox/*" element={<SandboxRouter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

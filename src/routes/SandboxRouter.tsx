import React from "react";
import { Routes, Route } from "react-router-dom";
import Sandbox from "../components/pages/sandbox/Sandbox";
import UtilityFirst from "../components/pages/sandbox/sub-pages/UtilityFirst";
import Colors from "../components/pages/sandbox/sub-pages/Colors";
import ContainerSpacing from "../components/pages/sandbox/sub-pages/ContainerSpacing";
import Typography from "../components/pages/sandbox/sub-pages/Typography";
import Sizing from "../components/pages/sandbox/sub-pages/Sizing";
import LayoutPosition from "../components/pages/sandbox/sub-pages/LayoutPosition";

const SandboxRouter: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Sandbox />} />
      <Route path="utility-first" element={<UtilityFirst />} />
      <Route path="colors" element={<Colors />} />
      <Route path="container-spacing" element={<ContainerSpacing />} />
      <Route path="typography" element={<Typography />} />
      <Route path="sizing" element={<Sizing />} />
      <Route path="layout-position" element={<LayoutPosition />} />
    </Routes>
  );
};

export default SandboxRouter;

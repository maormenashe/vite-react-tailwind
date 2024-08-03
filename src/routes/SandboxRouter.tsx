import React from "react";
import { Routes, Route } from "react-router-dom";
import Sandbox from "../components/pages/sandbox/Sandbox";
import UtilityFirst from "../components/pages/sandbox/sub-pages/UtilityFirst";
import Colors from "../components/pages/sandbox/sub-pages/Colors";
import ContainerSpacing from "../components/pages/sandbox/sub-pages/ContainerSpacing";
import Typography from "../components/pages/sandbox/sub-pages/Typography";
import Sizing from "../components/pages/sandbox/sub-pages/Sizing";
import LayoutPosition from "../components/pages/sandbox/sub-pages/LayoutPosition";
import BackgroundShadows from "../components/pages/sandbox/sub-pages/BackgroundsShadows";
import BordersBorderRadius from "../components/pages/sandbox/sub-pages/BordersBorderRadius";
import Filters from "../components/pages/sandbox/sub-pages/Filters";
import Interactivity from "../components/pages/sandbox/sub-pages/Interactivity";
import BreakpointMediaQueries from "../components/pages/sandbox/sub-pages/BreakpointMediaQueries";
import Columns from "../components/pages/sandbox/sub-pages/Columns";
import FlexBox from "../components/pages/sandbox/sub-pages/FlexBox";

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
      <Route path="backgrounds-shadows" element={<BackgroundShadows />} />
      <Route path="borders-border-radius" element={<BordersBorderRadius />} />
      <Route path="filters" element={<Filters />} />
      <Route path="interactivity" element={<Interactivity />} />
      <Route
        path="breakpoint-media-queries"
        element={<BreakpointMediaQueries />}
      />
      <Route path="columns" element={<Columns />} />
      <Route path="flex" element={<FlexBox />} />
    </Routes>
  );
};

export default SandboxRouter;

// <!-- Cursor
//   cursor-auto	          cursor: auto;
//   cursor-default	      cursor: default;
//   cursor-pointer	      cursor: pointer;
//   cursor-wait	          cursor: wait;
//   cursor-text	          cursor: text;
//   cursor-move	          cursor: move;
//   cursor-help	          cursor: help;
//   cursor-not-allowed	  cursor: not-allowed;
//   cursor-none	          cursor: none;
//   cursor-context-menu	  cursor: context-menu;
//   cursor-progress	      cursor: progress;
//   cursor-cell	          cursor: cell;
//   cursor-crosshair	    cursor: crosshair;
//   cursor-vertical-text	cursor: vertical-text;
//   cursor-alias	        cursor: alias;
//   cursor-copy	          cursor: copy;
//   cursor-no-drop	      cursor: no-drop;
//   cursor-grab	          cursor: grab;
//   cursor-grabbing	      cursor: grabbing;
//   cursor-all-scroll	    cursor: all-scroll;
//   cursor-col-resize	    cursor: col-resize;
//   cursor-row-resize	    cursor: row-resize;
//   cursor-n-resize	      cursor: n-resize;
//   cursor-e-resize	      cursor: e-resize;
//   cursor-s-resize	      cursor: s-resize;
//   cursor-w-resize	      cursor: w-resize;
//   cursor-ne-resize	    cursor: ne-resize;
//   cursor-nw-resize	    cursor: nw-resize;
//   cursor-se-resize	    cursor: se-resize;
//   cursor-sw-resize	    cursor: sw-resize;
//   cursor-ew-resize	    cursor: ew-resize;
//   cursor-ns-resize	    cursor: ns-resize;
//   cursor-nesw-resize	  cursor: nesw-resize;
//   cursor-nwse-resize	  cursor: nwse-resize;
//   cursor-zoom-in	      cursor: zoom-in;
//   cursor-zoom-out	      cursor: zoom-out;
// -->

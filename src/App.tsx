import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "./components/ui/button";
import { ReactFlow, Controls, Background, MiniMap } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import GeometryRenderer from "./components/three/GeometryRenderer";
import { ModeToggle } from "./components/mode-toggle";

import { useShallow } from "zustand/react/shallow";

import "@xyflow/react/dist/style.css";

import useStore from "@/store/store";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector),
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <MiniMap />
      <Background />
      <Controls />
    </ReactFlow>
  );
}

const App = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <Flow />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <Button onClick={() => {}}>Add Box</Button>

        <Button onClick={() => {}}>Add Text Input</Button>
        <ModeToggle />
        <GeometryRenderer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default App;

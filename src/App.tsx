import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "./components/ui/button";
import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  ReactFlowProvider,
  addEdge,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import GeometryRenderer from "./components/three/GeometryRenderer";
import useStore from "@/store/store";
import { ModeToggle } from "./components/mode-toggle";

function Flow() {
  const nodes = useStore((state) => state.nodes);
  const setNodes = useStore((state) => state.setNodes);

  const onNodesChange = (changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  return (
    <div className="h-full w-full">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          // edges={edges}
          // onNodesChange={onNodesChange}
          // onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
          colorMode="light"
          fitView
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

const App = () => {
  const addNode = useStore((state) => state.addNode);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <Flow />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <Button
          onClick={() => {
            addNode({
              id: `${Date.now()}`, // Unique ID
              type: "boxGeometryNode",
              position: { x: 150, y: 150 }, // Position in React Flow
              data: { width: 2, height: 2 }, // Box geometry data
            });
          }}
        >
          Add Box
        </Button>
        <ModeToggle />
        <GeometryRenderer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default App;

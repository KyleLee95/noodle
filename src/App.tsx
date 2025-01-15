import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback } from "react";
import { type MyNode } from "@/components/flow/initial-elements";
import TextNode from "@/components/flow/TextNode";
import ResultNode from "@/components/flow/ResultNode";
import UppercaseNode from "@/components/flow/UppercaseNode";

const nodeTypes = {
  text: TextNode,
  result: ResultNode,
  uppercase: UppercaseNode,
};

const initNodes: MyNode[] = [
  {
    id: "1",
    type: "text",
    data: {
      text: "hello",
    },
    position: { x: -100, y: -50 },
  },
  {
    id: "2",
    type: "text",
    data: {
      text: "world",
    },
    position: { x: 0, y: 100 },
  },
  {
    id: "3",
    type: "uppercase",
    data: { text: "" },
    position: { x: 100, y: -100 },
  },
  {
    id: "4",
    type: "result",
    data: {},
    position: { x: 300, y: -75 },
  },
];

const initEdges: Edge[] = [
  {
    id: "e1-3",
    source: "1",
    target: "3",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
  },
];

function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        colorMode="system"
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

const App = () => {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <Flow />
      </ResizablePanel>

      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>Two</ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default App;

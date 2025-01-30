import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  type OnConnectEnd,
  useStoreApi,
  useReactFlow,
} from "@xyflow/react";
import { useShallow } from "zustand/react/shallow";
import { useCallback, useRef } from "react";
import useStore from "@/store/store";
const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  createNode: state.createNode,
});

function FlowCanvas() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector),
  );

  return (
    <ReactFlow
      onPaneClick={(e) => {}}
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

export default FlowCanvas;

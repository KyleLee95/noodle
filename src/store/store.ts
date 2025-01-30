import { createWithEqualityFn } from "zustand/traditional";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  type Edge,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  XYPosition,
} from "@xyflow/react";
import { nanoid } from "nanoid";
import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";
import { type AppState } from "@/types/appState";

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  createNode: void;
};

const useStore = createWithEqualityFn<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,

  createNode: (parentNode: Node, position: XYPosition, nodeData: any) => {
    console.log("createNode");
  },
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
}));

export default useStore;

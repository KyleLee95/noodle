import { createWithEqualityFn } from "zustand/traditional";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Edge,
  type Node,
  type OnEdgesChange,
  type OnNodesChange,
  XYPosition,
} from "@xyflow/react";
import { nanoid } from "nanoid";
import { type AppState } from "@/types/appState";

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  createNode: void;
  addEdge: void;
};

const useStore = createWithEqualityFn<AppState>((set, get) => ({
  nodes: [
    { id: "a", data: { label: "oscillator" }, position: { x: 0, y: 0 } },
    { id: "b", data: { label: "gain" }, position: { x: 50, y: 50 } },
    { id: "c", data: { label: "output" }, position: { x: -50, y: 100 } },
  ],

  edges: [],

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

  addEdge(data) {
    const id = nanoid(6);
    const edge = { id, ...data };

    set({ edges: [edge, ...get().edges] });
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

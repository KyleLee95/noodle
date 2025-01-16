import { create } from "zustand";
import {
  addNodes,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";

import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";
import { type AppState } from "@/types/appState";

const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  addNode: (state) => {
    set({
      nodes: [...state.nodes],
    });
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

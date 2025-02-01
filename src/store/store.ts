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
  nodes: [{
    type: "boxGeometryNode",
    id: nanoid(),
    data: { height: 1, width: 1, depth: 1 },
    position: { x: 0, y: 0 },
  }],

  edges: [],

  createNode: (parentNode: Node, position: XYPosition, nodeData: any) => {
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
  updateNode(id: string, data) {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          const updatedNode = { ...node, data: { ...node.data, ...data } };
          console.log(updatedNode);
          return updatedNode;
        }
        return node;
      }),
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

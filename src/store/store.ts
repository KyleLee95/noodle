import { create } from "zustand";

const useStore = create((set) => ({
  nodes: [],
  setNodes: (nodes) => set({ nodes }),
  addNode: (node) =>
    set((state) => {
      console.log("node?", node);
      console.log("state", state);
      return { ...state, nodes: [...state.nodes, node] };
    }),
  updateNode: (id, updatedData) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id ? { ...node, ...updatedData } : node,
      ),
    })),
}));

export default useStore;

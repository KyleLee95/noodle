import { Handle, Position } from "@xyflow/react";
import { shallow } from "zustand/shallow";
import useStore from "@/store/store";
import { cn } from "@/lib/utils";

const selector = (id) => (store) => ({
  setHeight: (e) => store.updateNode(id, { height: e.target.value }),
  setWidth: (e) => store.updateNode(id, { width: e.target.value }),
  setDepth: (e) => store.updateNode(id, { depth: e.target.value }),
  setMaterial: (e) => store.updateNode(id, { type: e.target.value }),
});

export default function BoxGeometryNode(
  { id, data }: {
    id: string;
    data: { height: number; depth: number; width: number };
  },
) {
  const { setHeight, setWidth, setDepth, setMaterial } = useStore(
    selector(id),
    shallow,
  );
  return (
    <div
      className={cn(
        "relative rounded-md border bg-card p-5 text-card-foreground",
      )}
    >
      <label>
        <span>Height:</span>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="10"
          value={data.height}
          onChange={setHeight}
        />
        <span>{data.height}</span>
      </label>

      <label>
        <span>Width:</span>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="10"
          value={data.width}
          onChange={setWidth}
        />
        <span>{data.width}</span>
      </label>

      <label>
        <span>Depth:</span>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="10"
          value={data.depth}
          onChange={setDepth}
        />
        <span>{data.depth}</span>
        <Handle type="source" position={Position.Bottom} />
      </label>
    </div>
  );
}

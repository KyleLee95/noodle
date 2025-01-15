import { Position, Handle } from "@xyflow/react";

const BoxGeometryNode = ({ data }) => {
  return (
    <div
      style={{ padding: "10px", background: "#f0f0f0", borderRadius: "5px" }}
    >
      <strong>Box Node</strong>
      <div>
        <label>Width: {data.width}</label>
      </div>
      <div>
        <label>Height: {data.height}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default BoxGeometryNode;

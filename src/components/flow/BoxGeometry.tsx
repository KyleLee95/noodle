import { useState, useRef, memo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Position,
  Handle,
  useReactFlow,
  type NodeProps,
  type Node,
} from "@xyflow/react";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function BoxGeometryNode({ id, data }: NodeProps<Node<{ text: string }>>) {
  const { updateNodeData } = useReactFlow();

  return (
    <div>
      <div>node {id}</div>
      <div>
        <input
          onChange={(evt) => updateNodeData(id, { text: evt.target.value })}
          value={data.text}
          className="block"
        />
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default memo(BoxGeometryNode);

import { Canvas } from "@react-three/fiber";
import useStore from "@/store/store";

const GeometryRenderer = () => {
  const nodes = useStore((state) => state.nodes);
  if (!nodes) {
    return null;
  }

  return (
    <Canvas>
      <ambientLight />
      {nodes.map((node) => {
        if (node.type === "boxGeometryNode") {
          const { x, y } = node.position;
          const { width, height } = node.data;
          return (
            <mesh key={node.id} position={[x / 100, -y / 100, 0]}>
              <boxGeometry args={[width, height, 1]} />
              <meshStandardMaterial color="orange" />
            </mesh>
          );
        }
        return null;
      })}
    </Canvas>
  );
};

export default GeometryRenderer;

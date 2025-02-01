import { Canvas } from "@react-three/fiber";
import useStore from "@/store/store";
import Geometry from "./geometry";
const Viewport = () => {
  const nodes = useStore((state) => state.nodes);

  if (!nodes) {
    return null;
  }

  return (
    <Canvas className="h-full w-full" color="">
      <ambientLight />
      {nodes.map((node) => {
        return <Geometry key={node.id} node={node} />;
      })}
    </Canvas>
  );
};

export default Viewport;

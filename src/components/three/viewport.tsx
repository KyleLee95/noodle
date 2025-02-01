import { Canvas } from "@react-three/fiber";
import useStore from "@/store/store";
import GeometryReducer from "./geometry-reducer";
const Viewport = () => {
  const nodes = useStore((state) => state.nodes);

  if (!nodes) {
    return null;
  }

  return (
    <Canvas className="h-full w-full" color="">
      <ambientLight />
      {nodes.map((node) => {
        return <GeometryReducer node={node} />;
      })}
    </Canvas>
  );
};

export default Viewport;

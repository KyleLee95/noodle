import { Canvas } from "@react-three/fiber";
import useStore from "@/store/store";

const Viewport = () => {
  const nodes = useStore((state) => state.nodes);
  if (!nodes) {
    return null;
  }

  return (
    <Canvas className="h-full w-full" color="">
      <ambientLight />
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
};

export default Viewport;

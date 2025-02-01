import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function GeometryLoaderNode({ src }: { src: string }) {
  const gltf = useLoader(GLTFLoader, src);
}

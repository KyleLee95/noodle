import { BOX_GEOMETRY_NODE } from "./constants";

export default function Geometry({ node }) {
  const { data, type } = node;
  switch (type) {
    case BOX_GEOMETRY_NODE: {
      return (
        <mesh>
          <boxGeometry args={[data.height, data.width, data.depth]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      );
    }
  }
}

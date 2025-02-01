export default function GeometryReducer({ node }) {
  const { data, type } = node;
  if (type === "boxGeometryNode") {
    return (
      <mesh>
        <boxGeometry args={[data.height, data.width, data.depth]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    );
  }
}

import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  type OnConnect,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useRef, useCallback } from "react";
import { type MyNode } from "@/components/flow/initial-elements";
import TextNode from "@/components/flow/TextNode";
import ResultNode from "@/components/flow/ResultNode";
import UppercaseNode from "@/components/flow/UppercaseNode";
import { Canvas, useFrame } from "@react-three/fiber";

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

const Viewer = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

const nodeTypes = {
  text: TextNode,
  result: ResultNode,
  uppercase: UppercaseNode,
};

const initNodes: MyNode[] = [
  {
    id: "1",
    type: "text",
    data: {
      text: "hello",
    },
    position: { x: -100, y: -50 },
  },
  {
    id: "2",
    type: "text",
    data: {
      text: "world",
    },
    position: { x: 0, y: 100 },
  },
  {
    id: "3",
    type: "uppercase",
    data: { text: "" },
    position: { x: 100, y: -100 },
  },
  {
    id: "4",
    type: "result",
    data: {},
    position: { x: 300, y: -75 },
  },
];

const initEdges: Edge[] = [
  {
    id: "e1-3",
    source: "1",
    target: "3",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
  },
];

function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <div className="h-full w-full">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          colorMode="system"
          fitView
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

const App = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <Flow />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <Viewer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default App;

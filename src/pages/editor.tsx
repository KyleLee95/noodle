import FlowCanvas from "@/components/flow/flow-canvas";
import Viewport from "@/components/three/viewport";
import EditorMenuBar from "@/components/ui/editor-menubar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Editor() {
  return (
    <>
      <EditorMenuBar />
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={50}>
          <FlowCanvas />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <Viewport />
            </ResizablePanel>

            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

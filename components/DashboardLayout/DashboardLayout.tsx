import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import SideBar from "./SideBar"



export default function DashboardLayout({ children }: { children: React.ReactNode }): React.ReactElement {



  return (
    <div className="flex w-full h-full px-5">
      <ResizablePanelGroup className="max-w-full h-full" direction="horizontal">
        <ResizablePanel defaultSize={15} minSize={5} maxSize={15}>
         <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} className="p-10">
            {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}


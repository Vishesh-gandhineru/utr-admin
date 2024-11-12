// import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
// import SideBar from "./SideBar"

// export default function DashboardLayout({ children }: { children: React.ReactNode }): React.ReactElement {

//   return (
//     <div className="flex w-full h-full px-5">
//       <ResizablePanelGroup className="max-w-full h-full" direction="horizontal">
//         <ResizablePanel defaultSize={15} minSize={5} maxSize={15}>
//          <SideBar />
//         </ResizablePanel>
//         <ResizableHandle withHandle />
//         <ResizablePanel defaultSize={75} className="p-10">
//             {children}
//         </ResizablePanel>
//       </ResizablePanelGroup>
//     </div>
//   )
// }


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"
import SideBar from "./SideBar"
import Navbar from "../Header/Navbar"
 
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <SideBar />
        <SidebarTrigger className="mt-5" />
      <main className="px-5 py-5 w-full ">        
        {children}
      </main>
    </SidebarProvider>
  )
}
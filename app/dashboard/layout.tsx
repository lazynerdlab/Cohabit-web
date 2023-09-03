import SideBar from "@/components/side-bar/SideBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[20%_80%] min-h-screen max-h-screen overflow-hidden">
      <SideBar />
      {children}
    </div>
  );
}

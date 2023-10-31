import SideBar from "@/components/global/SideBar";
type children = {
  children: React.ReactNode;
};
const template = ({ children }: children) => {
  return (
    <div className="drawer lg:drawer-open min-h-screen max-h-screen overflow-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#EEF2F7]">{children}</div>
      <SideBar />
    </div>
  );
};

export default template;

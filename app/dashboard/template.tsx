import SideBar from "@/components/global/SideBar";
type children = {
  children: React.ReactNode;
};
const template = ({ children }: children) => {
  return (
    <div className="grid grid-cols-[20%_80%] min-h-screen max-h-screen overflow-hidden">
      <SideBar />
      {children}
    </div>
  );
};

export default template;

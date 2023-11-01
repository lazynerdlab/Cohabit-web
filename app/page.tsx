import SignIn from "@/components/sign-in/sign-in";
import authImage from "@/assets/BG.svg";

const Home = () => {
  return (
    <div className="grid md:grid-cols-[45%_55%] min-h-[100vh]">
      <div className="w-full bg-[#F8F8FD] md:grid grid-cols-1 hidden">
        <div
          style={{
            background: `url(${authImage.src})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full bg-[#F8F8FD] mx-auto"
        ></div>
      </div>
      <SignIn />
    </div>
  );
};

export default Home;

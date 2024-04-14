import { budgetData, catData, genderData, locationData } from "./editData"
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { IoArrowBackSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";

interface Props {
    handleClick: () => void;
  }

  
const SeekerEdit1 = ({handleClick}:Props) => {
    const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
    return (
        <main className=" h-full bg-[#E7F6FD] mr-7 ml-3 min-h-[100svh] overflow-y-scroll noscroll-bar" ref={mainRef}>
            <section className=" p-3 pr-[100px]">
                <div className=" mb-10">
                {<IoArrowBackSharp className="fill-colorPrimary text-3xl mb-5 hover:cursor-pointer" onClick={handleClick} />}  
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your categories</h2>
                    <div className=" flex flex-wrap gap-4">
                        {
                            catData.map((Categories, id) => (

                                <div key={id} className=" border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A]">
                                    {Categories}
                                </div>

                            ))
                        }
                    </div>
                </div>

                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your budget</h2>
                    <div className=" flex flex-wrap gap-4">
                        {
                            budgetData.map((budget, id) => (

                                <div key={id} className=" border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A]">
                                    {budget}
                                </div>

                            ))
                        }
                    </div>

                </div>

                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your location</h2>
                    <div className=" flex flex-wrap gap-4">
                        {
                            locationData.map((locations, id) => (

                                <div key={id} className=" border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A]">
                                    {locations}
                                </div>

                            ))
                        }
                    </div>

                </div>

                <div>
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit gender</h2>
                    <div className=" flex flex-wrap gap-4">
                        {
                            genderData.map((gender, id) => (

                                <div key={id} className=" border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A]">
                                    {gender}
                                </div>

                            ))
                        }
                    </div>

                </div>
            </section>

            <div className=" relative">
                <Button 
                type="primary"
                className=" absolute right-0 bg-colorPrimary w-[200px] h-[40px]">
                    Save
                </Button>
            </div>
        </main>
    )
}

export default SeekerEdit1
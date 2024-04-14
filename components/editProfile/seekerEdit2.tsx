import { languageData, petData, vibeData, workData } from "./editData"
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { IoArrowBackSharp } from "react-icons/io5";

interface Props {
    handleClick: () => void;
  }

const SeekerEdit2 = ({handleClick}: Props) => {
    return (
        <main className=" h-fit bg-[#E7F6FD] mr-7 ml-3 min-h-[100svh] overflow-y-auto mb-14 noscroll-bar">
            <section className=" p-3 pr-[100px]">
                <div className=" mb-10">
                {<IoArrowBackSharp className="fill-colorPrimary text-3xl mb-5 hover:cursor-pointer" onClick={handleClick} />} 
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your categories</h2>
                    <textarea

                        className=" bg-transparent border-[2px] border-[#B8C9C9] w-full h-[140px] focus:outline-none resize-none p-5"
                    />
                </div>

                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your category</h2>
                    <div className=" flex flex-wrap gap-4">
                        {
                            vibeData.map((vibe, id) => (

                                <div key={id} className=" border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A]">
                                    {vibe}
                                </div>

                            ))
                        }
                    </div>

                </div>

                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit language</h2>
                    <div className=" flex flex-wrap gap-4">
                        {
                            languageData.map((language, id) => (

                                <div key={id} className=" border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A]">
                                    {language}
                                </div>

                            ))
                        }
                    </div>
                </div>

                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit pet</h2>
                    <div className=" flex flex-wrap gap-4">
                        {
                            petData.map((pet, id) => (

                                <div key={id} className=" border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A]">
                                    {pet}
                                </div>

                            ))
                        }
                    </div>

                </div>
                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit Employment</h2>
                    <div className=" flex flex-wrap gap-4">
                        {
                            workData.map((work, id) => (

                                <div key={id} className=" border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A]">
                                    {work}
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

export default SeekerEdit2
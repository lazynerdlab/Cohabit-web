"use client";
import { languageData, petData, vibeData, workData } from "./editData"
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { useGetHouseSeekerProfileQuery, useGetPersonalityTraitsQuery } from "@/redux/api/houseApi";
import { useUpdateAboutMeMutation } from "@/redux/api/seekerApi";
import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { LoadingOutlined } from "@ant-design/icons";
import { message, Skeleton } from "antd";



const SeekerEdit2 = () => {
    const [aboutMe, setAboutMe] = useState<{
        personal_introduction: string,
        personality_trait: number[],
        language: string,
        pets: string,
        employment: string
    }>({
        personal_introduction: "",
        personality_trait: [],
        language: "",
        pets: "",
        employment: ""
    });

    const { data, isLoading } = useGetHouseSeekerProfileQuery({})
    const [updateAboutMe, { isLoading: updateLoading }] = useUpdateAboutMeMutation()
    const { data: traits } = useGetPersonalityTraitsQuery({})
    const { push } = useRouter()
  

    useEffect(() => {
        if (!isLoading && data && traits) {
            // Set default values for preference properties if data is null or undefined
            const defaultPreference = {
                personal_introduction: data?.data?.preference?.personal_introduction,
                personality_trait: data?.data?.lifestyle?.map((trait_Type: string) => {
                    const trait = traits?.data?.find((vibes: { title: string; }) => vibes.title.toLowerCase() === trait_Type.toLowerCase());
                    return trait ? trait.id : null;
                }).filter((id: null) => id !== null),
                language: data?.data?.preference?.language,
                pets: data?.data?.preference?.pets,
                employment: data?.data?.preference?.employment
            };

            setAboutMe(defaultPreference);
        }
    }, [data, isLoading, traits]);

    const handleSectionClick = (section: string, value: string) => {
        setAboutMe(prevAboutMe => ({
            ...prevAboutMe,
            [section]: value
        }));
    }

    const handleTraitClick = (value: string) => {
        const trait = traits?.data?.find((vibes: { title: string; }) => vibes.title.toLowerCase() === value.toLowerCase());
        if (trait) {
            if (aboutMe.personality_trait.includes(trait.id)) {
                // If trait exists, remove it from the array
                setAboutMe(prevAboutMe => ({
                    ...prevAboutMe,
                    personality_trait: prevAboutMe.personality_trait.filter(id => id !== trait.id)
                }));
            } else {
                // If trait doesn't exist, add it to the array
                setAboutMe(prevAboutMe => ({
                    ...prevAboutMe,
                    personality_trait: [...prevAboutMe.personality_trait, trait.id]
                }));
            }
        }
    }

    const handleUpdate = () => {
        updateAboutMe(aboutMe).unwrap()
            .then(() => {
                message.success("saved")
                push("/dashboard/profile")
            }).catch(() => {
                message.error("save failed")
            })
    }

    return (
        <main className=" h-fit bg-[#E7F6FD] mr-7 ml-3 min-h-[100svh] overflow-y-auto mb-14 noscroll-bar" >
            <section className=" p-3 md:pr-[100px] pr-[20px]">
                <div className=" mb-10">

                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your introduction</h2>
                    {
                        isLoading ? <Skeleton active /> :
                            <textarea
                                className=" bg-transparent border-[2px] border-[#B8C9C9] w-full h-[140px] focus:outline-none resize-none p-5"
                                value={aboutMe.personal_introduction}
                                onChange={(e) => setAboutMe(prevAboutMe => ({
                                    ...prevAboutMe,
                                    personal_introduction: e.target.value
                                }))}
                            />
                    }

                </div>

                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your category</h2>
                    {
                        isLoading ? <Skeleton active /> :
                            <div className=" flex flex-wrap gap-4">
                                {
                                    traits?.data?.map((vibe: any, index: any) => (

                                        <div key={index}
                                            className={`border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A] hover: cursor-pointer
                                    ${aboutMe.personality_trait?.includes(vibe.id) ? 'bg-colorPrimary text-[white]' : ''}`}
                                            onClick={() => handleTraitClick(vibe.title)}
                                        >
                                            {vibe.title}
                                        </div>

                                    ))
                                }
                            </div>
                    }


                </div>

                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit language</h2>
                    {
                        isLoading ? <Skeleton active /> :
                            <div className=" flex flex-wrap gap-4">
                                {
                                    languageData.map((language, id) => (

                                        <div key={id}
                                            className={`border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A] hover: cursor-pointer
                                ${language.toLowerCase() === aboutMe.language.toLowerCase() ? 'bg-colorPrimary text-[white]' : ''}`}
                                            onClick={() => handleSectionClick('language', language)}
                                        >
                                            {language}
                                        </div>

                                    ))
                                }
                            </div>
                    }

                </div>

                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit pet</h2>
                    {
                        isLoading ? <Skeleton active /> :
                            <div className=" flex flex-wrap gap-4">
                                {
                                    petData.map((pet, id) => (

                                        <div key={id}
                                            className={`border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A] hover: cursor-pointer
                                ${pet.toLowerCase() === aboutMe.pets.toLowerCase() ? 'bg-colorPrimary text-[white]' : ''}`}
                                            onClick={() => handleSectionClick('pets', pet)}
                                        >
                                            {pet}
                                        </div>

                                    ))
                                }
                            </div>
                    }


                </div>
                <div className=" mb-10">
                    <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit Employment</h2>
                    {
                        isLoading ? <Skeleton active /> :
                            <div className=" flex flex-wrap gap-4">
                                {
                                    workData.map((work, id) => (

                                        <div key={id}
                                            className={`border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A] hover: cursor-pointer
                                ${work.toLowerCase() === aboutMe.employment.toLowerCase() ? 'bg-colorPrimary text-[white]' : ''}`}
                                            onClick={() => handleSectionClick('employment', work)}
                                        >
                                            {work}
                                        </div>

                                    ))
                                }
                            </div>

                    }


                </div>
            </section>

            <div className=" relative">
                <Button
                    type="primary"
                    className=" absolute right-0 bg-colorPrimary w-[200px] h-[40px]"
                    onClick={handleUpdate}
                >

                    {
                        updateLoading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : 'Save'
                    }

                </Button>
            </div>
        </main>
    )
}

export default SeekerEdit2
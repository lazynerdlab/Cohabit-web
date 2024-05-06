"use client";
import { genderData, locationData } from "./editData"
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";
import { useGetHouseBudgetQuery, useGetHouseSeekerProfileQuery, useGetHouseTypeQuery } from "@/redux/api/houseApi";
import { useUpdatePreferenceMutation } from "@/redux/api/seekerApi";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { message, Skeleton } from "antd";


const SeekerEdit1 = () => {
    const [preference, setPreference] = useState<{
        house_type: number[];
        budget: number | null;
        location: string;
        gender: number | null;
    }>({
        house_type: [],
        budget: null,
        location: '',
        gender: null
    });
    const { data, isLoading } = useGetHouseSeekerProfileQuery({})
    const [updatePrefrence, { isLoading: updateLoading }] = useUpdatePreferenceMutation()
    const { data: budgets } = useGetHouseBudgetQuery({})
    const { data: houses } = useGetHouseTypeQuery({})
    const { push } = useRouter()

    const getIdFromValue = (apiValue: string) => {
        const foundItem = budgets?.data?.find((item: { text: string; }) => item.text.toLowerCase() === apiValue.toLowerCase());
        return foundItem ? foundItem.id : null;
    };
    const getIdGender = (apiValue: string) => {
        const foundItem = genderData.find(item => item.value.toLowerCase() === apiValue.toLowerCase());
        return foundItem ? foundItem.id : null;
    };

    useEffect(() => {

        if (!isLoading && data && houses) {
            // Set default values for preference properties if data is null or undefined
            const defaultPreference = {
                house_type: data?.data.house_type?.map((house: string) => {
                    const category = houses?.data?.find((cat: { title: string; }) => cat.title.toLowerCase() === house.toLowerCase());
                    return category ? category.id : null;
                }).filter((id: null) => id !== null),
                budget: getIdFromValue(data.data?.budget) || null,
                location: data.data?.location || '',
                gender: getIdGender(data.data?.gender) || null
            };

            setPreference(defaultPreference);
        }
    }, [data, isLoading, houses, budgets]);



    const handleSectionClick = (section: string, value: string) => {
        setPreference(prevPreference => ({
            ...prevPreference,
            [section]: value
        }));
    }
    const handleBudgetClick = (section: string, value: string) => {
        setPreference(prevPreference => ({
            ...prevPreference,
            [section]: getIdFromValue(value)
        }));
    }
    const handleGenderClick = (section: string, value: string) => {
        setPreference(prevPreference => ({
            ...prevPreference,
            [section]: getIdGender(value)
        }));
    }

    const handleCategoryClick = (value: string) => {
        const category = houses?.data?.find((cat: { title: string; }) => cat.title.toLowerCase() === value.toLowerCase());
        if (category) {
            if (preference.house_type.includes(category.id)) {
                // If category exists, remove it from the array
                setPreference(prevPreference => ({
                    ...prevPreference,
                    house_type: prevPreference.house_type.filter(id => id !== category.id)
                }));
            } else {
                // If category doesn't exist, add it to the array
                setPreference(prevPreference => ({
                    ...prevPreference,
                    house_type: [...prevPreference.house_type, category.id]
                }));
            }
        }
    }

    const handleUpdate = () => {
        updatePrefrence(preference).unwrap()
            .then(() => {
                message.success("saved")
                push("/dashboard/profile")
            }).catch(() => {
                message.error("save failed")
            })
    }




    return (
        <>
            <div className=" h-full bg-[#E7F6FD] mr-7 ml-3 max-h-[100svh] overflow-y-scroll noscroll-bar " >
                <section className=" p-3 md:pr-[100px] pr-[20px]">
                    <div className=" mb-10">

                        <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your categories</h2>
                        {
                            isLoading ? <Skeleton active /> :
                                <div className=" flex flex-wrap gap-4">
                                    {
                                        houses?.data?.map((Categories: any, id: any) => (

                                            <div key={id} className={`border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A] hover: cursor-pointer  
                                ${preference.house_type?.some(id => houses?.data?.find((cat: { id: number; }) => cat.id === id)?.title.toLowerCase() === Categories.title.toLowerCase()) ? 'bg-colorPrimary text-[white]' : ''}`}
                                                onClick={() => handleCategoryClick(Categories.title)}
                                            >
                                                {Categories.title}
                                            </div>

                                        ))
                                    }
                                </div>
                        }

                    </div>

                    <div className=" mb-10">
                        <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your budget</h2>
                        {
                            isLoading ? <Skeleton active /> :
                                <div className=" flex flex-wrap gap-4">
                                    {
                                        budgets?.data?.map((budget: any, index: any) => (

                                            <div key={index}
                                                className={`border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A] hover: cursor-pointer 
                                    ${budget.id === preference.budget ? 'bg-colorPrimary text-[white]' : ''}`}
                                                onClick={() => handleBudgetClick('budget', budget.text)}
                                            >
                                                {budget.text}
                                            </div>

                                        ))
                                    }
                                </div>

                        }

                    </div>

                    <div className=" mb-10">
                        <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit your location</h2>
                        {
                            isLoading ? <Skeleton active /> :
                                <div className=" flex flex-wrap gap-4">
                                    {
                                        locationData.map((locations, id) => (

                                            <div key={id}
                                                className={`border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A] hover: cursor-pointer ${(locations).toLowerCase() === `${preference.location}`.toLowerCase() ? 'bg-colorPrimary text-[white]' : ''}`}
                                                onClick={() => handleSectionClick('location', locations)}
                                            >
                                                {locations}
                                            </div>

                                        ))
                                    }
                                </div>
                        }


                    </div>

                    <div>
                        <h2 className=" text-[#101C1D] font-semibold text-lg mb-5">Edit gender</h2>
                        {
                            isLoading ? <Skeleton active /> :
                                <div className=" flex flex-wrap gap-4">
                                    {
                                        genderData.map((gender, id) => (

                                            <div key={id}
                                                className={`border-[#B8C9C9] border rounded-3xl px-6 py-1 text-[#616A6A] hover: cursor-pointer 
                                        ${gender.id === preference.gender ? 'bg-colorPrimary text-[white]' : ''}`}
                                                onClick={() => handleGenderClick('gender', gender.value)}
                                            >
                                                {gender.value}
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
            </div>
        </>
    )
}

export default SeekerEdit1
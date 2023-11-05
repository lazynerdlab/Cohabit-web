import { useEffect, useState } from "react";
import MateCard from "../cards/MateCard";
import { useGetFlatmatesQuery } from "@/redux/api/flatmateApi";
import { Spinner } from "../spinner/Spinner";

const ViewMates = () => {
  const [flatmates, setFlatmates] = useState<Record<string, any>[]>();
  const { data, isSuccess, isLoading } = useGetFlatmatesQuery({
    count: 10
  })

  useEffect(() => {
    if (isSuccess) {
      setFlatmates(data?.data)

    }
  }, [isSuccess, data])

  return (
    <div className="w-[98%] mx-auto py-[0.5rem]">
      <div className="grid grid-cols-3 gap-[0.8rem]">
        {isLoading ? <Spinner /> : flatmates?.map((item: Record<string, any>) => (
          <MateCard key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ViewMates;

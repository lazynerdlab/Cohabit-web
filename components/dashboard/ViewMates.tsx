import { useEffect, useState } from "react";
import MateCard from "../cards/MateCard";
import { useGetFlatmatesQuery } from "@/redux/api/flatmateApi";
import { Spinner } from "../spinner/Spinner";
import { CustomPagination } from "@/lib/AntDesignComponents";

const ViewMates = () => {
  const [flatmates, setFlatmates] = useState<Record<string, any>[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const { data, isSuccess, isLoading } = useGetFlatmatesQuery({
    count: rowsPerPage
  })

  useEffect(() => {
    if (isSuccess) {
      setFlatmates(data?.data)
      setRowsPerPage(data?.meta?.per_page)
      setPage(data?.meta?.current_page)
    }
  }, [isSuccess, data])

  return (
    <div className="w-[98%] mx-auto p-[1rem]">
      <div className="grid grid-cols-3 gap-[0.8rem]">
        {isLoading ? <div className="mt-[5rem] ml-[1rem]">
          <Spinner />
        </div> : flatmates?.map((item: Record<string, any>) => (
          <MateCard key={item?.id} data={item} />
        ))}
      </div>
      {
        data?.meta?.total < rowsPerPage ? null : (
          <CustomPagination
            current={page}
            total={data?.meta?.total}
            pageSize={rowsPerPage}
            onChange={(page) => setPage(page)}
          />
        )
      }
    </div>
  );
};

export default ViewMates;

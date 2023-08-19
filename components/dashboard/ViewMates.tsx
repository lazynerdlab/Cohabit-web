import MateCard from "../cards/MateCard";

const ViewMates = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="w-[98%] mx-auto py-[0.5rem]">
      <div className="grid grid-cols-3 gap-[0.8rem]">
        {arr.map((e, i) => (
          <MateCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default ViewMates;

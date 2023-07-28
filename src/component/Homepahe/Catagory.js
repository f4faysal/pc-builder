import CatagoryCard from "./CatagoryCard";

const CatagoryHome = () => {
  const computerComponents = [
    "CPU / Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
  ];

  return (
    <div className="">
      <div className="grid grid-cols-6 gap-4">
        {computerComponents.map((catag, i) => (
          <CatagoryCard catag={catag} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CatagoryHome;
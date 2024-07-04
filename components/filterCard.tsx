import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useState } from "react";

interface FilterCardProps {
  rowData: any;
  index: number;
}

const FilterCard: React.FC<FilterCardProps> = ({ rowData, index }) => {
  // console.log(rowData, "rowldatarowdata");

  return (
    <div className="flex flex-wrap w-72 gap-2">
      {rowData.productFilter.length === 0 ? (
        <div className="flex flex-col h-52 justify-center items-center gap-2 w-52">
          <div
            className="relative group items-center flex gap-2 items-center shadow p-2 rounded cursor-pointer"
            // onClick={handleDesignOpen}
          >
            <Plus />
            Add Product Filters
          </div>
        </div>
      ) : (
        rowData.productFilter.map((item: any, index: number) => (
          <div
            key={index}
            className={cn(
              "p-2 shadow rounded",
              index % 2 !== 0 ? "bg-green-200" : ""
            )}
          >
            {item}
          </div>
        ))
      )}
    </div>
  );
};

export default FilterCard;

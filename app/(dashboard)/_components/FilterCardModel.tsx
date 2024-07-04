import { designData } from "@/app/constants/designData";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Cross, ImageIcon, Plus, Search, X } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { addFilters, updateData } from "@/app/redux/features/products";

import toast from "react-hot-toast";
import { useState } from "react";
import { close } from "@/app/redux/features/filterCardOpen";

const FilterCard = () => {
  const isOpen = useSelector((state: any) => state.filter);
  const selectProduct = useSelector((state: any) => state.select);

  const dispatch = useDispatch();

  function handleInsertVariant({ productImage, productLabel }: any) {
    // console.log(productImage, productLabel);
    dispatch(
      updateData({
        index: selectProduct.productId,
        itemIndex: selectProduct.variantId,
        productImage,
        productLabel,
      })
    );
    dispatch(close());
    toast.success("Variant template updated");
  }

  const [filterValue, setFilterValue] = useState<string[]>([]);

  const [filter, setFilter] = useState<string>("");

  function handleAddFilter() {
    const newData = [...filterValue, filter];
    if (filter !== "") setFilterValue(newData);
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(close())}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px] z-[90]">
        <DialogHeader>
          <DialogTitle>Add filters</DialogTitle>
          <DialogDescription>
            Add new product filters. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              className="col-span-3"
              onChange={(e) => setFilter(e.target.value)}
            />
            <Plus
              onClick={handleAddFilter}
              className="cursor-pointer hover:bg-gray-100 p-1"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            {filterValue.map((value, index) => (
              <div
                className="bg-gray-50 p-2  rounded shadow relative"
                key={index}
              >
                <p className="pr-5">{value}</p>
                <X
                  className="absolute top-1 right-1 cursor-pointer"
                  width={15}
                  onClick={() =>
                    setFilterValue(filterValue.filter((_, i) => i !== index))
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              dispatch(
                addFilters({ filterData: filterValue, index: selectProduct })
              );
              dispatch(close());
              setFilterValue([]);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterCard;

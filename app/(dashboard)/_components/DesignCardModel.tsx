import { designData } from "@/app/constants/designData";
import { close } from "@/app/redux/features/designCardOpen";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageIcon, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "@/app/redux/features/products";

import toast from "react-hot-toast";
import { useState } from "react";

const DesignCardModel = () => {
  const isOpen = useSelector((state: any) => state.design);
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

  const [filterProduct, setFilterProduct] = useState(designData);

  function handleFilterProduct(event: any) {
    const value = event.target.value;
    setFilterProduct(
      ...[
        designData.filter((item) =>
          item.productLabel.toLowerCase().includes(value.toLowerCase())
        ),
      ]
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(close())}>
      <DialogContent className="max-w-3xl h-[35rem] overflow-hidden z-[90]">
        <DialogHeader className="border-b py-6 pt-10">
          <div>
            <div className="p-4 rounded-full border  absolute -top-8 -left-6 ">
              <div className="p-4 rounded-full border ">
                <div className="p-4 rounded-full border ">
                  <ImageIcon
                    className=" stroke-green-500"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between max-sm:flex-col items-center gap-2 relative">
              <p className="font-semibold">Select a design to link</p>
              <div className="relative">
                <Search className="absolute top-2 left-2 text-gray-500" />
                <Input
                  className="pl-10"
                  placeholder="Search"
                  onChange={handleFilterProduct}
                />
              </div>
            </div>
          </div>
        </DialogHeader>
        <div className="flex flex-wrap gap-2 overflow-auto max-h-[32rem]">
          {filterProduct.map((data, index) => (
            <div
              className="relative flex items-center flex-col w-40 h-64 justify-center group "
              key={index}
            >
              <Image
                src={data.productImage}
                alt="image 1 mayur"
                width={300}
                height={300}
                className="rounded"
              />
              <Button
                variant={"ghost"}
                className="absolute bg-white hidden group-hover:flex"
                onClick={() =>
                  handleInsertVariant({
                    productImage: data.productImage,
                    productLabel: data.productLabel,
                  })
                }
              >
                Insert
              </Button>
              <p className="text-black font-medium h-44 overflow-hidden text-sm">
                {data.productLabel}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DesignCardModel;

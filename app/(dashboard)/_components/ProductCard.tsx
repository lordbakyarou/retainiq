"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Eclipse, EllipsisVertical, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import DraggableRow from "@/app/(dashboard)/_components/table/DraggableRow";
import { useDispatch, useSelector } from "react-redux";
import {
  addRow,
  removeRow,
  removeVariant,
  setTableData,
} from "@/app/redux/features/products";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import toast from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProductCard: React.FC = () => {
  const data = useSelector((state: any) => state.product);
  const dispatch = useDispatch();

  function handleAddNewProduct() {
    toast.success("Product added");
    // console.log("ihihi");
    dispatch(addRow());
  }

  function handleDeleteVariant(index: number) {
    dispatch(removeVariant({ arrayIndex: index }));
    toast.success("Variant removed");
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    // console.log(active, over);

    const tableData = data.filter((_: any, i: number) => i === active.id - 1);

    if (active.id - 1 !== over.id - 1) {
      dispatch(removeRow({ arrayIndex: active.id - 1 }));

      dispatch(setTableData({ insertAtIndex: over.id - 1, row: tableData[0] }));
    }
  };

  return (
    <div className="w-full p-5  bg-white">
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <SortableContext
          items={data.map((_: any, index: number) => index + 1)}
          strategy={verticalListSortingStrategy}
        >
          <Table className="h-full border rounded-2xl bg-gray-50">
            <TableHeader className="">
              <TableRow className="">
                <TableHead className="md:sticky md:z-40 md:left-0 bg-gray-50"></TableHead>
                <TableHead className="text-center md:sticky md:z-40 md:left-16  bg-gray-50 ">
                  Product Filter
                </TableHead>
                {data[0].products.map((_row: [], index: number) => {
                  return (
                    <TableHead className="text-center w-full" key={index + 1}>
                      <div className="flex w-full jusitify-between ">
                        <p className="w-full"> Variant {index + 1}</p>
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            asChild
                            className="cursor-pointer"
                          >
                            <EllipsisVertical />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            className="w-fit p-2 cursor-pointer"
                            onClick={() => handleDeleteVariant(index)}
                          >
                            Delete
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>

            <TableBody className="">
              {data.map((row: [], index: number) => (
                // <div className="mb-10 mt-10">
                <DraggableRow rowData={row} index={index} key={index} />
                // </div>
              ))}

              <TableRow>
                <TableCell className="sticky z-40 left-0">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleAddNewProduct}
                  >
                    <PlusIcon className="" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ProductCard;

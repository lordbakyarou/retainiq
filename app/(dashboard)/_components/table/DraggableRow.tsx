import { Button } from "@/app/ui/button";
import { TableCell, TableRow } from "@/app/ui/table";
import FilterCard from "@/components/filterCard";
import ProductImage from "@/components/productImage";
import SerialNumber from "@/components/serialNumber";
import { PlusIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { addVariant, setTableData } from "@/app/redux/features/products";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import toast from "react-hot-toast";

interface Product {
  productImage: string;
  productLabel: string;
}

interface DraggableRowProps {
  rowData: any;
  index: number;
}

const DraggableRow: React.FC<DraggableRowProps> = ({ rowData, index }) => {
  const dipatch = useDispatch();

  function createVariant() {
    dipatch(addVariant());
    toast.success("Variant added");
  }

  const { setNodeRef, transform } = useSortable({
    id: index,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  // console.log(rowData);

  return (
    <TableRow
      ref={setNodeRef}
      style={style}
      className="bg-gray-50 border-b-0 group "
      key={index}
    >
      <TableCell className="group relative sticky z-40 left-0 bg-gray-50 ">
        <SerialNumber index={index} />
      </TableCell>
      <TableCell className="sticky z-40 left-16 bg-gray-50">
        <FilterCard rowData={rowData} index={index} />
      </TableCell>
      {rowData.products.map((row: any, variantId: number) => (
        <TableCell key={variantId} className="text-center ">
          <ProductImage {...row} productId={index} variantId={variantId} />
        </TableCell>
      ))}

      <TableCell className="sticky z-40 left-0">
        <Button variant="outline" size="icon">
          <PlusIcon onClick={createVariant} />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default DraggableRow;

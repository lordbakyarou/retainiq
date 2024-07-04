import { removeRow } from "@/app/redux/features/products";
import { Button } from "@/app/ui/button";
import { useSortable } from "@dnd-kit/sortable";
import { Grip, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

interface SerialNumberProps {
  index: number;
}

const SerialNumber: React.FC<SerialNumberProps> = ({ index }) => {
  const dispatch = useDispatch();

  function handleDeleteRow() {
    dispatch(removeRow({ arrayIndex: index }));
    toast.success("Product removed");
  }

  const { attributes, listeners } = useSortable({
    id: index,
  });

  return (
    <div className="flex  flex-col gap-2 items-center ">
      <Trash2
        className=" absolute top-12 text-red-500 hidden group-hover:flex cursor-pointer"
        onClick={handleDeleteRow}
      />
      <div className="text-xl font-semibold flex gap-2 items-center">
        {index + 1}{" "}
        <Grip className="hover:cursor-grab" {...attributes} {...listeners} />
      </div>
    </div>
  );
};

export default SerialNumber;

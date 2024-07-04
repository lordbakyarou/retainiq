import { close, open } from "@/app/redux/features/designCardOpen";
import { setProductId } from "@/app/redux/features/selectProduct";
import { Plus, SquarePen } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface ProductImageProps {
  productImage: string;
  productLabel: string;
  variantId: number;
  productId: number;
}

const ProductImage: React.FC<ProductImageProps> = ({
  productImage,
  productLabel,
  variantId,
  productId,
}) => {
  const dispatch = useDispatch();

  function handleDesignOpen() {
    dispatch(open());
    dispatch(setProductId({ productId, variantId }));
  }

  return (
    <div className="flex justify-center">
      {productImage && productImage !== "" ? (
        <div className="flex flex-col items-center gap-2 w-52">
          <div className="relative items-center flex justify-center">
            <Image
              src={productImage}
              alt={productLabel}
              width={100}
              height={100}
              className="rounded"
            />
            <SquarePen
              className="absolute p-1 bg-white hidden text-black rounded hover:flex group-hover:flex cursor-pointer"
              size={30}
              onClick={handleDesignOpen}
            />
          </div>
          <p className="font-medium">{productLabel}</p>
        </div>
      ) : (
        <div className="flex flex-col h-52 justify-center items-center gap-2 w-52">
          <div
            className="relative group items-center flex gap-2 items-center shadow p-2 rounded cursor-pointer"
            onClick={handleDesignOpen}
          >
            <Plus />
            Add Design
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImage;

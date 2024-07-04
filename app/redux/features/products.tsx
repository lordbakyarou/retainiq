import { createSlice, current } from "@reduxjs/toolkit";
import ProductImage from "@/components/productImage"; // Adjust the path as per your project setup

const initialState = [
  {
    productFilter: ["image", "is empty", "and discount precentage", "is", 0],
    products: [
      {
        productImage:
          "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/28176282/2024/3/22/5238b821-99ce-4a14-bb12-cc99586074dd1711102034033-Blue-leganga-choli-191711102033187-1.jpg",
        productLabel: "Single Image No Discount",
      },
      {
        productImage:
          "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/25145098/2023/9/25/c989a6ce-cd8f-48d3-b850-bf47c3ea10581695625499112ShaebySASSAFRASOrangeBluePrintedReadytoWearLehenga2.jpg",
        productLabel: "Single-20% Discount",
      },
    ],
  },
  {
    productFilter: ["image", "is empty", "and discount precentage", "is", 0],
    products: [
      {
        productImage:
          "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/27748056/2024/2/21/103c9b73-3cc1-4699-bde6-f65c512dbabf1708501316993AnoukWomenEthnicMotifsPrintedFlaredSleevesAnarkaliKurta6.jpg",
        productLabel: "Single Image Center",
      },
      {
        productImage:
          "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/13182272/2020/12/18/220f3186-9cde-4ced-88cd-e0978ca20cf71608269094262-ADA-Women-Blue-Chikankari-Hand-Embroidered-Cotton-Straight-K-1.jpg",
        productLabel: "Single Image Right-10% Discount",
      },
    ],
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addData: (state, action) => {
      const { index, product } = action.payload;
      state[index].products.push(product);
    },
    removeData: (state, action) => {
      const { index, itemIndex } = action.payload;
      state[index].products[itemIndex] = {
        productImage: "",
        productLabel: "",
      };
    },
    addRow: (state) => {
      const dataLength = state[0].products.length; // Length of products in the first set
      const newData = Array.from({ length: dataLength }, () => ({
        productImage: "",
        productLabel: "",
      }));
      console.log("Row added");
      state.push({
        productFilter: [],
        products: newData,
      });
    },
    removeRow: (state, action) => {
      const { arrayIndex } = action.payload;
      console.log("Row removed");
      state.splice(arrayIndex, 1);
    },
    addVariant: (state) => {
      console.log("Variant Added");
      state.forEach((set) => {
        set.products.push({
          productImage: "",
          productLabel: "",
        });
      });
    },
    removeVariant: (state, action) => {
      const { arrayIndex } = action.payload;
      console.log("Variant Removed");
      state.forEach((set) => {
        set.products = set.products.filter((_, i) => i !== arrayIndex);
      });
    },
    updateData: (state, action) => {
      const { index, itemIndex, productImage, productLabel } = action.payload;
      console.log("Data updated");
      state[index].products[itemIndex] = {
        productImage: productImage,
        productLabel: productLabel,
      };
    },
    setTableData: (state, action) => {
      const { insertAtIndex, row } = action.payload;
      console.log("Row sorted");
      state.splice(insertAtIndex, 0, row);
    },
    addFilters: (state, action) => {
      const { filterData, index } = action.payload;
      console.log("filterAdded");
      state[index].productFilter = [...filterData];
    },
  },
});

export const {
  addData,
  removeData,
  addVariant,
  updateData,
  removeRow,
  addRow,
  setTableData,
  removeVariant,
  addFilters,
} = productsSlice.actions;

export default productsSlice.reducer;

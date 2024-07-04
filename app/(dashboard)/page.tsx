"use client";
import Navbar from "@/components/navbar";

import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import store, { persistor } from "../redux/app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ProductCard from "./_components/ProductCard";
import FilterCardModel from "./_components/FilterCardModel";
import DesignCardModel from "./_components/DesignCardModel";

const Dashboard = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="h-full relative">
          <div className="hidden h-full md:w-52  md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-black">
            <div>
              <Sidebar />
            </div>
          </div>
          <main className="md:pl-52 space-y-2">
            <Navbar />

            <div className="flex justify-between p-2">
              <h1 className="text-xl font-semibold">Rules creation</h1>
              <Button className="bg-green-500">Publish Feed</Button>
            </div>
            <div className="flex min-w-screen relative">
              <ProductCard />

              <DesignCardModel />
              <FilterCardModel />
            </div>
          </main>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default Dashboard;

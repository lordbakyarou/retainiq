import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const Dashboard = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-64  md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-black">
        <div>
          <Sidebar />
        </div>
      </div>
      <main className="md:pl-64">
        <Navbar />
      </main>
    </div>
  );
};

export default Dashboard;
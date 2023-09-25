import HeadNav from "../components/general/headnav";
import Sidebar from "../components/general/sidebar";
interface dashboard {
  children?: any;

  current: number;
}
const DashboardLayout = ({ children, current }: dashboard) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col lg:hidden mt-6 px-4 justify-center h-screen">
        <h1 className="font-bold text-customBlack text-base text-center mb-2 ">
          Sorry, this page is not optimized for mobile devices.
        </h1>
        <p className="text-neutral-700 text-sm  ">
          Please try viewing it on a larger screen, such as a laptop or desktop
          computer, for a better experience.
        </p>
        <p className="text-neutral-700 text-sm  ">
          Thank you for your understanding. 😊
        </p>
      </div>
      <div className="w-full h-screen bg-[#f6f6f6] relative  md:flex hidden ">
        <div className="w-3/12 max-w-[250px]  2xl:max-w-[320px] ">
          <Sidebar current={current} />
        </div>

        <div className="w-9/12 flex flex-col flex-grow relative h-full flow-hide  ">
          <HeadNav />

          <div className="w-full h-[95vh] flow-hide px-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

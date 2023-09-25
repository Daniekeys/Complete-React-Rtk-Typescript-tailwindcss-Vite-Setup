import { useNavigate } from 'react-router-dom';
import {  AdminIcon,TransactionIcon,UserIcon, LogoutIcon } from '../../assets';
const styles = {
  active:
    "w-[190px] 2xl:w-[256px] h-[64px] rounded-[8px] bg-[#1C1C1D] flex pl-10 items-center space-x-6 cursor-pointer   ",
  inActive:
    "w-[190px] 2xl:w-[256px] h-[64px]  flex  items-center pl-10 space-x-6 hover:bg-[#1c1c1d] cursor-pointer",
};
const Sidebar = ({ current }: { current: number }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full fixed top-0 left-0 bottom-0 h-screen flex flex-col max-w-[250px] 2xl:max-w-[320px]   bg-[#000] flow-hide  ">
      <div className="w-full flex flex-col items-center relative h-screen">
        <div className="mt-12 flex justify-center">
          <h1 className="text-white">YOUR LOGO HERE</h1>
        </div>
        <div className="flex flex-col items-center mt-[120px]">
          <div
            className={current === 1 ? styles.active : styles.inActive}
            onClick={() => navigate("/")}
          >
            <AdminIcon />
            <p className="text-white text-base font-bold">Admin</p>
          </div>
       
        </div>

        <div className="absolute bottom-[120px] left-0 right-0">
          <div className=" w-[256px] h-[64px]  flex  items-center pl-10 space-x-6 mx-auto cursor-pointer">
            <LogoutIcon />
            <p className="text-[#DA3F51] font-medium text-base ">Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar

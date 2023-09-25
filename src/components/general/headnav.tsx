
import userpro  from "../../assets/png/user-pro.png"
const HeadNav = () => {
  return (
    <div className="w-full  flex items-center justify-between  px-12 py-6">
      <div className="w-full flex space-x-4 items-center">
        <span>
          <img
            src={userpro}
            alt="userpor"
            className="w-10 h-10 rounded-full "
          />
        </span>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-primary ">Welcome Admin 🖐</p>
          <p className="text-sm font-medium text-secondary mt-[7px] ">
            What would you like to do today?
          </p>
        </div>
      </div>

      <p></p>
    </div>
  );
}

export default HeadNav

import { SearchIcon } from "../../assets";
import Filter from "../dropdown/filter-dropdown";
import Status from "../dropdown/status-drop";
import Support from "../dropdown/support-dropdown";
import userpro from "../../assets/png/user-pro.png";
import More from "../dropdown/dotted-dropdown";
const sampData = [
  {
    ref: "121212121221",
    fee: "$50.00",
    date: "31st May 2023",
    supportType: "One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: true,
  },
  {
    ref: "121212121221",
    fee: "$50.00",
    date: "31st May 2023",
    supportType: "One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: true,
  },
  {
    ref: "121212121221",
    fee: "$50.00",
    date: "31st May 2023",
    supportType: "One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: false,
  },
  {
    ref: "121212121221",
    fee: "$50.00",
    date: "31st May 2023",
    supportType: "One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: false,
  },
  {
    ref: "121212121221",
    fee: "$50.00",
    date: "31st May 2023",
    supportType: "One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: false,
  },
  {
    ref: "121212121221",
    fee: "$50.00",
    date: "31st May 2023",
    supportType: "One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: true,
  },
];
const UsersTable = () => {
  return (
    <div className="w-full bg-white flex flex-col py-11 px-8">
      <div className="flex justify-between items-center">
        <p className="text-secondary text-xl font-extrabold ">User list</p>
      </div>
      {/* Table sessions */}
      <table className="min-w-max w-full table-auto border-collapse block md:table overflow-hidden lg:overflow-scroll mt-10">
        <th className="grid w-full grid-cols-4  border-b border-b-[#f3f3f3] py-5 px-10">
          <td className="text-neutral text-sm text-start ">Name & Email</td>
          <td className="text-neutral text-sm text-start ">
            Total amount earned
          </td>
          <td className="text-neutral text-sm text-start ">Total supporters</td>
        </th>
        <tbody>
          {sampData?.map((item: any, index: number) => {
            return (
              <tr className="grid w-full grid-cols-4  border-b border-b-[#f3f3f3] py-5 px-10 items-center">
                <td className="flex items-center space-x-3  ">
                  <img
                    src={userpro}
                    alt="userpro"
                    className="w-5 h-5 rounded-full "
                  />
                  <div className="flex flex-col">
                    <p className="text-primary text-base font-normal">
                      {item?.name}
                    </p>
                    <p className=" text-[#999] text-sm ">ref: {item?.email}</p>
                  </div>
                </td>
                <td className="text-primary text-base  ">{item?.fee}</td>
                <td className="text-primary text-base  ">867</td>
                <td className="flex justify-end items-center  "><More /></td>
               
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* end of table sessions */}
    </div>
  );
};

export default UsersTable;

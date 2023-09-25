import { SearchIcon } from "../../assets";
import Filter from "../dropdown/filter-dropdown";
import Status from "../dropdown/status-drop";
import Support from "../dropdown/support-dropdown";
import userpro from "../../assets/png/user-pro.png";
const sampData = [
  {
   ref:"121212121221",
   fee:"$50.00",
   date:"31st May 2023",
   supportType:"One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: true
  },
  {
   ref:"121212121221",
   fee:"$50.00",
   date:"31st May 2023",
   supportType:"One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: true
  },
  {
   ref:"121212121221",
   fee:"$50.00",
   date:"31st May 2023",
   supportType:"One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: false
  },
  {
   ref:"121212121221",
   fee:"$50.00",
   date:"31st May 2023",
   supportType:"One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: false
  },
  {
   ref:"121212121221",
   fee:"$50.00",
   date:"31st May 2023",
   supportType:"One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: false
  },
  {
   ref:"121212121221",
   fee:"$50.00",
   date:"31st May 2023",
   supportType:"One Time Support",
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: true
  },
]
const TransactionsTable = () => {
    return (
      <div className="w-full bg-white flex flex-col py-11 px-4 2xl:px-8">
        <div className="flex justify-between items-center">
          <p className="text-secondary text-xl font-extrabold ">Transactions</p>
          <div className="flex items-center w-1/2 space-x-6">
            <div className="flex py-2 px-4 gap-2 flex-grow items-center border bg-[#eee] border-[#dddddd] rounded-[4px]">
              <SearchIcon />
              <input
                type="text"
                placeholder="search"
                className="bg-transparent outline-none border-none flex-grow "
              />
            </div>
            <Filter />
          </div>
        </div>
        {/* Table sessions */}
        <table className="min-w-max w-full table-auto border-collapse block md:table overflow-hidden lg:overflow-scroll mt-10">
          <th className="grid w-full grid-cols-6  border-b border-b-[#f3f3f3] py-5 ">
            <td className="text-neutral text-sm text-start ">
              Name & Ref Number
            </td>
            <td className="text-neutral text-sm text-start ">Amount paid</td>
            <td className="text-neutral text-sm text-start ">Receipient</td>
            <td className="text-neutral text-sm text-start ">Date</td>
            <td className="text-neutral text-sm text-start ">
              <Support />
            </td>
            <td className="text-neutral text-sm text-start ">
              <Status />
            </td>
          </th>
          <tbody>
            {sampData?.map((item: any, index: number) => {
              return (
                <tr className="grid w-full grid-cols-6  border-b border-b-[#f3f3f3] py-5 gap-x-4 items-center">
                      <td className="flex items-center space-x-3  ">
                          <img src={userpro} alt="userpro" className="w-5 h-5 rounded-full " />
                          <div className="flex flex-col">
                              <p className="text-primary text-base font-normal">
                                  {item?.name}
                              </p>
                              <p className=" text-[#999] text-sm ">
                                ref:  {item?.ref}
                              </p>
                          </div>
                  </td>
                  <td className="text-primary text-base  ">{item?.fee}</td>
                  <td className="text-primary text-base  ">{item.email}</td>
                  <td className="text-primary text-base  ">{item.date}</td>
                  <td className="text-primary text-base  ">{item.supportType}</td>
                  <td className="flex w-full justify-between items-center ">
                    <p
                      className={
                        item?.isSuccessful
                          ? " text-primarygreen bg-lightgreen px-3 py-1 text-xs "
                          : "text-primaryred bg-lightred px-3 py-1 text-xs"
                      }
                    >
                      {item?.isSuccessful ? "Successful" : "Failed"}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* end of table sessions */}
      </div>
    );
}

export default TransactionsTable

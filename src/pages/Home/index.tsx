
import DashboardLayout from '../../layouts/DashboardLayout'
import { PlusIcon } from '../../assets'

const sampData = [
  {
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: true
  },
  {
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: true
  },
  {
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: false
  },
  {
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: false
  },
  {
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: false
  },
  {
    name: "Alex Daniel",
    email: "alex@gmail.com",
    role: "Super Admin",
    isSuccessful: true
  },
]
const Home = () => {
  return (
    <DashboardLayout current={1}>
      <div className="w-full bg-white flex flex-col py-11 ">
        <div className="flex justify-between items-center px-10  ">
          <p className="text-xl text-rpmary font-medium">
            List of admins
          </p>
          <button className='bg-warning flex items-center justify-center space-x-2 py-[14px] px-5 rounded-[4px] '>
            <PlusIcon />
            <span className='text-secondary text-sm font-bold'>Add new Admin</span>
          </button>
        </div>
        <table className="min-w-max w-full table-auto border-collapse block md:table overflow-hidden lg:overflow-scroll">
          <th className='grid w-full grid-cols-4  border-b border-b-[#f3f3f3] py-5 px-10'>
            <td className='text-neutral text-sm text-start '>
              Name
          </td>
            <td className='text-neutral text-sm text-start '>
              Email
          </td>
            <td className='text-neutral text-sm text-start '>
              Role
          </td>
            <td className='text-neutral text-sm text-start '>
              Status
          </td>
          </th>
          <tbody>
            {
              sampData?.map((item: any, index: number) => {
                return (
                  <tr className="grid w-full grid-cols-4  border-b border-b-[#f3f3f3] py-5 px-10">
                    <td className="text-primary text-base  ">{item?.name}</td>
                    <td className="text-primary text-base  ">{item?.email}</td>
                    <td className="text-primary text-base  ">{item.role}</td>
                    <td className="flex w-full justify-between items-center ">
                      <p
                        className={
                          item?.isSuccessful
                            ? " text-primarygreen bg-lightgreen px-3 py-1 text-xs "
                            : "text-primaryred bg-lightred px-3 py-1 text-xs"
                        }
                      >
                        {item?.isSuccessful? 'Successful' : 'Failed'}
                      </p>
                    </td>
                  </tr>
                );
              })
            }
</tbody>
        </table>

      </div>
    </DashboardLayout>
  )
}

export default Home

import DashboardLayout from "../../layouts/DashboardLayout";

const Profile = ({ children }: any) => {
  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="px-4 py-10 mx-auto mt-8">
          <div className="w-full px-4">
            <h4 className="font-mono">Your Profile Page</h4>
          </div>

          <div className="w-full py-16 px-8">
            <a
              href="/"
              className="py-1 px-3 min-w-[4rem] bg-red-400 text-white text-2xl cursor-pointer hover:bg-red-600 rounded-md"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
      {children}
    </DashboardLayout>
  );
};

export default Profile;

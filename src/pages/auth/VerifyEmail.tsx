import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { AppDispatch } from "../../app/store";
import AuthLayout from "../../layouts/AuthLayout";
import { verifyUserEmail } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const VerifyEmail = () => {
  const authUser = useAppSelector((state) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const loading = authUser.loading;
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser.verifiedStatus) {
      toast.success("Account Verified!");
      navigate("/login", { replace: true });
    }
  }, [authUser.verifiedStatus]);

  const [searchParams] = useSearchParams();
  const verifyToken = searchParams.get("token");

  const handleVerifyBTN = () => {
    dispatch(verifyUserEmail(`token=${verifyToken}`));
  };

  return (
    <AuthLayout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Verify your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <button
              type="button"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleVerifyBTN}
            >
              Verify
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already verified?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login Here
            </a>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;

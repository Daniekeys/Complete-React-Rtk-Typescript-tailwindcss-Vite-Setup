import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { AppDispatch } from "../../app/store";
import { Button, SocialSignIn } from "../../components/Button";
import { InputField } from "../../components/Input";
import { registerUser, socialRegister } from "../../features/auth/authSlice";
import AuthLayout from "../../layouts/AuthLayout";


const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const authUser = useAppSelector((state) => state.auth);
  const loading = authUser.loading;
  const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [disabled, setDisabled] = useState(false);
  const [custom, setCustom] = useState(false);
  const [allInputs, setAllInputs] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  useEffect(() => {
    if (authUser.token.access) {
      toast.success("Welcome onboard!");
      navigate("/");
    }
  }, [authUser.token]);

  const handleFormChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllInputs({ ...allInputs, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    if (!allInputs.password.match(passwordValidator)) {
      toast.error(
        "Password must be Alphanumeric and atleast 8 character long with upper and lower case"
      );
    } else {
      dispatch(registerUser(allInputs));
    }

    setDisabled(false);
  };



  const toggleCustom = () => {
    setCustom(true);
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
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            {!custom ? (
              <>
             

              

                <hr className="w-full h-px my-8 bg-text-gray-900 border dark:bg-neutral-400" />

                {/* <button type="button" onClick={toggleCustom}>Login with Email</button> */}
                <Button
                  name="Sign up with Email"
                  type="button"
                  onClick={toggleCustom}
                />
              </>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <InputField
                      id="firstname"
                      name="firstname"
                      type="text"
                      onChange={handleFormChanger}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <InputField
                      id="lastname"
                      name="lastname"
                      type="text"
                      onChange={handleFormChanger}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <InputField
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={handleFormChanger}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <InputField
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleFormChanger}
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <InputField
                      onChange={handleFormChanger}
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Button
                    loading={loading}
                    name="Sign up"
                    altText="Sign up...."
                    type="submit"
                    disabled={disabled}
                  />
                </div>
              </>
            )}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a Member?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;

import { toast } from "react-hot-toast";

export const getSimplifiedError = (error: object | any) => {
  if (!error.response) {
    toast.error(
      "Something went wrong, check your internet and please try again"
    );
    return "Something went wrong, check your internet and please try again";
  }
  const errorObject = error?.response?.data;
  if (error.response?.status === 500) {
    toast.error("Sorry an unexpected error occurred.");
    return "Sorry an unexpected error occurred.";
  }
  if (error.response?.status === 400) {
    if (errorObject?.message === "Email already taken") {
      toast.error("Phone or Email already taken");
    } else {
      toast.error("Oops something went wrong!");
    }
  }
  if (error.response.status === 404) {
    toast.error(errorObject?.message ?? "Resource Not Found!");
    // console.error(error?.response?.error);
    return errorObject?.message;
  } else if (error?.response?.status === 401) {
    toast.error(errorObject?.message); //log here and perform action below
    if (errorObject?.message === "Please authenticate") {
      setTimeout(() => {
        window.location.replace("/login");
      }, 1000);
    }
    if (errorObject?.message === "Forbidden: Not Verified or Not Permitted") {
      setTimeout(() => {
        window.location.replace("/login");
      }, 1000);
    }
    return "Token has expired, please log in";
  } else {
    //Check for possible phone number unique issues
    return "Something went wrong";
  }
};

import { toast } from "react-hot-toast";
import { getStorageValue } from "./localStorage";

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




export function convertDateFormat(dateString: any) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
}
export function convertMonthDayFormat(dateString: any) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "Julu",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];

  return `${day}-${month}`;
}

export function isPasswordValid(password: string): boolean {
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return PASSWORD_REGEX.test(password);
}
export function hasLowerCaseLetter(password: string): boolean {
  const PASSWORD_REGEX = /[a-z]+/;
  return PASSWORD_REGEX.test(password);
}
export function hasUpperCaseLetter(password: string): boolean {
  const PASSWORD_REGEX = /[A-Z]+/;
  return PASSWORD_REGEX.test(password);
}
export function hasNumber(password: string): boolean {
  const PASSWORD_REGEX = /\d+/;
  return PASSWORD_REGEX.test(password);
}
export function hasLengthEight(password: string): boolean {
  const PASSWORD_REGEX = /[a-zA-Z\d]{8,}$/;
  return PASSWORD_REGEX.test(password);
}

export function isEmailValid(value: string): boolean {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  );
}

export function convertTimeStamp(timestamp: any) {
  const firebaseTime = new Date(
    timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000
  );
  const date = firebaseTime.toDateString();
  // const atTime = firebaseTime.toLocaleTimeString();
  return date;
}

export const handleInviteRedirect = (timer?: number) => {
  const inviteUrl = getStorageValue("inviteUrl");
  if (inviteUrl) {
    if (timer) {
      window.setTimeout(() => {
        window.location.replace(inviteUrl);
      }, timer);
    } else {
      window.location.replace(inviteUrl);
    }
  }
};

export const generateCode = () => {
  // create an array of possible characters
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // create an empty string to store the result
  let result = "";

  // loop 8 times
  for (let i = 0; i < 8; i++) {
    // pick a random index from the array
    let index = Math.floor(Math.random() * chars.length);
    // append the character at that index to the result
    result += chars[index];
  }

  // print the result

  return result;
};

export const filterByState = (array: any, state: string) => {
  return array?.filter((obj: any) => obj.state === state);
};

export const capitalizeWords = (words: string) => {
  return words?.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
};
export function convertDate(dateString: string | number | Date) {
  let date = new Date(dateString);
  return date.getTime();
}
export function convertDateToNumeric(dateString: any) {
  const date = new Date(dateString);
  const numericRepresentation = date.getTime();
  return numericRepresentation;
}

export function convertTimeToAMPM(time: any) {
  // Split the time into hours and minutes
  let timeArray = time.split(":");
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);

  // Determine if it's AM or PM
  var meridiem = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // "0" should be "12" for 12-hour format

  // Pad the hours and minutes with leading zeros if necessary
  let finalHour = hours < 10 ? "0" + hours : hours;
  let finalMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Return the formatted time
  return finalHour + ":" + finalMinutes + " " + meridiem;
}

export function formatDate(dateString: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Create a new Date object from the provided string
  const date = new Date(dateString);

  // Extract the day, month, and year from the Date object
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Format the date string in the desired format
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

export function convertDateTime(dateTimeStr: string) {
  const date = new Date(dateTimeStr);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const ampm = hour >= 12 ? "pm" : "am";
  const hour12 = hour % 12 || 12;
  const timeZone = "WAT";

  const formattedDate = `${dayOfWeek}. ${day} ${month} ${year}`;
  const formattedTime = `${hour12}:${minute
    .toString()
    .padStart(2, "0")}${ampm} ${timeZone}`;
  const realDate = {
    date: formattedDate,
    time: formattedTime,
  };
  return realDate;
}

function isPowerOf2(number: number) {
  // If the number is 0, it is not a power of 2
  if (number === 0) {
    return false;
  }

  // Check if the number is divisible by 2 without a remainder
  while (number % 2 === 0) {
    number = number >> 1;
  }

  // If the number is 1, it is a power of 2
  if (number === 1) {
    return true;
  }

  // Otherwise, the number is not a power of 2
  return false;
}

export function closestPowerOf2(number: number) {
  // Find the next power of 2 greater than or equal to the number
  var nextPowerOf2 = Math.pow(2, Math.ceil(Math.log2(number)));

  // If the number is a power of 2, return the number
  if (isPowerOf2(number)) {
    return number;
  }

  // Otherwise, return the next power of 2
  return nextPowerOf2;
}

export function convertDateToFormat(dateString: any) {
  const date = new Date(dateString);
  const milliseconds = date.getTime();

  return milliseconds.toString();
}

// Certainly! Here's a JavaScript function that converts a date string in the format "YYYY-MM-DD" to the desired format "1681347521180":

// javascript
// Copy code
// function convertDateToFormat(dateString) {
//   const date = new Date(dateString);
//   const milliseconds = date.getTime();

//   return milliseconds.toString();
// }

// Example usage
// const inputDate = '2023-07-24';
// const convertedFormat = convertDateToFormat(inputDate);
// console.log(convertedFormat); // Output: "1681347521180"

export function sortByUpdatedAt(array: any) {
  let arrayToSort = [...array];

  arrayToSort.sort(function (a: any, b: any) {
    let dateA: any = new Date(a.updatedAt).getTime();
    let dateB: any = new Date(b.updatedAt).getTime();
    return dateB - dateA; // Sort in descending order
  });
  return array;
}

export function reverseArray(arr: any) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array.");
  }

  if (arr.length < 2) {
    return arr; // No need to reverse a single item or empty array
  }

  const reversedArray = [...arr]; // Create a shallow copy of the original array

  const firstItem = reversedArray.shift(); // Remove the first item and store it
  const lastItem = reversedArray.pop(); // Remove the last item and store it

  reversedArray.unshift(lastItem); // Add the last item to the beginning
  reversedArray.push(firstItem); // Add the first item to the end

  return reversedArray;
}

export const sortByDateField = <T = any>(arr: T[], options: any): T[] => {
  const { field = "", order = "desc" } = options;

  if (!field) return arr;

  const arrayToSort = [...arr];

  arrayToSort.sort((a: any, b: any) => {
    const dateA = new Date(a[field]).getTime();
    const dateB = new Date(b[field]).getTime();

    return order === "asc" ? dateA - dateB : dateB - dateA;
  });

  return arrayToSort;
};

export function getRandomNumber() {
  // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();

  // Scale the decimal number to be between 1 and 100 (both inclusive)
  const scaledNumber = Math.floor(randomNumber * 100) + 1;

  return scaledNumber;
}
export function getRandomIndex(number: any) {
  // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();

  // Scale the decimal number to be between 1 and 100 (both inclusive)
  const scaledNumber = Math.floor(randomNumber * number);

  return scaledNumber;
}

export function convertDateFormatInput(inputDate: any) {
  // Parse the input date string
  const dateObj = new Date(inputDate);

  // Get the individual date components
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  // Combine the components into the desired format
  const outputDate = `${year}-${month}-${day}T${hours}:${minutes}`;

  return outputDate;
}

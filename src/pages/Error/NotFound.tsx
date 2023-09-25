import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center content-center flex-wrap">
        <p className="font-sans text-red-400 error-text">404</p>
      </div>

      <div className="absolute w-screen bottom-0 mb-6 text-red-400 text-center font-sans text-xl">
        <span className="opacity-50">Take me back to </span>
        <a className="border-b" href="/">
          Home
        </a>
      </div>
    </>
  );
};

export default NotFound;

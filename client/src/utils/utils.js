import { toast } from "react-toastify";

const handleSuccess = (msg) => {
  toast.success(msg, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
  });
};

const handleError = (msg) => {
  toast.error(msg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  });
};

export { handleSuccess, handleError };

import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const notify_success = (success) => {
toast.success(`Success! ${success}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})}

export const notify_error = (error) => {
toast.error(`error ${error}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })}
import { useContext } from "react";
import { NotificationContext } from "./index";

const useNotify = () => useContext(NotificationContext);

export default useNotify;

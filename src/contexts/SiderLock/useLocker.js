import { useContext } from "react";
import { siderLock } from ".";

const useLocker = () => useContext(siderLock);
export default useLocker;

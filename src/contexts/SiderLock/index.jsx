import { createContext, useState } from "react";

export const siderLock = createContext();

const SiderLocker = ({ children }) => {
  const [lock, setLock] = useState(false);
  const setLocker = () => {
    setLock(!lock);
  };

  return (
    <siderLock.Provider value={{ lock, setLocker }}>
      {children}
    </siderLock.Provider>
  );
};

export default SiderLocker;

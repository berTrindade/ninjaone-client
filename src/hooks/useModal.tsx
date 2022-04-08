import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const ModalProvider: React.FC = ({ children }) => {

  const [state, setState] = useState({ visible: false });
  
  const openModal = (payload: React.SetStateAction<{ visible: boolean; }>) => setState({ ...payload, visible: true });
  const closeModal = () => setState({ visible: false });

  return (
    <ModalContext.Provider value={{ state,  openModal, closeModal }}>
        {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { useModal }

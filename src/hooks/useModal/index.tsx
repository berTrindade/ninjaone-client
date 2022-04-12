import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const ModalProvider: React.FC = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
        {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {

  const context = useContext(ModalContext);

  if (!context) throw new Error("useModal must be used within ModalProvider");
  
  return context;
}

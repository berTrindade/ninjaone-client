import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import { Modal } from './components/Modal/index';
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export function App() {

  const [isNewDeviceModalOpen, setIsNewDeviceModalOpen] = useState(false);

  function handleOpenNewDeviceModal() {
      setIsNewDeviceModalOpen(true);
  }

  function handleCloseNewDeviceModal() {
      setIsNewDeviceModalOpen(false);
  }

  return (
    <>
      <Header openNewDeviceModal={handleOpenNewDeviceModal} />

      <Modal 
        isOpen={isNewDeviceModalOpen}
        onRequestClose={handleCloseNewDeviceModal}
      />

      <Dashboard />
      <GlobalStyle />
    </>
  )
}



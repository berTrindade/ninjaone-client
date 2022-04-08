import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import { Modal } from './components/Modal/index';
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export function App() {

  const [isNewDeviceModalOpen, setIsNewDeviceModalOpen] = useState(false);

  const handleOpenNewDeviceModal = () => setIsNewDeviceModalOpen(true);
  const handleCloseNewDeviceModal = () => setIsNewDeviceModalOpen(false);

  return (
    <>
      <Header openNewDeviceModal={handleOpenNewDeviceModal} />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}



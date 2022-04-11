import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import { GlobalStyle } from "./styles/global";

import ReactModal from 'react-modal';
import { Modal } from './components/Modal';

ReactModal.setAppElement('#root');

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Modal />
      <GlobalStyle />
    </>
  )
}



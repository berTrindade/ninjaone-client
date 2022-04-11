import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { DeviceProvider } from './hooks/useDevices';
import { ModalProvider } from './hooks/useModal';
import { FilterProvider } from './hooks/useFilters';

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <ModalProvider>
        <DeviceProvider>
            <App />
        </DeviceProvider>
      </ModalProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

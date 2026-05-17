import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import SocketContextComponent
from './components/hooks/socket-reducers/Component';

import AppRouter from './router';

createRoot(document.getElementById('root')!).render(

    <StrictMode>

        <SocketContextComponent>

            <AppRouter />

        </SocketContextComponent>

    </StrictMode>
);
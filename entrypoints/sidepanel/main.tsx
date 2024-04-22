import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {TranslatorAppWrapper} from "@/shared/components/App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <TranslatorAppWrapper>
        <App></App>
    </TranslatorAppWrapper>
);
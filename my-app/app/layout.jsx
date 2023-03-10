'use client';
import { SessionProvider } from 'next-auth/react';
import App from './components/App';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <SessionProvider>
            <App children={children}></App>
        </SessionProvider>
    );
}

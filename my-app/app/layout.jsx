'use client';
import { SessionProvider } from 'next-auth/react';
import App from './components/App';
import './globals.css';
import { RecoilRoot } from 'recoil';
export default function RootLayout({ children, session }) {
    return (
        <SessionProvider session={session}>
            <RecoilRoot>
                <App children={children}></App>
            </RecoilRoot>
        </SessionProvider>
    );
}

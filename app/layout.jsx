import React from 'react'
import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext'
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'Property Pulse | Find The Perfect Rental',
    description: 'Find Your Dream Rental Property',
    keywords: 'rental, find rentals, find properties',
}

const MainLayout = ({ children }) => {
    return (
        <GlobalProvider>
            <AuthProvider>
                <html lang='en'>
                    <body>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                        <ToastContainer />
                    </body>

                </html>
            </AuthProvider>
        </GlobalProvider>
    )
}

export default MainLayout
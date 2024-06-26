import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReembolsoSalud",
  description: "Reembolsamos gastos de salud de manera ágil y segura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        
        <Navbar/>

        <Header/>

        {children}

        <Footer/>
        
      </body>
    </html>
  );
}
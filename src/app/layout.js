import './globals.css';
import { NavBar } from '../components';



export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

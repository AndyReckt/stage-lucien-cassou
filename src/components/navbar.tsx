import Link from 'next/link';
import '@/styles/navbar.css';

import { Epilogue } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"] })

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className={epilogue.className + " name uppercase"}>Lucien Cassou</h1>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

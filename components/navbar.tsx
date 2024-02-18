"use client";

import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useMemo } from "react";

interface navbarProps {
    children: React.ReactNode;
}

const navbar: React.FC<navbarProps> = ({
   children
}) => {
    const pathName = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Home',
            active: pathName,
            href: '/',
        },
        {
            label: 'About',
            active: pathName === '/about',
            href: '/about',
        }
    ], []);
    return (
        <div>
            {children}
        </div>

    );
}

export default navbar;
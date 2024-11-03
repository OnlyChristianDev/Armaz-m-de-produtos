import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const router = useRouter();
    const pathname = usePathname();

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Contato", path: "/contatos" },
        { name: "Sobre Nós", path: "/sobreNos" },
        { name: "Vender", path: "/produtos" }
    ];

    const isActive = (path) => pathname === path;

    return (
        <header className={`w-full flex items-center justify-center h-14 fixed top-0 left-0 right-0 z-50 ${scrollY > 1 ? "bg-white/30 border-white backdrop-blur-md" : "bg-transparent"}`}>
            <ul className="flex gap-6">
            {!isActive('/') && (
                    <li onClick={() => router.push('/')} className="cursor-pointer hover:text-blue-600 hover:scale-110 transition-transform duration-300 ">
                        Início
                    </li>
                )}

                {links.map((link) => (
                    !isActive(link.path) && ( 
                        <li key={link.path} onClick={() => router.push(link.path)} className="cursor-pointer hover:text-blue-600 hover:scale-110 transition-transform duration-300 ">
                            {link.name}
                        </li>
                    )
                ))}
            </ul>
        </header>
    );
}

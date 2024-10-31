import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../images/Logo_para_Bazar_moderno-removebg-preview.png";

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
            <Image src={Logo} width={60} height={60} alt="logo da loja" className="absolute left-2 cursor-pointer" />
            <ul className="flex gap-6">
            {!isActive('/') && (
                    <li onClick={() => router.push('/')} className="cursor-pointer">
                        Início
                    </li>
                )}

                {links.map((link) => (
                    !isActive(link.path) && ( 
                        <li key={link.path} onClick={() => router.push(link.path)} className="cursor-pointer">
                            {link.name}
                        </li>
                    )
                ))}
            </ul>
        </header>
    );
}

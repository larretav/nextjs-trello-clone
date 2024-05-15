import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import NextLink from "next/link";

import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { FaTrello } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Logo } from "./Logo";

export const Footer = () => {
	return (
		<footer className="h-[4rem]  absolute bottom-0 left-0 bg-transparent">
			<NavbarContent className="w-fit hidden md:flex" justify="start">
				<NavbarBrand as="li" className="gap-3 ">
					<Logo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="w-full"
				justify="end"
			>
				<NavbarItem>
					<Link color="foreground" size="sm" href="/privacy-policy">Políitica de Privacidad</Link>
				</NavbarItem>

				<NavbarItem>
					<Link color="foreground" size="sm" href="/service-terms">Términos de servicio</Link>
				</NavbarItem>
			</NavbarContent>
		</footer>
	);
};

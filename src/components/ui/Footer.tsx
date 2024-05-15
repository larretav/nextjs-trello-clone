import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	useNavbar
} from "@nextui-org/navbar";

import NextLink from "next/link";

import { Link } from "@nextui-org/link";
import { Logo } from "./Logo";
import clsx from "clsx";

export const Footer = () => {
	return (
		<NextUINavbar as="footer" height="3rem" maxWidth="xl" position="sticky" isBlurred={false} className="bg-slate-100 dark:bg-slate-900 fixed bottom-0 left-0 top-auto">
			<NavbarContent className="w-fit hidden md:flex">
				<NavbarItem className="gap-3 max-w-fit ">
					<Logo />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end" className="w-full" >
				<NavbarItem>
					<Link color="foreground" size="sm" href="/privacy-policy">Políitica de Privacidad</Link>
				</NavbarItem>

				<NavbarItem>
					<Link color="foreground" size="sm" href="/service-terms">Términos de servicio</Link>
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};

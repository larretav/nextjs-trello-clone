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
		<footer className="w-screen h-[3rem] box-border flex items-center justify-center bg-slate-100 dark:bg-slate-900 fixed bottom-0 left-0">
			<div className="w-full px-6 flex flex-row justify-between items-center box-border">

				<div>
					<Logo />
				</div>

				<div className="w-full flex flex-row justify-between md:justify-end items-center gap-5">
					<Link color="foreground" size="sm" href="/privacy-policy">Políitica de Privacidad</Link>
					<Link color="foreground" size="sm" href="/service-terms">Términos de servicio</Link>
				</div>

			</div>
		</footer>
	)

};

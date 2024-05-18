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

export const Navbar = () => {


	return (
		<NextUINavbar height="3.5rem" maxWidth="full" position="sticky" isBlurred={false} className="bg-slate-100 dark:bg-slate-900 shadow-md">
			<NavbarContent className="basis-1/5 sm:basis-full hidden md:flex" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit ">
					<Logo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="start" className="flex md:hidden">
				<NavbarItem>
					<Button size="sm" variant="ghost" as={Link} href="/sign-in" className="bg-default-5 text-default-800">Login</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem className="hidden md:flex">
					<Button size="sm" variant="ghost" as={Link} href="/sign-in" className="bg-default-50 text-default-800">Login</Button>
				</NavbarItem> 

				<NavbarItem>
					<Button size="sm" as={Link} href="/sign-up" className="bg-default-900 text-default-50">Obtén Taskify gratis</Button>
				</NavbarItem>

				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};

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

export const Navbar = () => {


	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="bg-transparent">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit ">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<FaTrello className="fill-blue-500" size={30}/>
						<p className="font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Taskify</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};

import { Button, Logo, ThemeSwitch } from "@/components";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { FaPlus } from "react-icons/fa6";

export const Navbar = () => {

  const apparienceCenter = {
    elements:
    {
      rootBox:
      {
        display: "grid",
        placeItems: "center"
      }
    }
  }

  return (
    <NextUINavbar height="3.5rem" maxWidth="full" position="sticky" isBlurred={false} className="bg-slate-100 dark:bg-slate-900 shadow-md ">
      <NavbarContent justify="start">
        <NavbarBrand className="gap-3 max-w-fit hidden md:flex">
          <Logo />
        </NavbarBrand>

        <NavbarItem>
          <Button color="black" size="sm" className="hidden md:flex">
            Crear
          </Button>

          <Button isIconOnly color="black" size="md" className="flex md:hidden">
            <FaPlus />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3 items-center">

        <NavbarItem >
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            appearance={apparienceCenter}

          >
            Crear
          </OrganizationSwitcher>
        </NavbarItem>

        <NavbarItem >
          <UserButton
            afterSignOutUrl="/"
            appearance={apparienceCenter}

          />
        </NavbarItem>

        <NavbarItem className="grid place-items-center" >
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
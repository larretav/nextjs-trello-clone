import { Button, Chip, Link, cn } from "@nextui-org/react";
import { IoMedalOutline } from "react-icons/io5";
import localFont from "next/font/local";
import clsx from "clsx";

const headingFont = localFont({
  src: "../../../public/fonts/CalSans-SemiBold.woff2"
});

export default function MarketingPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Chip
        size="lg"
        variant="flat"
        color="warning"
        className="py-6 px-3 shadow-md uppercase bg-amber-100 text-amber-700"
        startContent={<IoMedalOutline size={25} />}
      >
        No. 1 Task Namagement
      </Chip>

      <h1 className={clsx(
        "mb-3 text-3xl md:text-6xl text-center text-neutral-800 dark:text-neutral-300",
        headingFont.className
      )}>Taskify ayuda a tu equipo a</h1>

      <div className={clsx(
        "w-fit px-4 p-2  text-3xl md:text-6xl text-center text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-xl",
        headingFont.className
      )

      }>
        avanzar
      </div>

      <div className="text-sm md:text-xl text-default-400 max-w-xs md:max-w-2xl text-center mx-auto">
        Colabora, administra proyectos y alcanza altos niveles de productividad. Desde rascacielos hasta tu hogar, la manera de trbajar de tu equipo es única - logralo todo con Taskify.
      </div>

      <Button size="lg" color="secondary" as={Link} href="/sign-up" className="mt-5  rounded-md bg-default-900 text-default-100">
        Obtén Taskify gratis
      </Button>

    </div>
  );
}
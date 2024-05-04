import { Chip } from "@nextui-org/react";
import { IoMedalOutline } from "react-icons/io5";

export default function MarketingPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Chip
        size="lg"
        variant="flat"
        color="warning"
        className="p-8 shadow-md uppercase bg-amber-100 text-amber-700"
        startContent={<IoMedalOutline size={25} />}
      >
        No. 1 Task Namagement
      </Chip>

      <h1 className="mb-3 text-3xl md:text-6xl text-center text-neutral-800 dark:text-neutral-300">Taskify ayuda a tu equipo a</h1>

      <div className="w-fit px-4 p-2 pb-4  text-3xl md:text-6xl text-center text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-md">
        avanzar.
      </div>

    </div>
  );
}
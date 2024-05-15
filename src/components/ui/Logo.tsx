

import NextLink from "next/link";
import { FaTrello } from "react-icons/fa6";

export const Logo = () => {
  return (
    <NextLink className="justify-start items-center gap-1 hidden md:flex" href="/">
      <FaTrello className="fill-blue-500" size={30} />
      <p className="font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Taskify</p>
    </NextLink>
  )
}

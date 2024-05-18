'use client';
import { Button as NextUIButton, extendVariants } from '@nextui-org/react'

export const Button = extendVariants(NextUIButton, {
  variants: {
    color: {
      black: "bg-black dark:bg-gray-50 text-default-50"
    },
    isDisabled: {
      true: "bg-default-400 text-default-100"
    }
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: "black",
    },
  ],
},
);
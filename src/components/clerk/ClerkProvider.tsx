'use client';

import { useTheme } from 'next-themes'
import React from 'react'
import { ClerkProvider as OriginalClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';


const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <OriginalClerkProvider appearance={{
      baseTheme: theme === "dark" ? dark : undefined
    }}>
      {children}
    </OriginalClerkProvider>
  )
}

export default ClerkProvider
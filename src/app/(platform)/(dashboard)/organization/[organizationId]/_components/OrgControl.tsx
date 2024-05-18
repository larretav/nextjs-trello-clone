'use client';
import { useOrganizationList } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import { useEffect } from 'react'

type Params = {
  organizationId: string
}

const OrgControl = () => {

  const params = useParams<Params>();
  const { setActive, ...rest } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organizationId as string
    })

  }, [setActive, params.organizationId])


  return null
}

export default OrgControl
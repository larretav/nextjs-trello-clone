
type Props = {
  params: {
    organizationId: string
  }
}

export default function OrganizationIdPage({ params }: Props) {

  return (
    <div>
      <h1>Organization {params?.organizationId}</h1>
    </div>
  );
}
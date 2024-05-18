import OrgControl from "./_components/OrgControl";

export default function OrganiaztionIdLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrgControl/>
      {children}
    </>
  );
}

export default function MarketingLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-full ">
			<main className="pt-40 pb-20">
				{children}
			</main>
		</div>
	);
}
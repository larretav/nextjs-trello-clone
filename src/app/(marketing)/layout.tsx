
export default function MarketingLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-full bg-slate-100 dark:bg-slate-950">
			<main className="pt-40 pb-20 bg-slate-100 dark:bg-slate-950">
				{children}
			</main>
		</div>
	);
}
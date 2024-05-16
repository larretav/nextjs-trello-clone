import { Footer, Navbar } from "@/components";

export default function MarketingLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full box-border ">
			<Navbar />
			<main className="pt-32 pb-32 box-border ">
				{children}
			</main>
			<Footer />
		</div>
	);
}
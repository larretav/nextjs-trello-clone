import { Footer, Navbar } from "@/components";

export default function MarketingLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-screen w-full relative">
			<Navbar />
			<main className="pt-40 pb-20">
				{children}
			</main>
			<Footer />
		</div>
	);
}
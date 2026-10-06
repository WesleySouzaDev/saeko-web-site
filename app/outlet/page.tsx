import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Saeko Street | Shorts",
	description: "Short clothes for men",
};

export default async function Main() {
	return (
		<section className="px-1.5 pt-0 w-full h-full">
			<div className="section">
				{" "}
				Aqui onde ficará os cards com as{" "}
				<span className="font-bold text-xl text-primary ">Promoções</span>.
			</div>
		</section>
	);
}

import Image from "next/image";

export default async function Home() {
	return (
		<section className="section flex items-start justify-center">
			<Image
				src="/main-banner.png"
				alt="Saeko Street"
				width={1500}
				height={500}
				className="object-cover w-full h-1/2"
			/>
		</section>
	);
}

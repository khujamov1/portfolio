import { Skeleton } from "../../components/skeleton/Skeleton";

export const Projects = () => {
	return (
		<section>
			<div className="max-w-[1240px] mx-auto min-[320px]:px-3 sm:px-5 lg:px-7">
				<h2 className="text-center font-bold mb-7 text-stone-500 text-5xl max-md:text-4xl">
					My <span className="text-blue-600">Projects</span>
				</h2>
				<ul className="flex flex-wrap gap-6 md:justify-between max-md:justify-center">
					<li>
						<Skeleton />
					</li>
					<li>
						<Skeleton />
					</li>
					<li>
						<Skeleton />
					</li>
				</ul>
			</div>
		</section>
	);
};

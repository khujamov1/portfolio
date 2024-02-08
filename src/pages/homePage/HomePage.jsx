import me from "../../assets/me.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HomePage = () => {
	return (
		<section className="mt-8">
			<div className="max-w-[1240px] mx-auto min-[320px]:px-3 sm:px-5 lg:px-7">
				<div className="flex items-center max-[1030px]:flex-col">
					<img
						src={me}
						alt="This is just any avatar"
						className="rounded-2xl max-lg:mx-auto object-fit-cover mb-5"
						width="500"
						height="700"
					/>

					<div className="w-full h-full fixed bg-slate-700 -top-1/2 -left-2/3 rotate-45 -z-10 max-[1030px]:-left-500px"></div>

					<div>
						<div className="ml-14 max-w-full max-[1030px]:text-center">
							<h1 className="text-5xl max-[600px]:text-4xl max-[480px]:text-3xl max-[416px]:text-2xl font-bold ml-6 text-stone-800 mb-6">
								<span className="block text-blue-800 before:">
									- I'm Elyor Khujamov
								</span>{" "}
								Frontend developer
							</h1>
							<p className="mb-6">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Aperiam nulla nemo non in
								dignissimos quo similique repellendus facilis
								repudiandae mollitia?
							</p>
							<Link
								to="/resume"
								className="inline-flex items-center border-2 gap-3 pl-3 rounded-full border-blue-800 hover:text-white hover:bg-slate-900 transition linear duration-300"
							>
								More about me{" "}
								<span className="bg-slate-900 p-3 rounded-full">
									{<FaArrowRight className="text-white" />}
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

import { Info } from "../../components/info/Info";
import { FaFileDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import CV from "../../assets/CV.pdf";

export const Resume = () => {
	return (
		<section className="mt-6">
			<div className="max-w-[1240px] mx-auto min-[320px]:px-3 sm:px-5 lg:px-7">
				<h2 className="text-zinc-600 text-5xl text-center font-bold max-md:text-4xl">
					About
					<span className="text-indigo-600"> ME</span>
				</h2>
				<div className="flex justify-between mt-7 max-md:flex-col">
					<div className="max-md:mb-5 max-md:mx-auto max-md:text-center">
						<h3 className="text-3xl font-bold mb-4">
							Personal Info
						</h3>
						<ul className="flex flex-col gap-4 mb-5">{<Info />}</ul>

						<a
							href={CV}
							download
							className="inline-flex items-center border-2 gap-3 pl-3 rounded-full border-blue-800 hover:text-white hover:bg-slate-900 transition linear duration-300"
						>
							DownLoad CV
							<span className="bg-slate-900 p-3 rounded-full">
								{<FaFileDownload className="text-white" />}
							</span>
						</a>
					</div>
					<div className="max-md:mx-auto max-md:text-center">
						<nav>
							<ul className="flex gap-7 items-center justify-center max-md:flex-wrap">
								<li>
									<NavLink
										to=""
										className={({ isActive }) =>
											isActive
												? "text-orange-500 border-b relative border-b-orange-500 flex gap-2 items-center py-1 max-md:py-3 max-md:right-2"
												: "flex gap-2 items-center border-b border-b-transparent py-3 hover:opacity-60 active:text-gray-300"
										}
									>
										Education
									</NavLink>
								</li>
								<li>
									<NavLink
										to="experience"
										className={({ isActive }) =>
											isActive
												? "text-orange-500 border-b relative border-b-orange-500 flex gap-2 items-center py-1 max-md:py-3 max-md:right-2"
												: "flex gap-2 items-center border-b border-b-transparent py-3 hover:opacity-60 active:text-gray-300"
										}
									>
										Experience
									</NavLink>
								</li>
								<li>
									<NavLink
										to="skills"
										className={({ isActive }) =>
											isActive
												? "text-orange-500 border-b relative border-b-orange-500 flex gap-2 items-center py-1 max-md:py-3 max-md:right-2"
												: "flex gap-2 items-center border-b border-b-transparent py-3 hover:opacity-60 active:text-gray-300"
										}
									>
										Skills
									</NavLink>
								</li>
								<li>
									<NavLink
										to="hobbies"
										className={({ isActive }) =>
											isActive
												? "text-orange-500 border-b relative border-b-orange-500 flex gap-2 items-center py-1 max-md:py-3 max-md:right-2"
												: "flex gap-2 items-center border-b border-b-transparent py-3 hover:opacity-60 active:text-gray-300"
										}
									>
										Hobbies
									</NavLink>
								</li>
							</ul>
						</nav>
						<div className="max-w-[400px] p-4">
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

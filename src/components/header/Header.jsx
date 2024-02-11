import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { links } from "../../constants/data";
import { useState } from "react";

export const Header = () => {
	const [menu, setMenu] = useState(false);

	const HandleButton = () => {
		setMenu(!menu);
	};

	return (
		<header className="bg-gray-900 mb-5">
			<div className="max-w-[1240px] mx-auto min-[320px]:px-3 sm:px-5 lg:px-7">
				<div className="py-4 flex items-center justify-between text-xl md:max-lg:py-7">
					<Link to="/">
						<strong className="text-white text-4xl max-md:text-3xl">
							Khujamov
						</strong>
					</Link>
					<button onClick={HandleButton}>
						{
							<IoMenu
								color="white"
								size={"30px"}
								className="md:hidden"
							/>
						}
					</button>
					<nav className="max-md:fixed">
						<div
							className={`md:static max-md:bg-gray-900 max-md:p-4 rounded-tl-lg rounded-bl-lg transition ${
								menu
									? "fixed right-0 top-[62px] "
									: "fixed right-full"
							} `}
						>
							<ul className="flex flex-col gap-x-14 text-gray-400 md:flex-row max-md:z-50">
								{/* <li className="border-b border-b-transparent py-3 hover:text-white hover:border-b-white active:text-gray-300 ">
								Home
							</li> */}
								{links.map(({ name, icon, path }, index) => {
									return (
										<li key={index} className="">
											<NavLink
												to={path}
												className={({ isActive }) =>
													isActive
														? "text-orange-500 border-b relative border-b-orange-500 flex gap-2 items-center py-1 max-md:py-3 max-md:right-2"
														: "flex gap-2 items-center border-b border-b-transparent py-3 hover:text-white hover:border-b-white active:text-gray-300"
												}
											>
												{icon}
												{name}
											</NavLink>
										</li>
									);
								})}
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

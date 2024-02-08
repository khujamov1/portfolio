import { FaArrowRight, FaEnvelopeOpen, FaPhoneSquareAlt } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandTelegram } from "react-icons/tb";
import { FiSend } from "react-icons/fi";

export const Contact = () => {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(evt);
		localStorage.setItem(
			"message",
			JSON.stringify({
				from: evt.target[0].value,
				email: evt.target[1].value,
				subject: evt.target[2].value,
				message: evt.target[3].value,
			})
		);
	};

	return (
		<section>
			<div className="max-w-[1240px] mx-auto min-[320px]:px-3 sm:px-5 lg:px-7">
				<h1 className="text-center text-5xl font-bold text-stone-600 mb-14 mt-7 max-md:text-4xl">
					Get In <span className="text-blue-900">Touch</span>
				</h1>
				<div className="flex gap-6 max-md:flex-col">
					<div className="max-w-[400px] max-md:mx-auto max-md:text-center">
						<h3 className="text-2xl font-bold text-stone-600 mb-5">
							Don't be Shy!
						</h3>

						<p className="font-semibold text-stone-600 mb-5">
							You can get in touch or type a message any time, I
							reconnect with you if I have free time, so don't be
							shy and connect with me
						</p>
						<div>
							<div className="flex flex-col gap-4 mb-6">
								<a
									href="mailto:elyorbekkhujamov7@gmail.com"
									className="flex items-center gap-4 max-md:mx-auto"
								>
									{
										<FaEnvelopeOpen
											size={40}
											color="orange"
										/>
									}
									<span className="flex flex-col">
										<strong className="text-gray-700">
											Mail me
										</strong>
										elyorbekkhujamov7@gmail.com
									</span>
								</a>
								<a
									href="tel:+998933251070"
									className="flex items-center gap-4 max-md:mx-auto"
								>
									{
										<FaPhoneSquareAlt
											size={40}
											color="green"
										/>
									}
									<span className="flex flex-col">
										<strong className="text-gray-700">
											Call me
										</strong>
										+998933251070
									</span>
								</a>
							</div>
							<ul className="flex gap-5 max-md:justify-center">
								<li>
									<a
										href=""
										className="inline-block p-4 bg-slate-900 rounded-full"
									>
										<LuInstagram color="white" />
									</a>
								</li>
								<li>
									<a
										href=""
										className="inline-block p-4 bg-slate-900 rounded-full"
									>
										<GrFacebookOption color="white" />
									</a>
								</li>
								<li>
									<a
										href="https://t.me/Khujamov_1"
										className="inline-block p-4 bg-slate-900 rounded-full"
									>
										<TbBrandTelegram color="white" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<form className="grow" onSubmit={handleSubmit}>
						<div className="flex gap-3 mb-6">
							<input
								type="text"
								className="bg-stone-200 px-5 py-3 w-1/4 rounded-xl placeholder:text-stone-500 grow"
								placeholder="Your name"
								required
							/>
							<input
								type="email"
								className="bg-stone-200 px-5 py-3 w-1/4 rounded-xl placeholder:text-stone-500 grow"
								placeholder="Your email"
								required
							/>
							<input
								type="text"
								className="bg-stone-200 px-5 py-3 w-1/4 rounded-xl placeholder:text-stone-500 grow"
								placeholder="Your subject"
								required
							/>
						</div>
						<textarea
							className="bg-stone-200 px-5 py-3 rounded-xl placeholder:text-stone-500 resize-none w-full h-2/4 mb-6"
							placeholder="Your message"
						></textarea>
						<button className="inline-flex justify-between items-center border-2 gap-3 pl-6 w-[120px] rounded-full border-blue-800 hover:text-white hover:bg-slate-900 transition linear duration-300 max-md:ml-auto">
							Send{" "}
							<span className="bg-slate-900 p-3 rounded-full">
								{<FiSend className="text-white" />}
							</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

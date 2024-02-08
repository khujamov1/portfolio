import { Link } from "react-router-dom";
import { info } from "../../constants/data";

// {
// 	id: 9,
// 	title: "Languages: ",
// 	description: "English, Uzbek",
// },

export const Info = () => {
	console.log(info);
	return (
		<>
			{info.map((item) => {
				return (
					<li key={item.id}>
						<strong>{item.title}</strong>
						<span>{item.description}</span>
					</li>
				);
			})}
			<li>
				<a
					href="https://maps.app.goo.gl/aAX6agQCptqQaBWo6"
					target="_blank"
				>
					<strong>Address: </strong>
					<span>Uzbekistan, Tashkent</span>
				</a>
			</li>
			<li>
				<a href="tel:998933251070">
					<strong>Phone: </strong>
					<span>+998933251070</span>
				</a>
			</li>
			<li>
				<a href="mailto:elyorbekkhujamov7@gmail.com">
					<strong>Email: </strong>
					<span>elyorbekkhujamov7@gmail.com</span>
				</a>
			</li>
		</>
	);
};

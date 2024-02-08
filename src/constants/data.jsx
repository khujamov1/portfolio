import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

export const links = [
	{
		id: 1,
		name: "Home",
		icon: <FaHome />,
		path: "/",
	},
	{
		id: 2,
		name: "Resume",
		icon: <FaUser />,
		path: "/resume",
	},
	{
		id: 3,
		name: "Projects",
		icon: <FaFolderOpen />,
		path: "/projects",
	},
	{
		id: 4,
		name: "Contact",
		icon: <FaEnvelopeOpen />,
		path: "/contact",
	},
];

export const info = [
	{
		id: 1,
		title: "First name: ",
		description: "Elyor",
	},
	{
		id: 2,
		title: "Last name: ",
		description: "Khujamov",
	},
	{
		id: 3,
		title: "Age: ",
		description: "21",
	},
	{
		id: 4,
		title: "Nationality: ",
		description: "Uzbek",
	},
	{
		id: 5,
		title: "Freelance: ",
		description: "Available",
	},
];

export const charts = [
	{
		chart: {
			height: 280,
			type: "radialBar",
		},
		series: [67],
		colors: ["#20E647"],
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				track: {
					background: "#333",
					startAngle: -135,
					endAngle: 135,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						fontSize: "30px",
						show: true,
					},
				},
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				type: "horizontal",
				gradientToColors: ["#87D4F9"],
				stops: [0, 100],
			},
		},
		stroke: {
			lineCap: "butt",
		},
		labels: ["Progress"],
	},
];

export const projects = [
	{
		id: 1,
	},
];

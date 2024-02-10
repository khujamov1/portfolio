import ReactApexChart from "react-apexcharts";
import { useState } from "react";

export const ApexChart = () => {
	const [state, setState] = useState({
		series: [80, 70, 50, 76, 78, 65, 50],
		options: {
			chart: {
				height: 350,
				width: 400,
				type: "radialBar",
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: "22px",
						},
						value: {
							fontSize: "16px",
						},
						total: {
							show: true,
							label: "Frontend",
						},
					},
				},
			},
			labels: [
				"Html5",
				"Css3",
				"Sass/Scss",
				"Bootstrap",
				"Tailwind",
				"JavaScript",
				"React.JS",
			],
		},
	});

	return (
		<div>
			<div id="chart">
				<ReactApexChart
					options={state.options}
					series={state.series}
					type="radialBar"
					height={350}
				/>
			</div>
			<div id="html-dist"></div>
		</div>
	);
};

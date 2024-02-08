import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Contact } from "./pages/contact/Contact";
import { HomePage } from "./pages/homePage/HomePage";
import { Projects } from "./pages/projects/Projects";
import { Education } from "./pages/resume/pages/education/Education";
import { Experience } from "./pages/resume/pages/experience/Experience";
import { Hobbies } from "./pages/resume/pages/hobbies/Hobbies";
import { Skills } from "./pages/resume/pages/skills/Skills";
import { Resume } from "./pages/resume/Resume";

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="projects" element={<Projects />} />
					<Route path="resume" element={<Resume />}>
						<Route path="" element={<Education />} />
						<Route path="experience" element={<Experience />} />
						<Route path="skills" element={<Skills />} />
						<Route path="hobbies" element={<Hobbies />} />
					</Route>
					<Route path="contact" element={<Contact />} />
				</Routes>
			</main>
		</>
	);
}

export default App;

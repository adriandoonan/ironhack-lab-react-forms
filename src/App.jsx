import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
	const [students, setStudents] = useState(studentsData);

	const handleSubmit = (event, newStudentData) => {
		event.preventDefault();

		if (
			students.some(
				(student) =>
					student.fullName === newStudentData.fullName ||
					student.email === newStudentData.email,
			)
		) {
			alert(
				`we already have a student with the same email address, are you sure ${newStudentData.fullName} is a new student?`,
			);
			throw new Error("duplicate student");
		}
		setStudents([...students, newStudentData]);
	};

	return (
		<div className="pt-20 App">
			<Navbar />

			{/* FORM */}
			<AddStudent onSubmit={handleSubmit} />
			{/* FORM END */}

			{/* TABLE/LIST HEADER */}
			<TableHeader />

			{/* STUDENT LIST */}
			{students?.map((student) => {
				return <StudentCard key={student.email} {...student} />;
			})}
		</div>
	);
}

export default App;

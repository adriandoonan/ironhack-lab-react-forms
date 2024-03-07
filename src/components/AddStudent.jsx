import { useState } from "react";

const AddStudent = ({ onSubmit }) => {
	const initialNewStudentDataState = {
		fullName: "",
		image: "",
		phone: 0,
		email: "",
		program: "",
		graduationYear: new Date().getFullYear(),
		graduated: false,
	};

	const [newStudentData, setNewStudentData] = useState(
		initialNewStudentDataState,
	);

	const handleInputChange = (event) => {
		const name = event.target.name;
		setNewStudentData({
			...newStudentData,
			[name]: event.target.value ?? event.target.checked,
		});
	};

	return (
		<form
			onSubmit={(event) => {
				try {
					onSubmit(event, newStudentData);
					setNewStudentData(initialNewStudentDataState);
				} catch (e) {
					console.info("someone tried to add a duplicate student");
				}
			}}
		>
			<span>Add a Student</span>
			<div>
				<label>
					Full Name
					<input
						name="fullName"
						type="text"
						placeholder="Full Name"
						value={newStudentData.fullName}
						required
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Profile Image
					<input
						name="image"
						type="url"
						placeholder="Profile Image"
						value={newStudentData.image}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Phone
					<input
						name="phone"
						type="tel"
						placeholder="Phone"
						value={newStudentData.phone}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Email
					<input
						name="email"
						type="email"
						placeholder="Email"
						value={newStudentData.email}
						required
						onChange={handleInputChange}
					/>
				</label>
			</div>

			<div>
				<label>
					Program
					<select
						name="program"
						required
						value={newStudentData.program}
						onChange={handleInputChange}
					>
						<option value="" disabled>
							-- None --
						</option>
						<option value="Web Dev">Web Dev</option>
						<option value="UXUI">UXUI</option>
						<option value="Data">Data</option>
					</select>
				</label>

				<label>
					Graduation Year
					<input
						name="graduationYear"
						type="number"
						placeholder="Graduation Year"
						minLength={4}
						maxLength={4}
						min={2023}
						max={2030}
						value={newStudentData.graduationYear}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Graduated
					<input
						name="graduated"
						type="checkbox"
						checked={newStudentData.graduated}
						onChange={handleInputChange}
					/>
				</label>

				<button type="submit">Add Student</button>
			</div>
		</form>
	);
};
export default AddStudent;

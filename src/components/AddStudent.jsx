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
						onChange={(e) =>
							setNewStudentData({ ...newStudentData, fullName: e.target.value })
						}
					/>
				</label>

				<label>
					Profile Image
					<input
						name="image"
						type="url"
						placeholder="Profile Image"
						value={newStudentData.image}
						onChange={(e) =>
							setNewStudentData({ ...newStudentData, image: e.target.value })
						}
					/>
				</label>

				<label>
					Phone
					<input
						name="phone"
						type="tel"
						placeholder="Phone"
						value={newStudentData.phone}
						onChange={(e) =>
							setNewStudentData({ ...newStudentData, phone: e.target.value })
						}
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
						onChange={(e) =>
							setNewStudentData({ ...newStudentData, email: e.target.value })
						}
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
						onChange={(e) =>
							setNewStudentData({ ...newStudentData, program: e.target.value })
						}
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
						onChange={(e) =>
							setNewStudentData({
								...newStudentData,
								graduationYear: e.target.valueAsNumber,
							})
						}
					/>
				</label>

				<label>
					Graduated
					<input
						name="graduated"
						type="checkbox"
						checked={newStudentData.graduated}
						onChange={(e) =>
							setNewStudentData({
								...newStudentData,
								graduated: e.target.checked,
							})
						}
					/>
				</label>

				<button type="submit">Add Student</button>
			</div>
		</form>
	);
};
export default AddStudent;

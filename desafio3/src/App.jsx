import { useState } from 'react';
import './App.css';

import dataColab from './database/dataColab';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { Buscador } from './components/Buscador';
import Alert from './components/Alert';

function App() {
	const [data, setData] = useState(dataColab);
	const [filteredData, setFilteredData] = useState([]);

	const [form, setForm] = useState({
		id: '',
		nombre: '',
		correo: '',
		edad: '',
		cargo: '',
		telefono: '',
	});

	const [alertMessage, setAlertMessage] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = data.length + 1;
		const { nombre, correo, edad, cargo, telefono } = event.target;

		if (
			!nombre.value ||
			!correo.value ||
			!edad.value ||
			!cargo.value ||
			!telefono.value
		) {
			setAlertMessage('Todos los campos son requeridos');
			
		} else {
			const formData = {
				id,
				nombre: nombre.value,
				correo: correo.value,
				edad: edad.value,
				cargo: cargo.value,
				telefono: telefono.value,
			};

			handleAddUser(formData);
			setAlertMessage('Usuario agregado exitosamente');
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleAddUser = (newUser) => {
		setData([...data, newUser]);
	};

	const handleDelete = (id) => {
		setData(data.filter((user) => user.id != id));
	};

	const handleSearch = (event) => {
		const value = event.target.value.toLowerCase();

		setFilteredData(
			data.filter((user) =>
				Object.values(user).some((userField) =>
					userField.toLowerCase().includes(value)
				)
			)
		);
	};

	return (
		<>
			<h1>Lista de Colaboradores</h1>

			<Formulario
				onSubmit={handleSubmit}
				onChange={handleChange}
			/>
			<Buscador onChange={handleSearch} />
			<Alert message={alertMessage} />
			<Listado
				users={data}
				onDelete={handleDelete}
				filteredData={filteredData}
			/>
			
		</>
	);
}

export default App;

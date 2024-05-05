import { useState, useEffect } from 'react';
import './App.css';
import dataColab from './datos/dataColab';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { Buscador } from './components/Buscador';
import Alert from './components/Alert';

function App() {
    const [originalData, setOriginalData] = useState(dataColab);
    const [filteredData, setFilteredData] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        setFilteredData(originalData);
    }, [originalData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = originalData.length + 1;
        const { nombre, correo, edad, cargo, telefono } = event.target;

        if (!nombre.value || !correo.value || !edad.value || !cargo.value || !telefono.value) {
            setAlertMessage('Todos los campos son requeridos ❌');
        } else {
            const formData = {
                id,
                nombre: nombre.value,
                correo: correo.value,
                edad: edad.value,
                cargo: cargo.value,
                telefono: telefono.value,
            };

            setOriginalData([...originalData, formData]);
            setAlertMessage('Usuario agregado exitosamente ✔️');
            event.target.reset(); 
        }
    };

    const handleDelete = (id) => {
        setOriginalData(originalData.filter((user) => user.id !== id));
    };

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
		console.log('Valor de búsqueda:', value);
        const filteredResult = originalData.filter((user) =>
            Object.values(user).some((userField) =>{
				if (typeof userField === 'string'){ 
                return userField.toLowerCase().includes(value);

			}
			return false;
	})
        );
        setFilteredData(filteredResult);
    };

    return (
        <>
            <h1>Lista de Colaboradores</h1>
            <Buscador onChange={handleSearch} />
            <div className="container">
                <div className="col-md-8">
                    <Listado users={filteredData} onDelete={handleDelete} />
                </div>
                <div className="container-2">
                    <Formulario onSubmit={handleSubmit} />
                    <Alert message={alertMessage} />
                </div>
            </div>
        </>
    );
}

export default App;


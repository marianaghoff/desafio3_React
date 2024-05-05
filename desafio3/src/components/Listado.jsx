import React from 'react';
import Table from 'react-bootstrap/Table';


export const Listado = ({ users, onDelete, filteredData }) => {
    const renderRows = (data) => {
        return data.map((user, index) => (
            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.correo}</td>
                <td>{user.edad}</td>
                <td>{user.cargo}</td>
                <td>{user.telefono}</td>
                <td>
                    <button onClick={() => confirm('¿Quieres eliminar a un colaborador?') && onDelete(user.id)}>
                        Eliminar
                    </button>
                </td>
            </tr>
        ));
    };

    const renderTableBody = () => {
        if (filteredData && filteredData.length) {
            return renderRows(filteredData);
        } else if (users && users.length) {
            return renderRows(users);
        } else {
            return (
                <tr>
                    <td colSpan={7}>
                        <h1>¡Faltan datos!</h1>
                    </td>
                </tr>
            );
        }
    };

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderTableBody()}
            </tbody>
        </Table>
    );
};

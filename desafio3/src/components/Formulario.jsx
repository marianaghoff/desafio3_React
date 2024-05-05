import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from './Alert';

export const Formulario = ({ onSubmit, onChange, alertMessage  }) => {
	return (
		<Form className="form" onSubmit={onSubmit}>
			
			<Form.Group
				className="mb-1"
				controlId="formBasicEmail"
			>
				<h2>Agregar colaborador</h2>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="nombre"
					type="text"
					placeholder="Nombre del colaborador"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="correo"
					type="email"
					placeholder="Email del colaborador"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="edad"
					type="number"
					min={1}
					max={100}
					placeholder="Edad del colaborador"
					
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="cargo"
					type="text"
					placeholder="Cargo del colaborador"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="telefono"
					type="tel"
					pattern="[0-9]*"
					placeholder="Teléfono del colaborador"
				/>
			</Form.Group>

			
			<Button className='btn'
				variant="primary"
				type="submit"
			>
				Agregar colaborador
			</Button>
			<Alert message={alertMessage} />
		</Form>
	);
};

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Buscador = ({ onChange }) => {
	return (
		<Form>
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					onChange={onChange}
					type="search"
					placeholder="Search..."
				/>
			</Form.Group>
		</Form>
	);
};

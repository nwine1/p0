import {Col, Row, Form} from "react-bootstrap"

function PlanOneDay(props) {

	return	<Form.Group as={Row} className="mb-3" controlId="day">
				<Form.Label column sm={2}>{props.day}: </Form.Label>
				<Col sm={2}>
				<Form.Select sm={1}>
					<option></option>
					<option>Long run</option>
					<option>Short run</option>
					<option>Cross train</option>
					<option>Rest day</option>
				</Form.Select>
				</Col>
			</Form.Group>
}
export default PlanOneDay

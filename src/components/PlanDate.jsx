import {Form,  Row, Col} from "react-bootstrap"

function PlanDate() {

	return <Row className="align-items-left">
				<Form.Group as={Row} id="raceDate">
					<Form.Label column sm={2}>Race Date:</Form.Label>
					<Col sm={2}>
						<Form.Control type="date" />
					</Col>
				</Form.Group>
		</Row>

}

export default PlanDate

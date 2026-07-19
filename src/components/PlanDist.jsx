import {Col, Row, Form} from "react-bootstrap"

function PlanDist(props) {
	console.log("planDist props:", props);
	const custom = (props.distance === "0");	

	return (<Form>
         <fieldset disabled={!custom}>
			<Row className="align-items-left">
				 <Form.Group as={Row} controlId="dist">
					 <Form.Label column sm={2}>Distance: </Form.Label>
					 <Col sm={2}>
						 <Form.Control placeholder={props.distance}/>
					 </Col>
					  <Col sm={4}>
					<Form.Group>
						<Form.Check inline 
							type="radio"
							label="miles" 
							name="unitGroup" 
							id="miRadio" 
							aria-label="miles"
							defaultChecked={props.unit === "mi"}
						/>
						<Form.Check inline 
							type="radio" 
							label="kilometers" 
							name="unitGroup" 
							id="klRadio"	
							aria-label="kilometers"
							defaultChecked={props.unit === "kl"}
						/>
					</Form.Group>
					</Col>
				 </Form.Group>
			</Row>
         </fieldset>
	</Form>)
}
export default PlanDist

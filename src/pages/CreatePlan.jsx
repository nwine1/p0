import {Container, Button, Form, Col, Row} from 'react-bootstrap'
import PlanDist from '../components/PlanDist'
import PlanDays from '../components/PlanDays'
import PlanDate from '../components/PlanDate'

/*
	props.distance
	props.unit

*/

function CreatePlan(props) {
	console.log("createPlan.props", props);
	return (<>
		<br/>
		<h3 align="left">Create new plan:</h3>
		<hr/>
		<h4 align="left">Race Information:</h4>
		<PlanDist distance={props.distance} unit={props.unit}/>
		<PlanDate/>
		<hr/>
		<h4 align="left">Day Planning:</h4>
		<PlanDays />
		<hr/>
		<Container>
			<Row>
				<Col>
					<Button variant="secondary">CANCEL</Button>
				</Col>
				<Col>
					<Button variant="success">CREATE</Button>
				</Col>
			</Row>
		</Container>
		<hr/>
	</>)
}

export default CreatePlan 

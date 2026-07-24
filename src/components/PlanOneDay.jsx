import {Col, Row, Form} from "react-bootstrap";
import { useContext } from "react";
import CreatePlanContext from "../context/CreateFormContext";

function PlanOneDay(props) {

	const [form, functions] = useContext(CreatePlanContext);
	const ix = props.ix;
	
	// TODO: get types data from supabase instead of hardcoding


	const dayOptions = {
		0: { "name": "Unselected" },
		1: { "name": "Rest Day" },
		2: { "name": "Cross-train" },
		3: { "name": "Short Run" },
		4: { "name": "Long Run" },
	};

	let typeSelections = Object.keys(dayOptions).map((type_id) => {
		return <option key={type_id} >{dayOptions[type_id].name}</option>;

	}); 

	console.log(form.dayArray);
	function updateDay(e) {
		let value = e.target.value;
		let tempDays = [... form.dayArray];

		tempDays[ix] = value;
		functions.setDayArray(tempDays);	
	}

	return	<Form.Group as={Row} className="mb-3" controlId="day">
				<Form.Label column sm={2} >{props.day}: </Form.Label>
				<Col sm={2}>
				<Form.Select sm={1} value={form.dayArray[ix]} onChange={(e)=>updateDay(e)}>
					{typeSelections}
				</Form.Select>
				</Col>
			</Form.Group>
}
export default PlanOneDay

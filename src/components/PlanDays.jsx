import { Form } from "react-bootstrap"
import PlanOneDay from './PlanOneDay'

function PlanDays() {
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	return <div style={{textAlign:'left'}}>
		<ul>
			{days.map((day) => {
					return <li key={day}>
							<PlanOneDay day={day}/>
						  </li>
				})
			}
			</ul>
		</div>
}
export default PlanDays

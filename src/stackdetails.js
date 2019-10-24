
import stackdetailtabs from './stack/tabs'

export default Ractive.extend({
	isolated: true,
	components: {
		stackdetailtabs: stackdetailtabs,
	},
	template: `
		<stackdetailtabs StackName="{{stack}}" />
	`,
})


import stackdetailtabs from './stack/tabs'

export default Ractive.extend({
	isolated: true,
	components: {
		stackdetailtabs: stackdetailtabs,
	},
	template: `
		{{#if show}}
			<stackdetailtabs StackName="{{stack}}" />
		{{/if}}
	`,
	data: function() {
		return {
			show: true,
		}
	},
	on: {
		init: function() {
			this.observe("stack", function(n) {
				console.log("stack changed to ", n)
				this.set({show: false,})

				var $this=this;
				setTimeout(function() {
					$this.set({show: true,})
				},50)

			})
		}
	}
})

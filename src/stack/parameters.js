
import tabledata from '../tabledata';

export default Ractive.extend({
	components: {
		tabledata: tabledata,
	},
	template: `
		<tabledata columns='{{columns}}' rows='{{rows}}' style='top: 10px;' />
	`,
	oninit: function() {
		var ractive=this;

		ractive.set('columns', [ '', 'Key', 'Value', 'Resolved Value'])
		ractive.set('rows', [] )

		var params = {
			StackName: this.get('StackName'),
			//TemplateStage: Original | Processed
		};
		cloudformation.describeStacks(params, function(err, data) {
			if (err)
				return alert('failed describing stack')

			console.log(data.Stacks[0])


			ractive.set('stack',data.Stacks[0])

			ractive.set('rows',
				data.Stacks[0].Parameters.map(function(p) {
					return [
						{ S: '' },
						{ S: p.ParameterKey },
						{ S: p.ParameterValue },
						{ S: '' },
					]
				})
			)

		});

	}
});

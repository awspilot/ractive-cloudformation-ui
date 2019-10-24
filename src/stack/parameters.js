
import tabledata from '../tabledata';

export default Ractive.extend({
	components: {
		tabledata: tabledata,
	},
	template: `
		<table style="border-collapse: collapse;border-spacing: 0; empty-cells: show; border: 1px solid #eaeded;width: 100%;">
		    <thead style="background-color: #fafafa;color: #000;text-align: left;vertical-align: bottom;border-bottom: 1px solid #eaeded">
		        <tr>
		            <th style="padding: 0.5em 1em;">Key</th>
		            <th style="padding: 0.5em 1em;">Value</th>
		            <th style="padding: 0.5em 1em;">Resolved value</th>
		        </tr>
		    </thead>
		    <tbody>
				{{#parameters}}
		        <tr>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.ParameterKey}}</td>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.ParameterValue}}</td>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;"></td>
		        </tr>
				{{/parameters}}

		    </tbody>
		</table>

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

			ractive.set('parameters', data.Stacks[0].Parameters )

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

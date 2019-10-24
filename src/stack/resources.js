

export default Ractive.extend({
	components: {

	},
	template: `
		<table style="border-collapse: collapse;border-spacing: 0; empty-cells: show; border: 1px solid #eaeded;width: 100%;">
		    <thead style="background-color: #fafafa;color: #000;text-align: left;vertical-align: bottom;border-bottom: 1px solid #eaeded">
		        <tr>
		            <th style="padding: 0.5em 1em;">Logical ID</th>
		            <th style="padding: 0.5em 1em;">Phisical ID</th>
		            <th style="padding: 0.5em 1em;">Type</th>
					<th style="padding: 0.5em 1em;">Status</th>
					<th style="padding: 0.5em 1em;">Status Reason</th>
		        </tr>
		    </thead>
		    <tbody>
				{{#resources}}
		        <tr>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.LogicalResourceId}}</td>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.PhysicalResourceId}}</td>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.ResourceType}}</td>
					<td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.ResourceStatus}}</td>
					<td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">&nbsp;</td>
		        </tr>
				{{/resources}}

		    </tbody>
		</table>

	`,
	oninit: function() {
		var ractive=this;

		var params = {
			StackName: this.get('StackName'),
		};
		cloudformation.listStackResources(params, function(err, data) {
			if (err)
				return alert('get stack resources failed')


			ractive.set('resources',data.StackResourceSummaries)

		});

	}
});

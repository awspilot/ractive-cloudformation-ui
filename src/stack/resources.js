
var Icons = require('../svgicons');

export default Ractive.extend({
	components: {
		'icon-refresh': Icons['icon-refresh'],
	},
	template: `



		<div style="background-color: #fafafa;border-bottom: 1px solid #eaeded;height: 50px;padding: 7px;">
			<div style="float:right;">
				<a class="btn btn-sm btn-default" on-click="@this.list_resources()"> <icon-refresh /> </a>
			</div>
			<div style="font-size: 20px;line-height: 40px;">Resources</div>

		</div>

		<table style="border-collapse: collapse;border-spacing: 0; empty-cells: show;width: 100%;">
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
	list_resources: function() {
		var ractive=this;
		ractive.set('resources',[])

		var params = {
			StackName: this.get('StackName'),
		};
		cloudformation.listStackResources(params, function(err, data) {
			if (err)
				return alert('get stack resources failed')


			ractive.set('resources',data.StackResourceSummaries)

		});
	},
	oninit: function() {
		var ractive=this;

		var params = {
			StackName: this.get('StackName'),
		};

		this.list_resources()
	}
});

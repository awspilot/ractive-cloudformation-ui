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

		ractive.set('columns', [ '', 'Logical ID', 'Phisical ID', 'Type', 'Drift Status', 'Status', 'Status Reason'])
		ractive.set('rows', [] )

		var params = {
			StackName: this.get('StackName'),
		};
		cloudformation.listStackResources(params, function(err, data) {
			if (err)
				return alert('get stack resources failed')

			console.log(data)


			ractive.set('rows',
				data.StackResourceSummaries.map(function(r) {
					return [
						{ S: '' },
						{ S: r.LogicalResourceId },
						{ S: r.PhysicalResourceId },
						{ S: r.ResourceType },
						{ S: r.DriftInformation.StackResourceDriftStatus },
						{ S: r.ResourceStatus },
						{ S: '' },
					]
				})
			)

		});

	}
});

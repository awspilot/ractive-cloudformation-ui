


export default Ractive.extend({
	components: {

	},
	template: `
		<div style="height: 50px;padding: 10px 10px 0px 0px;background-color: #fafafa;;">

			<div style="float: right;">
				<a class="btn btn-sm btn-default" on-click="refresh"><i class="icon zmdi zmdi-refresh"></i></a>
				<a class="btn btn-sm btn-default {{#if selection}}{{else}}disabled{{/if}}" on-click='delete'> Delete </a>
				<a class="btn btn-sm btn-default disabled" on-click='delete'> Update </a>
				<a class="btn btn-sm btn-warning" on-click="create-stack"> Create stack </a>
			</div>
		</div>

		<table style="border-collapse: collapse;border-spacing: 0; empty-cells: show; border: 1px solid #eaeded;width: 100%;">
		    <thead style="background-color: #fafafa;color: #000;text-align: left;vertical-align: bottom;border-bottom: 1px solid #eaeded">
		        <tr>
		            <th style="padding: 0.5em 1em;"></th>
		            <th style="padding: 0.5em 1em;">Stack name</th>
		            <th style="padding: 0.5em 1em;">Status</th>
		            <th style="padding: 0.5em 1em;">Created time</th>
					<th style="padding: 0.5em 1em;">Description</th>
		        </tr>
		    </thead>
		    <tbody>
				{{#stacks}}

		        <tr style="{{#if selection === .StackName }}border: 1px solid #4499ff;background-color: #f1faff;{{/if}}">
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;{{#if selection === .StackName }}border-bottom: 1px solid #4499ff;border-top: 1px solid #4499ff;{{/if}}"><input type="radio" name={{selection}} value='{{.StackName}}'></td>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;{{#if selection === .StackName }}border-bottom: 1px solid #4499ff;border-top: 1px solid #4499ff;{{/if}}"><a style="cursor: pointer;" on-click="gotostack">{{.StackName}}</a></td>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;{{#if selection === .StackName }}border-bottom: 1px solid #4499ff;border-top: 1px solid #4499ff;{{/if}}">{{.StackStatus}}</td>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;{{#if selection === .StackName }}border-bottom: 1px solid #4499ff;border-top: 1px solid #4499ff;{{/if}}">{{.CreationTimeFormatted}}</td>
		            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;{{#if selection === .StackName }}border-bottom: 1px solid #4499ff;border-top: 1px solid #4499ff;{{/if}}">-</td>
		        </tr>
				{{/stacks}}

		    </tbody>
		</table>
	`,
	stack_list: function(cb) {
		var ractive=this;

		cloudformation.listStacks({
			//  NextToken: 'STRING_VALUE',
			//  StackStatusFilter: [
			//    CREATE_IN_PROGRESS | CREATE_FAILED | CREATE_COMPLETE | ROLLBACK_IN_PROGRESS | ROLLBACK_FAILED | ROLLBACK_COMPLETE | DELETE_IN_PROGRESS | DELETE_FAILED | DELETE_COMPLETE | UPDATE_IN_PROGRESS | UPDATE_COMPLETE_CLEANUP_IN_PROGRESS | UPDATE_COMPLETE | UPDATE_ROLLBACK_IN_PROGRESS | UPDATE_ROLLBACK_FAILED | UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS | UPDATE_ROLLBACK_COMPLETE | REVIEW_IN_PROGRESS,
			//    /* more items */
			//  ]
		}, function(err, data) {

			if (err) {
				if (cb) cb(err)
				return;
			}
			ractive.set('stacks',
				data.StackSummaries
					.sort(function(a,b) {
						return new Date(a.CreationTime).getTime() > new Date(b.CreationTime).getTime() ? -1 : 1;
					})
					.sort(function(s) {
						s.CreationTimeFormatted = new Date(s.CreationTime).toISOString()
						return s;
					})
			)

			if (cb) cb(err,data)
		});
	},
	data: function() {
		return {
			selection: '',
		}
	},
	on: {
		init: function() {
			var ractive=this;
			ractive.set('columns', [ null, 'Stack Name', 'Status', 'Created time'])
			ractive.set('rows', [] )


			ractive.on('refresh', function() {
				ractive.stack_list()
			})

			ractive.on('create-stack', function() {
				ractive.root.findComponent('cftabs').command('stackcreate', 'Create Stack' )
			})
			ractive.on('delete', function() {
				var selected = ractive.get('selection')

				if ( !selected )
					return alert('Please select a stack to delete')

				var stackname = selected

				if (confirm('Are you sure you want to delete stack ' + stackname )) {

					cloudformation.deleteStack({ StackName: stackname, }, function(err, data) {
						if (err)
							alert('delete stack failed')

						setTimeout(function(){
							ractive.stack_list()
						}, 1500)

					});
				}

			})
			ractive.stack_list()
		},
		gotostack: function(e) {
			this.root.findComponent('cftabs').command( 'stackdetails', this.get(e.resolve() + '.StackName') )
		}
	},

});

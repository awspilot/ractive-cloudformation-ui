


export default Ractive.extend({
	components: {

	},
	template: `
		<div style="padding: 7px;text-align: right;background-color: #fafafa;">
			<a class="btn btn-sm btn-default" on-click="refresh"><i class="icon zmdi zmdi-refresh"></i></a>
		</div>

		{{#stacks}}
			<div style="height: 86px;padding: 15px 20px;border-bottom: 1px solid #eaeded;text-decoration: none;cursor: pointer;{{#if ~/['active-stack'] === .StackName }}border: 1px solid #0073bb;{{/if}}" on-click="gotostack">
				<div style="color: #000;line-height: 20px;">{{.StackName}}</div>
				<div style="color: #aaa;font-size: 12px;line-height: 20px;margin-top: 5px;">{{.CreationTimeFormatted}}</div>
				<div style="color: #1d8102;font-size: 13px;">{{.StackStatus}}</div>
			</div>
		{{/stacks}}

	`,
	data: function() {
		return {
			stacks: [],
		}
	},
	stack_list: function(cb) {
		var ractive=this;

		this.set({stacks: []})

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
					.filter(function(s) {
						return s.StackStatus !== 'DELETE_COMPLETE';
					})
					.sort(function(s) {
						s.CreationTimeFormatted = new Date(s.CreationTime).toISOString()
						return s;
					})

			)


			if (cb) cb(err,data)
		});
	},
	on: {
		init: function() {
			var ractive=this;

			ractive.on('refresh', function() {
				ractive.stack_list()
			})
			ractive.stack_list()

		},
		gotostack: function(e) {
			this.root.findComponent('cftabs').command( 'stackdetails', this.get(e.resolve() + '.StackName') )
		}
	}
});

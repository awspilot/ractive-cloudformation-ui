
import tabledata from './tabledata';

export default Ractive.extend({
	components: {
		tabledata: tabledata,
	},
	template: `
		<div style="height: 50px;padding: 10px 10px 0px 0px;background-color: #fafafa;border-bottom: 1px solid #eaeded;">

			<div style="float: right;">
				<a class="btn btn-sm btn-default" on-click="refresh"><i class="icon zmdi zmdi-refresh"></i></a>
				<a class="btn btn-sm btn-default {{#if selection_length > 0}}{{else}}disabled{{/if}}" on-click='delete'> Delete </a>
				<a class="btn btn-sm btn-default disabled" on-click='delete'> Update </a>
				<a class="btn btn-sm btn-warning" on-click="create-stack"> Create stack </a>
			</div>
		</div>


		<tabledata columns='{{columns}}' rows='{{rows}}' style='top: 51px;' />

	`,
	stack_list: function(cb) {
		var ractive=this;
		ractive.set('selection_length')
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
			ractive.set('rows',
				data.StackSummaries
					.sort(function(a,b) {
						return new Date(a.CreationTime).getTime() > new Date(b.CreationTime).getTime() ? -1 : 1;
					})
					.map(function(stack) {
						console.log( stack )

						return [
							{ KEY: true },
							{ S: stack.StackName },
							{ S: stack.StackStatus },
							{ S: new Date(stack.CreationTime).toISOString() },

						]
					})
			)


			if (cb) cb(err,data)
		});
	},
	oninit: function() {
		var ractive=this;
		ractive.set('columns', [ null, 'Stack Name', 'Status', 'Created time'])
		ractive.set('rows', [] )

		ractive.on('tabledata.selectrow', function(context) {
			var keypath = context.resolve()
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected') )

			ractive.set('selection_length',
				ractive.get('rows').filter(function(r) { return r[0].selected === true } ).length
			)
		})

		ractive.observe('selection_length', function(n) {

			var param1 = n === 1 ?
				ractive.get('rows').filter(function(r) { return r[0].selected === true } )[0][1].S
				:
				undefined;

			ractive.root.findComponent('cftabs').command( n === 1 ? 'stackdetails' : 'stacklist', param1 )
		})

		ractive.on('refresh', function() {
			ractive.stack_list()
		})

		ractive.on('create-stack', function() {
			ractive.root.findComponent('cftabs').command('stackcreate', 'Create Stack' )
		})
		ractive.on('delete', function() {
			var selected = ractive.get('rows').filter(function(r) { return r[0].selected === true } );

			if ( selected.length === 0 )
				return alert('Please select a stack to delete')

			if ( selected.length > 1 )
				return alert('Please select one stack at a time')

			var stackname = selected[0][1].S

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
});

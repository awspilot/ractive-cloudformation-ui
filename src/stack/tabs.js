
import stackdetailstemplate from './template';
import stackdetailsparameters from './parameters';
import stackdetailsresources from './resources';
import stackdetailsevents from './events';
import stackdetailsexports from './exports';

export default Ractive.extend({
	components: {
		stackdetailstemplate: stackdetailstemplate,
		stackdetailsparameters: stackdetailsparameters,
		stackdetailsresources: stackdetailsresources,
		stackdetailsevents: stackdetailsevents,
		stackdetailsexports: stackdetailsexports,
	},
	template:
		`
		<div style="position: absolute;left: 270px;right:0px;top: 0px;height: 50px;">
			<div style="float: right;padding-top: 7px;">
				<a class="btn btn-sm btn-default" on-click='delete-stack' > Delete </a>
				<a class="btn btn-sm btn-default disabled"  > Update </a>
				<a class="btn btn-sm btn-primary" on-click="create-stack"> Create Stack </a>
			</div>
			<h4 style="color: #000;">{{StackName}}</h4>

		</div>
		<div style="position: absolute;left: 270px;right:0px;top: 40px;bottom: 0px;">
				<tabhead style="">
					<tab class='{{#if active_id === "exports" }}active{{/if}}' on-click='@this.fire("activetab", "exports")'>Outputs</tab>
					<tab class='{{#if active_id === "resources" }}active{{/if}}' on-click='@this.fire("activetab", "resources")'>Resources</tab>
					<tab class='{{#if active_id === "events" }}active{{/if}}' on-click='@this.fire("activetab", "events")'>Events</tab>
					<tab class='{{#if active_id === "template" }}active{{/if}}'   on-click='@this.fire("activetab", "template")'>Template</tab>
					<tab class='{{#if active_id === "parameters" }}active{{/if}}' on-click='@this.fire("activetab", "parameters")'>Parameters</tab>
				</tabhead>

				<tabcontent style="top: 50px;">
					{{#if active_id === "template" }}
						<div style="position: absolute;top: 0;left: 0;right:0;bottom: 0; background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">
							<stackdetailstemplate StackName="{{StackName}}">
						</div>
					{{/if}}
					{{#if active_id === "parameters" }}
						<div style="background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">
							<stackdetailsparameters StackName="{{StackName}}">
						</div>
					{{/if}}
					{{#if active_id === "resources" }}
						<div style="background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">
							<stackdetailsresources StackName="{{StackName}}">
						</div>
					{{/if}}
					{{#if active_id === "events" }}
						<div style="background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">
							<stackdetailsevents StackName="{{StackName}}">
						</div>
					{{/if}}
					{{#if active_id === "exports" }}
						<div style="background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">
							<stackdetailsexports StackName="{{StackName}}">
						</div>
					{{/if}}
				</tabcontent>
		</div>
	`,
	data: function() {
		return {
			active_id: 'resources',
		}
	},


	oninit: function() {
		var ractive = this

		this.on('create-stack', function() {
			ractive.root.findComponent('cftabs').command('stackcreate', 'Create Stack' )
		})
		this.on('delete-stack', function() {

			var stackname = this.get('StackName')

			if (confirm('Are you sure you want to delete stack ' + stackname )) {

				cloudformation.deleteStack({ StackName: stackname, }, function(err, data) {
					if (err)
						alert('delete stack failed')

					setTimeout(function(){
						ractive.root.findComponent('cftabs').command('stacklist', '' )
					}, 1500)

				});
			}

		})
		this.on('activetab', function(e, id) {
			this.set('active_id', id )
			return false;
		})
	},
})

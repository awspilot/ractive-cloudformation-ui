
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
				<a class="btn btn-sm btn-default" on-click='delete' > Delete </a>
				<a class="btn btn-sm btn-default disabled"  > Update </a>
				<a class="btn btn-sm btn-default" on-click="create-stack"> Create Stack </a>
			</div>
			<h4 style="color: #000;">{{StackName}}</h4>

		</div>
		<div style="position: absolute;left: 270px;right:0px;top: 40px;bottom: 0px;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">
				<tabhead style="background-color:#fff;">
					<tab class='{{#if active_id === "exports" }}active{{/if}}' on-click='@this.fire("activetab", "exports")'>Outputs</tab>
					<tab class='{{#if active_id === "resources" }}active{{/if}}' on-click='@this.fire("activetab", "resources")'>Resources</tab>
					<tab class='{{#if active_id === "events" }}active{{/if}}' on-click='@this.fire("activetab", "events")'>Events</tab>
					<tab class='{{#if active_id === "template" }}active{{/if}}'   on-click='@this.fire("activetab", "template")'>Template</tab>
					<tab class='{{#if active_id === "parameters" }}active{{/if}}' on-click='@this.fire("activetab", "parameters")'>Parameters</tab>
				</tabhead>
				<tabcontent style="background-color:#fff;">
					{{#if active_id === "template" }}
						<stackdetailstemplate StackName="{{StackName}}">
					{{/if}}
					{{#if active_id === "parameters" }}
						<stackdetailsparameters StackName="{{StackName}}">
					{{/if}}
					{{#if active_id === "resources" }}
						<stackdetailsresources StackName="{{StackName}}">
					{{/if}}
					{{#if active_id === "events" }}
						<stackdetailsevents StackName="{{StackName}}">
					{{/if}}
					{{#if active_id === "exports" }}
						<stackdetailsexports StackName="{{StackName}}">
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



		this.on('activetab', function(e, id) {
			this.set('active_id', id )
			return false;
		})
	},
})

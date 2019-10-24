
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
		<tabhead>
			<tab class='{{#if active_id === "exports" }}active{{/if}}' on-click='@this.fire("activetab", "exports")'>Outputs</tab>
			<tab class='{{#if active_id === "resources" }}active{{/if}}' on-click='@this.fire("activetab", "resources")'>Resources</tab>
			<tab class='{{#if active_id === "events" }}active{{/if}}' on-click='@this.fire("activetab", "events")'>Events</tab>
			<tab class='{{#if active_id === "template" }}active{{/if}}'   on-click='@this.fire("activetab", "template")'>Template</tab>
			<tab class='{{#if active_id === "parameters" }}active{{/if}}' on-click='@this.fire("activetab", "parameters")'>Parameters</tab>
		</tabhead>
		<tabcontent>
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

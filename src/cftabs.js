
import stacklist from './stacklist';
import ministacklist from './ministacklist';
import stackdetails from './stackdetails';
import stackcreate from './stack/create';

export default Ractive.extend({
	components: {
		stacklist: stacklist,
		ministacklist: ministacklist,
		stackdetails: stackdetails,
		stackcreate: stackcreate,
	},

	template:
		`

			<div style="height: 30px;margin-left: 10px;line-height: 30px;font-size: 15px;">
				<a style="cursor: pointer;text-decoration: none;">Cloudformation</a> &gt;
				<a style="cursor: pointer;text-decoration: none;" on-click="@this.set('active_id', 'stacklist')">Stacks</a>
				{{#if active_id === 'stackdetails'}}
					&gt; <a style="cursor: pointer;text-decoration: none;color: #999;">{{stackdetails}}</a>
				{{/if}}
			</div>

			{{#if active_id === "stacklist" || active_id === "stackdetails" }}
			<div style="position: absolute;top: 40px;left: 10px;right: 10px;bottom: 10px;">
				{{#if active_id === "stacklist"}}
					<div style="position: absolute;top: 0px;left: 0px;width: {{#if active_id === 'stackdetails'}} 260px; {{else}}100%;{{/if}}; box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;background-color: #fff">
						<stacklist />
					</div>
				{{/if}}

				{{#if active_id === 'stackdetails'}}
					<div style="position: absolute;top: 0px;left: 0px;width: {{#if active_id === 'stackdetails'}} 260px; {{else}}100%;{{/if}}; bottom: 0px;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;background-color: #fff">
						<ministacklist active-stack="{{stackdetails}}" />
					</div>
				{{/if}}
				{{#if active_id === 'stackdetails'}}
					<stackdetails stack="{{stackdetails}}" />
				{{/if}}
			</div>
			{{/if}}

			{{#if active_id === "stackcreate" }}
			<div style="position: absolute;top: 10px;left: 50px;right: 50px;bottom: 10px;">
				<stackcreate />
			</div>
			{{/if}}
		`,
	data: function() { return {} },
	active_cache: [],
	activetabcontent: function() {
		var ractive = this
		ractive.active_cache.push(ractive.get('active_id'))
		ractive.findAllComponents('tabletab').map(function( tableview_c ) {
			tableview_c.set('active', tableview_c.get('table.id') === ractive.get('active_id') )
		})
	},
	command: function(component_name, param1 ) {

		if (component_name === 'stackdetails' )
			this.set('stackdetails', param1 )

		this.set('active_id', component_name )

	},
	oninit: function() {
		var ractive = this


		this.observe('active_id', function(newvalue, oldvalue, keypath ) {
			ractive.activetabcontent()
		})

		this.on('closetab', function(e, id) {

			this.active_cache = this.active_cache.filter(function(tid) { return tid !== id })
			this.set('tabs', this.get('tabs').filter(function(t) { return t.id !== id }) )

			if (this.get('active_id') === id ) {
				// the current tab was closed
				this.set('active_id', this.active_cache.pop() )
			}
			ractive.activetabcontent()
			return false;
		})
		this.on('activetab', function(e, id) {
			this.set('active_id', id )
			return false;
		})
	},
})

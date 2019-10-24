
export default Ractive.extend({
	template: `<div class="hsplit {{class}} " style="{{style}}">{{yield}}</div>`,
	isolated: false,
	data: {
		direction: 'horizontal'
	},
})

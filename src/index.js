

	import './less/style.less';
	import Ractive from 'ractive';
	import hsplit from './hsplit';
	import cftabs from './cftabs';

	export default Ractive.extend({
		template: `
		<hsplit class='ractive-cloudformation-ui theme-{{theme}}'>
			<left style="border-right: 1px solid #b9b8b6;">
				<div style="display: block;font-size: 12px;padding-left: 10px;font-size: 18px;font-weight: 700;color: #000;line-height: 2rem;padding: 12px 35px;border-bottom: 1px solid #ddd;">
					Cloudformation
				</div>
				<div style="position: absolute;bottom: 0px;top: 60px;left: 0px;right: 0px;">
					<div style="display: block;height: 30px;line-height: 30px;font-size: 13px;padding: 0px 35px;border-top: 1px solid transparent;border-left: 1px solid transparent;margin-bottom: 0px;color: #ec7211;font-weight: bold;">Stacks</div>
					<div style="display: block;height: 30px;line-height: 30px;font-size: 13px;padding: 0px 35px;border-top: 1px solid transparent;border-left: 1px solid transparent;margin-bottom: 0px;color: #000;">StacksSets</div>
					<div style="display: block;height: 30px;line-height: 30px;font-size: 13px;padding: 0px 35px;border-top: 1px solid transparent;border-left: 1px solid transparent;margin-bottom: 0px;color: #000;">Exports</div>
				</div>
			</left>
			<content  style="background-color: transparent;border: 0px;overflow-x: auto;">
				<cftabs active_id='stacklist' />
			</content>
		</hsplit>
		`,
		components: {
			hsplit: hsplit,
			cftabs: cftabs,
		},

		data: function() {
			return {}
		},

		on: {
			init: function() {
				// var ractive=this;

				cloudformation = new AWS.CloudFormation({
					endpoint: this.get('endpoint'),
					region: this.get('region'),
					credentials: {
						accessKeyId: this.get('accessKeyId'),
						secretAccessKey: this.get('secretAccessKey'),
					}
				});

				;(function ( $ ) {
					$.fn.pickafile = function(options) {
						this.each(function() {
							var $target = $(this)
							var $fileinput = $('<input/>', {
								type: 'file',
								accept: options.accept || undefined,
								style: 'display: none'
							})
							$fileinput.on('change',function() {
								if ($fileinput.get(0).files.length > 1)
									return alert('Please upload one file at a time')

								options.onselect.apply( $target, [ $fileinput.get(0).files[0] ] )
							})
							$fileinput.click()

						})
						return this
					}

				}( jQuery ));

			}
		},
	});

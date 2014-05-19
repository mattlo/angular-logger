(function () {
	angular.module('angular-logger', ['ng']).config(function ($provide) {
		// override existing `$log` behavior
		$provide.decorator("$log", ['$delegate', function ($delegate) {
			return {
				/**
				 * @Overide
				 * @returns {undefined}
				 */
				log: function () {
					$delegate.log.apply(null, this.addDecoration('LOG', arguments));
				},
				/**
				 * @Overide
				 * @returns {undefined}
				 */
				info: function () {
					$delegate.info.apply(null, this.addDecoration('INFO', arguments));
				},
				/**
				 * @Overide
				 * @returns {undefined}
				 */
				error: function () {
					$delegate.error.apply(null, this.addDecoration('ERROR', arguments));
				},
				/**
				 * @Overide
				 * @returns {undefined}
				 */
				warn: function () {
					$delegate.warn.apply(null, this.addDecoration('WARN', arguments));
				},
				/**
				 * @Overide
				 * @returns {undefined}
				 */
				debug: function () {
					$delegate.debug.apply(null, this.addDecoration('DEBUG', arguments));
				},
				/**
				 * @Overide
				 * @param {String} type
				 * @param {Array} arrayArgs
				 * @returns {Array}
				 */
				addDecoration: function (type, arrayArgs) {
					var date = new Date();

					// cast Arguments into Array obj
					arrayArgs = Array.prototype.slice.call(arrayArgs, 0);

					// concat
					arrayArgs.unshift([
						date.getHours(),
						':',
						date.getMinutes(),
						':',
						date.getSeconds(),
						' [' + type + ']'
					].join(''));

					return arrayArgs;
				}
			};
		}]);
	});
}());
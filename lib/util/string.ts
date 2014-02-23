/* tslint:disable:interface-name */

interface String {
	repeat(numberOfTimes: number): string;
	reverse(): string;
}

if (!String.prototype.repeat) {
	String.prototype.repeat = function(count: number): string {
		return count > 0 ? new Array(count + 1).join(this) : '';
	};
}

if (!String.prototype.reverse) {
	String.prototype.reverse = function(): string {
		return this.split('').reverse().join('');
	};
}

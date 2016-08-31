import "ng-harmony-log";
import { Logging, Mixin } from "ng-harmony-decorator";
import * from "ng-harmony-util";

@Logging()
@Mixin(TimeUtil, NumberUtil, AsyncUtil, TypeCheckUtil)
export class Harmony {
	constructor (...args) {
        this.constructor.$inject.forEach((injectee, i) => {
			this[injectee] = args[i];
		});
		this._constructed = this._timestamp;
	}
	get name () {
		return `${this.constructor.name}::${this._constructed}::${this._random}`;
	}
	get _name () {
		let _name = this.name.split("::");
		return {
			fn: _name[0],
			ts: _name[1],
			id: _name[2]
		}
	}
	static get $inject () {
		return this._$inject || [];
	}
	static set $inject (injectees) {
		let _injectees = [];
		if (!Array.isArray(injectees)) {
			injectees = [injectees];
		}
		for (let [i, injecteeStr] of injectees.entries()) {
			let truthy = true;
			for (let [j, _injecteeStr] of this.$inject.entries()) {
				if (injecteeStr === _injecteeStr) {
					truthy = false;
				}
			}
			if (truthy) {
				if(injecteeStr.charAt(0) !== "-") {
					_injectees.push(injecteeStr);
				} else {
					let j = this.$inject.indexOf(injecteeStr.slice(1));
					if (!!~j) {
						this._$inject.splice(j, 1);
					}
				}
			}
		}
		this._$inject = this.$inject.concat(_injectees);
	}
	static set $register (descriptor) {
		Object.keys(descriptor).forEach((module, i) => {
			angular.module(module)[descriptor[module].type](descriptor[module].name, this);
		});
	}
	toString () {
		return this.name || super.toString().match(/function\s*(.*?)\(/)[1];
	}
}
// @ts-nocheck
(()=>Array.prototype.For = function (callback) {
	for (let i = 0, l = this.length; i < l; i++) {
		callback(this[i], i, this);
	}
})();
 
export default {};
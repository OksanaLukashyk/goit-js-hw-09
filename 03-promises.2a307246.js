!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("h6c0i");function r(e,o){var t={position:e,delay:o};return new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e(t):n(t)}),o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var o=e.currentTarget.elements,t=o.delay,n=o.step,a=o.amount,c=Number(t.value),u=Number(n.value),l=Number(a.value),s=1;s<=l;s+=1)r(s,c+=u).then((function(e){var o=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"),{clickToClose:!0,timeout:5e3,cssAnimationStyle:"zoom"})})).catch((function(e){var o=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"),{clickToClose:!0,timeout:5e3,cssAnimationStyle:"zoom"})}));e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.2a307246.js.map

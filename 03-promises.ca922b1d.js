!function(){var e=document.querySelector(".form");e.addEventListener("submit",(function(e){var o=function(e){setTimeout((function(){console.log(e,r,u,a),setTimeout((function(){(function(e,o){return new Promise((function(n,t){var i=Math.random()>.3;obj={position:e,delay:o},console.log(i),i?n(obj):t(obj)}))})(e,r+u*e).then((function(e){return function(e,o){Notiflix.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(o,"ms"))}(e.position,e.delay)})).catch((function(e){return function(e,o){Notiflix.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(o,"ms"))}(e.position,e.delay)}))}),r)}),u)};console.log(e),e.рreventDefault();var n=e.currentTarget.elements,t=n.delay,i=n.step,c=n.amount,r=Number(t.value),u=Number(i.value),a=Number(c.value);console.log(r,u,a);for(var l=1;l<=a;l+=1)o(l);e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.ca922b1d.js.map

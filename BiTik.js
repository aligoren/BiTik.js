class BiTik {
	constructor(el) {
		this.el = el
		return this;
	} 
	
	Buyut(data) {
		let el = document.querySelector(this.el);
		let tik = (data.tik) ? data.tik : 1;
		let px = (data.px) ? data.px : 1.5;
		let elHeight = el.offsetHeight;
		let elWidth = el.offsetWidth;
		
		el.style.height = elHeight + (tik * px) + "px";
		el.style.width = elWidth + (tik * px) + "px";
		
	}
}

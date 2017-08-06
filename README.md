# BiTik.js
Elementleri 1 tık büyütme isteğinde bulunan tasarımcılara karşı :)

# Kullanım

Elementinizi seçin. 1 tık varsayılan 1.5px verilmiştir. Ezmek için Buyut metoduna ayrıca değerler girebilirsiniz. Varsayılan büyütme 1 tıktır. Ancak 2 tık falan da yapabilirsiniz.

```javascript
document.querySelector("button").addEventListener("click", () => {
	new BirTik(".my").Buyut({
		px: 5,
		tik: 1
	})
})
```

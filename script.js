window.onload=function(){
	var list = document.getElementById("list-items")

	function shuffle(items) {
		
		var cached = items.slice(0), temp, i = cached.length, rand;
		while(--i)
		{
			rand = Math.floor(i * Math.random());
			temp = cached[rand];
			cached[rand] = cached[i];
			cached[i] = temp;
		}
		return cached;
	}

	function shuffleList() {
		var children = list.children, i = 0;
		children = Array.prototype.slice.call(children);
		children = shuffle(children);
		while(i < children.length)
		{
			list.appendChild(children[i]);
			++i;
		}
	}


	function sort(items) {
		
		var cached = items.slice(0), temp, i = cached.length, rand;
		cached = cached.sort((a,b) => (a.className > b.className) ? 1 : ((b.className > a.className) ? -1 : 0))		
		return cached;
	}

	function sortList() {
		var children = list.children, i = 0;
		children = Array.prototype.slice.call(children);
		children = sort(children);
		while(i < children.length)
		{
			list.appendChild(children[i]);
			++i;
		}
	} 

	document.getElementById("shuffle").onclick = shuffleList;
	document.getElementById("sort").onclick = sortList;

} 

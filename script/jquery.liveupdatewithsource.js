jQuery.fn.liveUpdateWithSource = function(list, source, max){
	var that = this;
	jQuery.get(source).done(function( res ) { 
		list = $(list);
		var jsonData = res, ohtml = list.html();

		that.keyup(filter).keyup().parents('form').submit(function(){ return false; });

		return that;

		function filter(){
			var term = jQuery.trim( jQuery(this).val().toLowerCase() ), scores = [], html = "";
			if ( term ) {
				jQuery.each(jsonData, function(i){
					var score = this.name.toLowerCase().score(term);
					if (score > 0) { scores.push([score, i]);}
				});
				max = max || scores.length;
				jQuery.each(scores.sort(function(a, b){return b[0] - a[0];}), function(i){
					if(i < max ) { html+='<li>'+ jsonData[this[1]].name +'</li>'; } 
					else { return; }
				});
				list.html(html);
			} else {
				list.html(ohtml);
			}
		}
	});
};
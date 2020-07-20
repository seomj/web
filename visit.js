function filterStr(str, level){
	p = str.match(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g);

	if (p != null){
		if (p.length > 0 ) {
			alert("공격 감지");
		}
	}

	if (level == 0 ) {
		str = str.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");
    }
    else if (level == 1 ) {
	    str = str.replace(/\</g, "&lt;");
	    str = str.replace(/\>/g, "&gt;");
    }
    return str;
}

function tableCreate(){
			var html = '';

			var name = $("#inName").val();
			var text = $("#inText").val();

			name = filterStr(name, 0);
			text = filterStr(text, 1);
			
			html += '<tr>';
			html += '<td>'+name+'</td>';
			html += '<td>'+text+'</td>';
			html += '</tr>';

			$("#dynamicTable").append(html);
			
			$("#inName").val('');
			$("#inText").val('');
}

function tableCreate(){
			var html = '';
						
			var name = $("#inName").val();
			var text = $("#inText").val();
						
			html += '<tr>';
			html += '<td>'+name+'</td>';
			html += '<td>'+text+'</td>';
			html += '</tr>';
						
			$("#dynamicTable").append(html);
						
			$("#inName").val('');
			$("#inText").val('');
}
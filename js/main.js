function validateText(id)
	{
		if($("#"+id).val()==null || $("#"+id).val()=="")
		{
			var div= $("#"+id).closest("div");
			div.addClass("has-error");
			return false;
		}
		else
		{
			var div= $("#"+id).closest("div");
			div.removeClass("has-error");
			div.addClass("has-success");
			return true;
		}
	}


$(document).ready(
			function()
			{
					$('#contactbtn').click(function()
						{
						if(!validateText("name"))
							{return false;}
						if(!validateText("username"))
							{return false;}
						if(!validateText("pass"))
							{return false;}
						if(!validateText("pass2"))
							{return false;}
						if(!validateText("bday"))
							{return false;}
						if(!validateText("mob"))
							{return false;}
						if(!validateText("add"))
							{return false;}

						$("form#contactform").submit();

						})
			}
		)

function validate(id)
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
					var pass=$("#pass");
					var pass2=$("#pass2");
					var pass_error=$("#pass_error");


					$('#contactbtn').click(function()
						{
						if(!validate("name"))
							{return false;}
						if(!validate("username"))
							{return false;}
						if(!validate("pass"))
							{return false;}
						if(!validate("pass2"))
							{return false;}
						if(pass.val()!=pass2.val())
						{
							pass_error.innerHTML="Passwords do not match";
							var div2=$("#pass").closest("div");
							var div3=$("#pass2").closest("div");
							div2.addClass("has-error");
							div3.addClass("has-error");
							return false;
						}
						if(!validate("bday"))
							{return false;}
						if(!validate("mob"))
							{return false;}
						if(!validate("add"))
							{return false;}

						$("form#contactform").submit();

						}
						)

			}
		)

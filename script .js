function validateFrom()
{
    var id=document.getElementById("id").value;
	var name = document.getElementById("Name").value;
	var depart= document.myfrom.depart;
	var Batch= document.getElementById("Batch").value;
	var OverallCGPA= document.getElementById("OverallCGPA").value;
	var tdata= document.getElementById("tdata").value;
	var CGPA= document.getElementById("CGPA").value;
	var depart= document.myfrom.depart;
	if(id=="")
	{
		document.getElementById("state").innerHTML="please fill the id field";                                            
		return false;
	}
	
	if((id.length<=5)||(id.length>10))
	{
		document.getElementById("state").innerHTML="id lenght must be between 5 to 10";                                            
		return false;
	}
	if(name=="")
	{
		document.getElementById("state").innerHTML="please fill the name field";                                            
		return false;
	}
	if(depart.SelectedIndex <1)
	{
		document.getElementById("state").innerHTML="please fill the SELECT field";                                            
		return false;
	}
	
	if(Batch=="")
	{
		document.getElementById("state").innerHTML="please fill the batch field";                                                                    
                                                                                                   
		return false;
	}
	if( OverallCGPA=="")
	{
		document.getElementById("state").innerHTML="please fill the  OverallCGPA field";                                                                    
                                                                                                   
		return false;
	}
	if( CGPA=="")
	{
		document.getElementById("state").innerHTML="please fill the   Current CGPA field";                                                                    
                                                                                                   
		return false;
	}
	if(tdata=="")
	{
		document.getElementById("state").innerHTML="please fill the date field";                                                                    
                                                                                                   
		return false;
	}
	
}

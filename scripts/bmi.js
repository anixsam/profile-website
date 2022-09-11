$(document).ready(function()
{
    $('#calculate').click(function()
    {
        var weightValue =  parseInt($('#weightValue').val());
        var weightType = document.getElementById("weight").selectedIndex;

        var ft_pt1 = document.getElementById("ft-pt1").selectedIndex;
        var ft_pt2 = document.getElementById("ft-pt2").selectedIndex;

        var height = parseInt($('#heightValue').val());
        var heightType = document.getElementById("height").selectedIndex;

        var bmi = 0;
        var heightConverted = 0;

        if(isNaN(weightValue))
            $('#weightError').text("Enter the Weight").attr("style", "display:block");
        else
            $('#weightError').attr("style", "display:none");
        
        if( (ft_pt1 == 0 && ft_pt2 == 0) && isNaN(height) )
        {
            $('#heightError').text("Enter the Height").attr("style", "display:block");
        }
        else 
            $('#heightError').attr("style", "display:none");
        
        console.log(isNaN(height))

        if( (ft_pt1 > 0 && ft_pt2 > 0) && height > 0 )
            $('#heightError').text("Choose either one method").attr("style", "display:block");
        
        else
            {
                if((ft_pt1 == 0 && ft_pt2 == 0) && height > 0)
                {
                    if(weightType == 1)
                    {
                        switch(heightType)
                        {
                            case 0:
                                heightConverted = 0.01*height;
                                break;
                            case 1:
                                heightConverted = height;
                                break;
                            case 2:
                                heightConverted = 0.0254*height;
                                break;                      
                        }
    
                        bmi = (weightValue / (heightConverted * heightConverted)).toFixed(1);
                    }
                    else
                    {
                        switch(heightType)
                        {
                            case 0:
                                heightConverted = 0.393701*height;
                                break;
                            case 1:
                                heightConverted = 39.37008*height;
                                break;
                            case 2:
                                heightConverted = height;
                                break;                      
                        }
    
                        bmi = ((703*weightValue) / (heightConverted * heightConverted)).toFixed(1);
                    }
                }
                else
                {
                    if(weightType == 1)
                    {
                        heightConverted = (ft_pt1 * 0.3048) + (ft_pt2 * 0.0254);
    
                        bmi = (weightValue / (heightConverted * heightConverted)).toFixed(1);
                    }
                    else
                    {
                        heightConverted = (ft_pt1*12) + ft_pt2;
    
                        bmi = ((703*weightValue) / (heightConverted * heightConverted)).toFixed(1);
                    }
    
                }
            }
        
        isNaN(bmi) != true ? $('#result').text(`Your Calculated BMI : ${bmi}`) : $('#result').text(``);
    }
    )
}
)
var input = prompt ("please enter a number:");
            if (input!== null){
                var number= parseFloat(input);
                if(!isNaN(number)){
                    if (number<20){
                        alert("Number is less than 20");
                    }else{
                        alert("Number is 20 or greater");
                    }
                }else{
                    alert("Please enter a valid number");
            }
        }else{
            alert("Prompt was canceled");
        }
    
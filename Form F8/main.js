//Đối tượng validator
function Validator(options){

    //Ham thuc hien validate
    function validate(inputElement,rule){
        var errorMessage =rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        if(errorMessage){
            errorElement.innerText=errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else{
            errorElement.innerText='';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    var formElement = document.querySelector(options.form);
    
    if(formElement){
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement){
                //Truong hop blur khoi input
                inputElement.onblur = function(){
                    validate(inputElement,rule);
                }

                //Truong hop nguoi dung nhap vao input
                inputElement.oninput = function(){
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText='';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

//Định nghĩa rules
Validator.isRequired = function(selector){
    return {
        selector:selector,
        test: function(value){
            return value.trim() ? undefined : 'Vui long nhap truong nay'
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector:selector,
        test: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'truong nay phai la email';
        }
    }
}

Validator.minLength = function(selector,min){
    return {
        selector:selector,
        test: function(value){
            return value.length >= min ? undefined : `Vui long nhap tối thiểu ${min} kí tự`;
        }
    }
}
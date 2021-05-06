let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// nếu người dùng nhấn phím bất kỳ và thả ra
inputBox.onkeyup = function(e){
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        icon.onclick = function(){
            webLink="https://www.google.com/search?q="+userData;
            linkTag.setAttribute("href",webLink);
            console.log(webLink)
            linkTag.click();
        }
        //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
        emptyArray = suggestions.filter(function(data){
            // console.log(data.toLowerCase().startsWith(userData.toLowerCase()))
            // The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
            return data.toLowerCase().startsWith(userData.toLowerCase());
        })
        
        emptyArray = emptyArray.map(function (data) {
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        })

        searchWrapper.classList.add("active");//show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for(let i=0; i<allList.length; i++){
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)")
        }
    }
    else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
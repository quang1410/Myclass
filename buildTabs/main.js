var tabLinks = document.querySelectorAll('.tablinks');
var tabContent = document.querySelectorAll('.tabcontent');

tabLinks.forEach(function(i){
    i.addEventListener('click',openTabs);
});

function openTabs(i) {
    var btn = i.currentTarget;// lắng nghe sự kiện và hiển thị các element
    var electronic = btn.dataset.electronic;// lấy giá trị trong data-electronic

    tabContent.forEach(function(i){
        i.classList.remove('active');
    });//lặp qua các tab content để remove class active

    tabLinks.forEach(function(i) {
        i.classList.remove("active");
    }); //lặp qua các tab links để remove class active

    console.log(document.querySelector("#" + electronic))
    document.querySelector("#" + electronic).classList.add("active")
    // trả về phần tử đầu tiên có id="" được add class active
    
    btn.classList.add("active");
    // các button mà chúng ta click vào sẽ được add class active
}
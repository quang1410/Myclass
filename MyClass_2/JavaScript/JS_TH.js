// JavaScript Document
function Ondangki(){
	var a = document.getElementById("divdangki");
	var b = document.getElementById("divdangnhap");
	
	a.style.display="block";
	b.style.display="none";	
}

function Ondangnhap(){
	var a = document.getElementById("divdangki");
	var b = document.getElementById("divdangnhap");
	
	a.style.display="none";
	b.style.display="block";	
}

function kiemtrabatbuocnhap(){
	var pthongbao=document.getElementById("pthongbao");
	var input1=document.getElementById("tendangnhap");
	var input2=document.getElementById("matkhau");
	var input3=document.getElementById("email");
	var input4=document.getElementById("tuoi");
	var input5=document.getElementById("nghenghiep");
	var nam=document.getElementById("nam");
	var nu=document.getElementById("nu");
	var value1=input1.value;
	var value2=input2.value;
	var value3=input3.value;
	var value4=input4.value;
	if(value1==""||value2==""||value3==""||value4==""){
		input1.style.border="solid 2px red";
		input2.style.border="solid 2px red";
		input3.style.border="solid 2px red";
		input4.style.border="solid 2px red";
		pthongbao.style.display="block";
		pthongbao.innerHTML="Hãy điền thông tin đầy đủ vào các trường dữ liệu"+"<br>";
		return false;
	}
	else if(input5.selectedIndex==0){
		pthongbao.style.display="block";
		pthongbao.innerHTML="Hãy chọn nghề nghiệp"+"<br>";
		return false;
	}
	else if(!nam.checked && !nu.checked){
		pthongbao.style.display="block";
		pthongbao.innerHTML="Bạn vui lòng chọn giới tính"+"<br>";
		return false;
	}
	else{
		pthongbao.style.display="none";
		return true;
	}
}

function kiemtratuoi(idtag,mintuoi,maxtuoi){
	var inputtag=document.getElementById("tuoi");
	var numbers=/^[0-9]+$/;
	var thep=document.getElementById("pthongbao");
	if(inputtag.value.match(numbers)){
				var inttuoi=parseInt(inputtag.value);
				if(inttuoi<mintuoi||inttuoi>maxtuoi){
					thep.style.display="block";
					thep.innerHTML="hãy nhập tuoi tu 18 đến 40";
					thep.style.color="red";
					return false;
				}
				else{
					thep.style.display="none";
					return true;
				}
			}
			else{
				thep.style.display="block";
				thep.innerHTML="hãy nhập tất cả là số";
				thep.style.color="red";
				return false;
			}
}

function kiemtra(){
	return kiemtrabatbuocnhap() && kiemtratuoi("tuoi",18,40);
}
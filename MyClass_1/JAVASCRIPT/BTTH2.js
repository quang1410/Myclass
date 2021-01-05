//sự kiện khi nhấn tab đăng kí và đăng nhập
function onDangKi()
{
	//ẩn phần đăng nhập 
	//hiển thị phần đăng kí
	var divdki=document.getElementById("divdangki");
	var divdn=document.getElementById("divdangnhap");
	
		divdki.style.display="block";
		divdn.style.display="none";
}

function onDangNhap()
{
	//ẩn phần đăng kí hiện thị phần đăng nhập
	var divdki=document.getElementById("divdangki");
	var divdn=document.getElementById("divdangnhap");
	
		divdki.style.display="none";
		divdn.style.display="block";
}

function KtrabatbuocDki()
{
	var pthongbao=document.getElementById("pthongbao");
	var nghenghiep=document.getElementById("nghenghiep");
	var nam=document.getElementById("Nam");
	var nu=document.getElementById("Nu");
	if(FDK.tendangnhap.value==""|| FDK.matkhau.value==""||FDK.tuoi.value==""||FDK.email.value=="")
	{
		FDK.tendangnhap.style.border= "solid 2px red";
		FDK.matkhau.style.border= "solid 2px red";
		FDK.tuoi.style.border= "solid 2px red";
		FDK.email.style.border= "solid 2px red";
		pthongbao.style.display="block";
		pthongbao.innerHTML +="Bạn cần nhạp dữ liệu cho các trường đầy đủ <br>";
		return false;
	}
	else if(nghenghiep.selectedIndex==0)
		{
			pthongbao.style.display="block";
			pthongbao.innerHTML +="Bạn phải chọn nghề nghiệp <br>"
			return false;
		}
	else if(!nam.checked && !nu.checked)
	{
			pthongbao.style.display="block";
			pthongbao.innerHTML +="Bạn phải chọn giới tính <br>"
			return false;
	}
	else
	{
		pthongbao.style.display="none";
		return true;
	}
}

function kiemtrachieudaichuoi(idText,minlength,maxlength)
{
	 var inputText=document.getElementById(idText);
	 var field=inputText.value;
	 var pthongbao=document.getElementById("pthongbao")
	 if(field.length<minlength||field.length>maxlength)
	 {
		 pthongbao.style.display=("block");
		 pthongbao.innerHTML= "Hãy nhập tối đa " + maxlength +"kí tự";
		 return false;
	 }
	 else
	 {
		 pthongbao.style.display="none";
		 return true;
	 }	 
}

function kiemtraEmail(idTag)
{
	var inputTag=document.getElementById("idTag");
	var pthongbao=document.getElementById("pthongbao");
	var email=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
	if(inputTag.value.match(email))
	{
		pthongbao.style.display="none";
		return true;
	}
	else
	{
		pthongbao.style.display="block";
		pthongbao.innerHTML="Hãy nhập vào Email hợp lệ";
		return  false;
	}
}

function kiemtratuoi(mintuoi,maxtuoi,idTagThongBao)
{
	var pthongbao=document.getElementById("idTagThongBao");
	var tuoi=document.getElementById("tuoi");
	var numbers=/^[0-9]+$/;
	if(tuoi.value.match(numbers))
	{
		pthongbao.style.display="none";
		var intTuoi=parseInt(tuoi.value);
		if(intTuoi>maxtuoi||intTuoi<mintuoi)
		{
			pthongbao.style.display="block";
			pthongbao.innerHTML="Hãy nhập vào tuổi từ 18 đến 40";
			return false;
		}else{
			pthongbao.style.display="none";
			return true;
		}
		
	}
	else{
		pthongbao.style.display="block";
		pthongbao.innerHTML="Hãy nhập tất cả đều là số";
		return false;
	}
}

function ktdangki()
{
	return KtrabatbuocDki() &&kiemtrachieudaichuoi("tendangnhap",1,30)
	&& kiemtratuoi(18,40,"pthongbao");
}
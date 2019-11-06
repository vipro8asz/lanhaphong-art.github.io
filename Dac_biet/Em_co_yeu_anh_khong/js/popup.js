status=""
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='r';
a[7]='ồ';
a[8]='i';
a[9]=' ';
a[10]='!';
a[11]=' ';
a[12]='E';
a[13]='m';
a[14]=' ';
a[15]='c';
a[16]='ũ';
a[17]='n';
a[18]='g';
a[19]=' ';
a[20]='y';
a[21]='ê';
a[22]='u';
a[23]=' ';
a[24]='a';
a[25]='n';
a[26]='h';
a[27]=' ';
a[28]='~';
a[29]=' ';
a[30]='y';
a[31]='ê';
a[32]='u';
a[33]=' ';
a[34]='n';
a[35]='h';
a[36]='ấ';
a[37]='t';
a[38]=' ';
a[39]='q';
a[40]='u';
a[41]='ả';
a[42]=' ';
a[43]='đ';
a[44]='ấ';
a[45]='t';
a[46]=' ';
a[47]='l';
a[48]='u';
a[49]='ô';
a[50]='n';
a[51]=' ';
a[52]='♥';
a[53]=' '
a[54]='...'

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==54)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("<h2>Aha ! đừng có chối nữa nhé ! <img src='img/3.gif'</img>");
					$("#divResult").fadeIn(1000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<center><p>Anh cũng yêu Em ;) nhiều lắm<img src='img/2.gif'/></p>");
							$("#divResult2").fadeIn(1000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<center><p>Dù sau này có như thế nào hãy luôn bên anh và yêu anh như thế này em nhé ! <img src='img/4.gif'/></p></br>");
									$("#divResult3").fadeIn(1000);
									}
								);
							}
						);
					}
				
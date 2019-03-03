var kt=false
alert('Chào em ;)')
alert('Web dành cho người mới quen')
alert('Hi My Girl ~ I Super')
alert('C Đình Phát, Nhã Phong TM')
alert('Anh muốn hỏi <?')
alert('Em muốn làm Bạn hay người yêu')
alert('Hãy cho anh biết')
alert('Đang chờ em duyệt')

function move()
{var a = Math.random()*80
var b = Math.random()*80
var x = Math.random()*80
var y = Math.random()*80
var left=a+'%'
var right=b+'%'
var top=y+'%'
var bottom=x+'%'
document.getElementById('Move').style.left=left
document.getElementById('Move').style.right=right
document.getElementById('Move').style.top=top
document.getElementById('Move').style.bottom=bottom}
function Thông_báo_Cick()
{if(kt==false)
{alert('Tình thì không thiếu chủ yếu chưa có người yêu')
kt=true}
else
{alert('Em đã Click vào Người yêu chưa ?')
alert('>x<')
alert('Nếu mà em hỏi: Anh có nguyện chết vì em không ?')
alert('Thì câu trả lời là: Không còn sống lấy gì mà yêu ?')
alert('...')
alert('Chém gió vậy thôi chứ anh yêu em rất nhiều')
alert('Chào em, Sea You Again, GoodBye, Hẹn gặp lại')
alert(';)')}}

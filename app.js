var userName = prompt("Enter your Name.")
var math = +prompt("Enter your Math Marks.")
var urdu = +prompt("Enter your Urdu Marks.")
var islamiyat = +prompt("Enter your Islamiyat Marks.")
var sindhi = +prompt("Enter your Sindhi Marks.")
var english = +prompt("Enter your English Marks.")
var total = math+urdu+islamiyat+sindhi+english
var per = (total/500)*100

if( per >= 80 && per < 101){
    document.write("<h1>"+ userName+ "<br><br> "+"Ap k Total Marks "+total+" "+"hain"+"<br>"+"Or Ap ki Percentage"+" "+per +" "+"hai"+"<br>"+"Ap ka Garde A+ hai"+"</h1>")
}
else if( per >= 70 && per < 80 ){
    document.write("<h1>"+ userName+ "<br><br> "+"Ap k Total Marks "+total+" "+"hain"+"<br>"+"Or Ap ki Percentage"+" "+per +" "+"hai"+"<br>"+"Ap ka Garde A hai"+"</h1>")
}
else if( per >= 60 && per < 70 ){
    document.write("<h1>"+ userName+ "<br><br> "+"Ap k Total Marks "+total+" "+"hain"+"<br>"+"Or Ap ki Percentage"+" "+per +" "+"hai"+"<br>"+"Ap ka Garde B hai"+"</h1>")
}
else if( per >= 50 && per < 60 ){
    document.write("<h1>"+ userName+ "<br><br> "+"Ap k Total Marks "+total+" "+"hain"+"<br>"+"Or Ap ki Percentage"+" "+per +" "+"hai"+"<br>"+"Ap ka Garde C hai"+"</h1>")
}
else if( per >= 40 && per < 50 ){
    document.write("<h1>"+ userName+ "<br><br> "+"Ap k Total Marks "+total+" "+"hain"+"<br>"+"Or Ap ki Percentage"+" "+per +" "+"hai"+"<br>"+"Ap ka Garde D hai"+"</h1>")
}
else if(  per < 40 ){
    document.write("<h1>"+ userName+ "<br><br> "+"Ap k Total Marks "+total+" "+"hain"+"<br>"+"Or Ap ki Percentage"+" "+per +" "+"hai"+"<br>"+"AP FAIL HAIN"+"</h1>")
}
else{
    alert("Please Enter Your Correct Marks!")
}
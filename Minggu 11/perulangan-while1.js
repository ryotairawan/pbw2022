var ulangi = confirm("Apakah anda mau mengulang?"); 
var counter = 0; 
 
while(ulangi){ 
    counter++; 
    ulangi = confirm("Apakah anda mau mengulang?"); 
} 
 
document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");
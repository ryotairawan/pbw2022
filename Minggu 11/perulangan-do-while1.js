var ulangi = confirm("Apakah Anda mau mengulang?");
var counter = 0;

do {
	counter++;
	ulangi = confirm("Apakah anda mau mengulang?");
} while(ulangi)
document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");
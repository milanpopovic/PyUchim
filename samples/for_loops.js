function select_sample_for_loops(){

var z = new Array();
z[1] =`
'''
Zadatak 1.
Napišite program koji štampa vaše ime 100 puta.
'''

for i in range(100):
    print("Vaše ime") #   umesto "Vase Ime" stavite svoje ime
`
z[2] = `
'''
Zadatak 2.
Napišite program kojim se ceo ekran (i horizontalno i vertikalno) 
popunjava vašim imenom. 
[Uputstvo: dodajte opciju end=" " u print funkciji da popunite 
ekran horizontalno.]
'''

for i in range(1000):
    print("Vaše ime",end=" ")
`
z[3] = `
'''
Zadatak 3.
Napišite program koji štampa 100 linija, sa brojevima od 1 do 100 na početku linije i vašim imenom u svakoj liniji. Izlaz treba da izgleda ovako:

1 Vaše ime
2 Vaše ime
3 Vaše ime
4 Vaše ime
...
100 Vaše ime
'''

for i in range(1,101):
    print(i,"Vaše ime")
`
z[4] = `
'''
Zadatak 4.
Napišite program koji štampa listu celih brojeva od 1 do 20 i 
njihove kvadrate. Izlaz treba da izgleda ovako:

1 --- 1
2 --- 4
3 --- 9
...
20 --- 400
'''

for i in range(1,21):
    print(i,i**2)
`
z[5] = `
'''
Zadatak 5.
Napišite program koji koristi for petlju da štampa brojeve 
8, 11, 14, 17, 20, …, 83, 86, 89.
'''

for i in range(8,90,3):
    print(i)
`

z[6] = `
'''
Zadatak 6.
Napišite program koji koristi for petlju da štampa brojeve 100, 98, 96, …, 4, 2.
'''

for i in range(100,0,-2):
    print(i)
`
z[7] = `
'''
Zadatak 7.
Napišite program koji koristi četiri for petlje da štampa dole prikazani niz slova.

AAAAAAAAAABBBBBBBCDCDCDCDEFFFFFFG
'''

for i in range(10):
    print("A",end="")
for i in range(7):
    print("B",end="")
for i in range(4):
    print("CD",end="")
print("E",end="")
for i in range(6):
    print("F",end="")
print("G",end="")
`
z[8] = `
'''
Zadatak 8.
Napišite program koji traži od korisnika da unese svoje ime i koliko 
će puta ime biti štampano. 
Program treba da šatmpa korisnikovo ime uneti broj puta.
'''

ime=input("Unesite vaše ime:")
broj_ponavljanja = int(input("Broj ponavljanja: "))
for i in range(broj_ponavljanja):
    print(ime)
`
z[9] = `
'''
Zadatak 9.
Fibonačijevi brojevi su brojni niz prikazan dole, kod kojeg su prva 
dva člana jednaka 1, a svaki sledeći je suma prethodna dva. 
Napišite program koji traži od korisnika koliko Fibonačijevih brojeva 
treba štampati, pa te brojeve i štampa.
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, …
'''
koliko=int(input("Koliko Fibonacijevih brojeva zelite: "))
f1 = 1
f2 = 1
print(f1)
print(f2)
for i in range(3,koliko+1):
    sledeci=f1+f2
    print(sledeci)
    f1 = f2
    f2 = sledeci
`
z[10] = `
'''
Zadatak 10.
Iskoristite for petlju da štampate pravougaonik kao onaj prikazan dole. 
Omogućite korisniku da specificira dužinu i širinu pravougaonika, 
tako što će te vrednosti uneti na početku programa. 
[Uputstvo: print('*'*10) štampa 10 zvezdica.]

*******************
*******************
*******************
*******************
'''

duzina=int(input("Duzina pravougaonika: "))
sirina=int(input("Sirina pravougaonika: "))
for i in range(sirina):
    print("*"*duzina)
`
z[11] = `
'''
Zadatak 11.
Iskoristite for petlju da štampate pravougaonika kao onaj prikazan dole. 
Omogućite korisniku da specificira dužinu i širinu pravougaonika.

*******************
*                 *
*                 *
*******************
'''

duzina=int(input("Duzina pravougaonika: "))
sirina=int(input("Sirina pravougaonika: "))
print("*"*duzina)
for i in range(sirina-2):
    print("*"," "*(duzina-2),"*",sep="")
print("*"*duzina)
`
z[12] = `
'''
Zadatak 12.
Iskoristite for petlju da štampate trougao kao onaj prikazan dole. 
Omogućite korisniku da specificira visinu trougla.

*
**
***
****
'''

visina=int(input("Unesite visinu trougla: "))
for i in range(1,visina+1):
    print("*"*i)
`
z[13] = `
'''
Zadatak 13.
Iskoristite for petlju da štampate trougao kao onaj prikazan dole. 
Omogućite korisniku da specificira visinu trougla.

****
***
**
*
'''

visina=int(input("Unesite visinu trougla: "))
for i in range(visina,0,-1):
    print("*"*i)
`
z[14] = `
'''
Zadatak 14.
Iskoristite for petlju da štampate dijamant kao onaj prikazan dole. 
Omogućite korisniku da specificira visinu dijamanta.

   *
  ***
 *****
*******
 *****
  ***
   *
'''

visina=int(input("Unesite visinu dijamanta: "))
for i in range(1,visina//2+1):
    print(" "*(visina//2-i+1),"*"*(2*i-1),sep="")
print("*"*visina)
for i in range(1,visina//2+1):
    print(" "*i,"*"*(visina-2*i),sep="")
`
z[15] = `
'''
Zadatak 15.
Napišite program kojim se štampa gigantsko slovo A kao ono prikazano dole. 
Omogućite korisniku da specificira koliko će slovo biti veliko.

    *
   * *
  *****
 *     *
*       *
'''

visina=int(input("Unesite visinu slova A: "))
print(" "*(visina-1),"*")
for i in range(1,visina//2):
    print(" "*(visina-i),"*"," "*(2*i-1),"*",sep="")
print(" "*(visina//2),"*"*visina)
for i in range(visina//2+1,visina):
    print(" "*(visina-i),"*"," "*(2*i-1),"*",sep="")
`


var num = prompt("Sample question (1-15)", "");
$model.view.setCode(z[num]);
$model.reset();
$("#open_file").val("");
}

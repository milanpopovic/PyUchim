// Resenja za vezbe iz poglavlja Da pocnemo!
function select_sample_io(){
var z = new Array();

z[1] =`
'''
Zadatak 1.

Štampajte pravougaonik kao ovaj prikazan dole.

*******************
*******************
*******************
*******************
'''

print("*******************")
print("*******************")
print("*******************")
print("*******************")
`

z[2] = `
'''
Zadatak 2.

Štampajte pravougaonik kao ovaj prikazan dole.

*******************
*                 *
*                 *
*******************
'''

print("*******************")
print("*                 *")
print("*                 *")
print("*******************")
`
z[3] = `
'''
Zadatak 3.

Štampajte trougao kao ovaj prikazan dole.

*
**
***
****
'''

print("*")
print("**")
print("***")
print("****")
`
z[4] =`
'''
Zadatak 4.
Napišite program koji izračunava i štampa sledeći matematički izraz. 
Treba da dobijete oko 0.1017.

512-282
_______

47·48+5
'''

print( (512-282)/(47*48+5) )
`
z[5] = `
'''
Zadatak 5.
Tražite od korisnika da unsese broj. Štampajte kvadrat tog broja, 
ali koristite sep opciju tako da dobijete izlaz kao ovaj prikazan dole.

Unesite broj: 5
Kvadrat broja 5 je 25.
'''

broj = int(input("Unesite jedan broj: "))
print("Kvadrat broja ",broj," je ", broj**2,".",sep="")
`
z[6] = `
'''
Zadatak 6.
Tražite od korisnika da unsese broj x. Iskoristite sep opciju da štampate 
x, 2x, 3x, 4x, i 5x, razdvojene sa tri crtice kao što je prikazano dole.
Unesite broj: 7
7---14---21---28---35
'''

x = int(input("Unesite jedan broj: "))
print(x,2*x,3*x,4*x,5*x,sep="---")
`

z[7] = `
'''
Zadatak 7.
Napišite program koji traži od korsinika da unese težinu u kilogramima 
i da je konvertuje u funte. Jedan kilogram ima 2.2 funte.
'''

t=float(input("Unesite težinu u kg: "))
print("Ista težina u funtama iznosi", 2.2*t)
`
z[8] = `
'''
Zadatak 8.
Napišite program koji traži od korisnika da unese tri broja 
(koristite tri posebne input naredbe). Kreirajte varijable sa nazivima 
total i prosek koje sadrže sumu i srednju vrednost od tri uneta broja, 
pa štampajte vrednost varijabli total i prosek.
'''

a=int(input("Unesite prvi broj: "))
b=int(input("Unesite drugi broj: "))
c=int(input("Unesite treci broj: "))
total=a+b+c
prosek = total/3 # sto je isto kao (a+b+c)/3
print("Suma",total,"Srednja vrednost",prosek)
`
z[9] = `
'''
Zadatak 9.
Mnogi mobilni telefoni imaju kalkulator za napojnicu (bakšiš). 
Napišite jedan takav kalkulator u Python-u. Tražite od korisnika da unese 
iznos vašeg računa i procenat napojnice koju želite da ostavite. 
Zatim štampajte iznos napojnice i ukupan iznos vašeg računa uključujući napojnicu.
'''

iznos=float(input("Unesite iznos računa: "))
procenat=int(input("Unesite procenat bakšiša: "))
baksis=iznos*procenat/100
print("Bakšiš",baksis,"Ukupno sa bakšišom",iznos+baksis)
`
prog = ''
for (var i=1; i < z.length; i++)
  prog = prog+z[i];
$model.view.setCode(prog);
$model.reset();
$("#open_file").val("");
}

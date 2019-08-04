function select_sample_if_statement(){
var z = new Array();
z[1] = `
'''
Zadatak 1.
Napisati program koji traži od korisnika da unese dužinu u 
santimetrima. Ako korisnik unese negativnu dužinu program 
treba da mu saopštu da je uneo neispravnu vrednost. 
U suprotnom, program treba da konvertuje i štampa dužinu 
u inčima. U jednom inču ima 2.54 santimetra.
'''

duzina=float(input("Unesite dužinu u cm: "))
if duzina < 0:
    print("Uneli ste neispravnu vrednost.")
else:
    print("Dužina u inčima:",duzina/2.54)
`
z[2] = `
'''
Zadatak 2.
Tražite od korisnika da unese temperaturu. Zatim ga pitajte u 
kojim jednicama je temperatura, Celzijus ili Farenhajt. 
Program treba da konvertuje temperaturu u drugu jedinicu.
Formule za konverziju su: F=9/5*C+32 i C=5/9*(F-32).
'''

temp = float(input("Unesite temperaturu: "))
jed = int(input("U kojim jedinicama (1-Celzijus, 2-Farenhajt):"))
if jed == 1:
    print("Temperatura u Farenhajtima:", 9/5*temp+32)
else:
    print("Temperatura u Celzijusima:",5/9*(temp-32))
`
z[3] = `
'''
Zadatak 3.
Tražite od korisnika da unese temperaturu u Celzijusima. 
Program treba da štampa poruku u zavisnosti od unete temperature 
prema sledećim pravilima:

a) Ako je temperatura manja od -273.15, štampati da je temperatura 
   neispravna jer je ispod apsolutne nule.
b) Ako je tačno -273.15, štampati da je temperatura na apsolutnoj 0.
c) Ako je temperatura između -273.15 i 0, štampati da je temperatura 
   ispod tačke mržnjenja.
d) Ako je temperatura 0, štampati da je temperatura na tački mržnjenja.
e) Ako je između 0 i 100, štampati da je temperatura u normalnom opsegu.
f) Ako je 100, štampati da je temperatura na tačku vrenja.
g) Ako je iznad 100, štampati da je temperatura iznad tačke vrenja.
'''

temp = float(input("Unesite temperaturu u Celzijusima: "))
if temp < -273.15:
    print("Neispravna temperatura")
elif temp == 273.15:
    print("Apsolutna 0")
elif  -27.15<temp<0:
    print("Ispod tacke mrznjenja")
elif temp==0:
    print("Na tacki mrznjenja")
elif 0<temp<100:
    print("Normalni opseg")
elif temp==100:
    print("Tacka kljucanja")
elif temp>100:
    print("Iznad tacke kljucanja")
`
z[4] = `
'''
Zadatak 4.
Generišite jedan slučajan broj između 1 i 10. Tražite od korisnika da 
pogodi broj i štampajte odgovarajuću poruku ako je pogodio broj ili ako nije.
'''

from random import randint
broj = randint(1,10)
pokusaj=int(input("Pogodite broj izmedju 1 i 10: "))
if pokusaj == broj:
    print("Pogodili ste!")
else:
    print("Niste pogodili.")
`
z[5] = `
'''
Zadatak 5.
Prodavnica naplaćuje $12 jedinici proizvoda ako kupujete manje 
od deset proizvoda. Ako kupujete između 10 i 99 proizvoda, 
cena je $10 po proizvodu. Ako kupujete 100 ili više od 100 
proizvoda cena je $7 po proizvodu. 
Napišite program koji traži od korisnika koliko proizvoda kupuje 
i štampa ukupnu cenu za tu kupovinu.
'''

koliko=int(input("Koliko proizvoda kupujeta: "))
if koliko < 10:
    print("To ce vas kostati:",koliko*12,"$")
elif 10<=koliko<=99:
    print("To ce vas kostati:",koliko*10,"$")
elif koliko>=100:
    print("To ce vas kostati:",koliko*7,"$")
`
z[6] = `
'''
Zadatak 6.
Napišite program koji traži od korisnika da unese dva broja i štampa 
"Blizu" ako su oni udaljeni manje od 0.001 međusobno, 
dok u suprotnom štama "Nisu blizu".
'''

a = float(input("Unesite prvi broj: "))
b = float(input("Unesite drugi broj: "))
if abs(a-b)<0.001:
    print("Blizu")
else:
    print("Nisu blizu")
`
z[7] = `
'''
Zadatak 7.
Godina je prestupna ako je deljiva sa 4, izuzev godina koje su deljive 
sa 100 a nisu deljive sa 400. Napisati program koji traži od korisnika 
da unese godinu i štampa da li je ona prestupna ili ne.
'''

godina=int(input("Unesite godinu: "))
if (godina%4==0 and godina%100 != 0) or godina%400 == 0:
    print("Prestupna")
else:
    print("Nije prestupna")
`
z[8] = `
'''
Zadatak 8.
Napišite program koji traži od korisnika neki broj pa štampa sve delioce 
tog broja. 
[Pomoć: operator % se koristi da se odredi da li je broj deljiv sa nečim.]
'''

broj=int(input("Unesite broj: "))
for i in range(1,broj+1):
    if broj%i==0:
        print(i)
`
z[9] = `
'''
Zadatak 9.
Napišite program tako da se deca mogu igrati sa operacijom množenja. 
Program treba da igračima zadaje 10 pitanja iz množenja celih brojeva. 
Posle svakog odgovora program treba da im saopši da li su 
odgovorili tačno ili ne.

Pitanje 1: 3 x 4 = 12
Tačno!
Pitanje 2: 8 x 6 = 44
Pogrešno.  Tačan odgovor je 48.
itd.
Pitanje 10: 7 x 7 = 49
Tačno.
'''

from random import randint
for i in range(10):
    x=randint(2,9)
    y=randint(2,9)
    print("Pitanje ",i+1,": ",x," x ",y,sep="",end=" = ")
    pokusaj=int(input())
    if pokusaj == x*y:
        print(pokusaj,"Tačno!")
    else:
        print(pokusaj," Pogrešno. Tačan odgovor je ",x*y,".",sep="")
`                 
z[10] = `
'''
Zadatak 10.
Napišite program koji traži od korisnika da unese vreme na satu 
između 1 i 12, zatim traži da unesu am ili pm koliko sati unapred 
treba ići. Štampati koliko će sati biti kada ptotekne uneto vreme 
uz odgovarajuće oznake za am ili pm. Dole je prikazan jedan primer.

Unestite sat: 8
am (1) ili pm (2)? 1
Koliko sati unapred? 5
Novi sat: 1 pm
'''

vreme=int(input("Vreme na satu (1-12): "))
doba=int(input("am (1) ili pm (2)? "))
proteklo=int(input("Koliko sati(1-12) unapred: "))
vreme = vreme + proteklo
if vreme > 12:
    vreme = vreme %12
    doba = doba%2+1
print("Novo vreme:",vreme,end=" ")
if doba == 1: print("am")
else: print("pm")
`
    
z[11] = `
'''
Zadatak 11.
Posuda sa bonbonima sadrži nepoznat broj bonbona i ako pogodite 
koliko bonbona ima u njoj osvajate sve bonbone. Vi pitate osobu 
čija je posuda sledeća pitanja: Ako se broj bonbona podeli ravnomerno 
na 5 osoba, koliko će bonbona ostati u posudi? Odgovor je 2. Onda pitate 
o podeli bonbona na 6 osoba i odgovor je 3. Na kraju pitate o podeli 
između 7 osoba i odgovor je 2. Kada bacite pogled na posudu možete reći 
da tamo ima manje od 200 bonbona. Napišite program kojim se određuje koliko 
bonbona ima u posudi.
'''

for i in range(1,200):
    if i%5==2 and i%6==3 and i%7==2:
        print(i)
`
z[12] = `
'''
Zadatak 12.
Napišite program koji omogućava korisniku da protiv računara igra 
igru kamen-papir-makaze. Treba da bude pet rundi i posle pet rundi 
program treba da štampa ko je pobedio a ko izgubio ili je nerešeno.
'''

from random import randint
bc=0
bm=0
for i in range(5):
    c=randint(1,3)
    m=int(input("Izberite Kamen(1),Papir(2),Makaze(3) :"))
    if (m==1 and c==2) or (m==2 and c==3) or (m==3 and c==1):
        bc=bc+1
    elif (c==1 and m==2) or (c==2 and m==3) or (c==3 and m==1):
        bm=bm+1
if bc > bm:
    print("Kompjuter je pobedio",bc,":",bm)
elif bm > bc:
    print("Vi ste pobedili",bm,":",bc)
else:
    print("Nerešeno",bm,":",bc)
`
var num = prompt("Sample question (1-12)", "");
$model.view.setCode(z[num]);
$model.reset();
$("#open_file").val("");
}

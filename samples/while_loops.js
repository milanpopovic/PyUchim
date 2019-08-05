function select_sample_while_loops(){
var z = new Array();

z[1] = `
'''
Zadatak 1.
Donji kod štampa brojeve od 1 do 50. Napišite ekvivalentan program 
koji koristi while petlju.
for i in range(1,51):
    print(i)
'''
i=1
while i <=50:
    print(i)
    i=i+1
`
z[2] = `
'''
Zadatak 2.
a) Napišite program koji koristi while petlju da štampa slova iz stringa, 
jedno slovo u liniji.

b) Modifikujte program tako da štampa svako drugo slovo iz stringa.
'''
s ="abcdefghijklmnopqrstuvwxyz"
# a)
i=0   
while i < len(s):
    print(s[i])
    i=i+1
# b)
i=0
while i < len(s):
    print(s[i])
    i=i+2
`
z[3] = `
'''
Zadatak 3.
Dobar program proverava da li je korisnik uneo ispravan podatak. 
Napišite program koji traži od korisnika da unese težinu u kilogramima 
pa je konvertuje u funte (1 kg = 2.2 funte) . Kad god korisnik unese 
težinu manju od nule program treba da mu kaže da je težina neispravna 
i da traži ponovni unos težine. 
[Koristite while petlju a ne if naredbu]
'''

tezina = float(input("Unesite tezinu u kg: "))
while tezina < 0:
    print("Neispravan podatak!")
    tezina = float(input("Unesite tezinu u kg: "))
print("Težina u funtama:",2.2*tezina)
`
z[4] = `
'''
Zadatak 4.
Napišite program koji traži od korisnika da unese lozinku (password). 
Ako unese ispravnu lozinku program mu saopštava da se ulogovao u sistem. 
U suprotnom program traži da ponovo unese lozinu. Korisnik ima samo pet 
pokušaja za unos lozinke, a posle toga mu program saopštava da je 
izbačen iz sistema.
'''

lozinka = "moja tajna"
broj_pokusaja = 0
pokusaj = input("Unesite lozinku: ")
while pokusaj != lozinka and broj_pokusaja < 4:
    pokusaj = input("Unesite lozinku: ")
    broj_pokusaja = broj_pokusaja + 1
if broj_pokusaja == 5:
    print("Izbačeni ste iz sistema!")
else:
    print("Ulogovani ste u sistem")
`
z[5] = `
'''
Zadatak 5.
Napišite program koji omogućava korisniku da unese unapred nepoznat 
broj rezultata na nekom kolokvijumu. Korisnik signalizira da je završio 
kada unese negativan broj. Štampajte koliko je bilo desetki 
(sa brojem poena 90 ili više). Takođe štampajte i prosečan broj poena.
'''

broj_testova=0
zbir_poena = 0
broj_desetki = 0
poeni = int(input("Broj poena:"))
while poeni>=0:
    zbir_poena = zbir_poena + poeni
    broj_testova = broj_testova +1
    if poeni >= 90:
        broj_desetki = broj_desetki + 1
    poeni = int(input("Broj poena:"))
print("Broj destki:",broj_desetki)
print("Prosek:",zbir_poena/broj_testova)
`
z[6] = `
'''
Zadatak 6.
Setite se da za dati string s, s.index("x") vraća indeks prvog 
pojavljivanja slova x u s, ali vraća grešku ako nema slova x u 
stringu s.

a) Napišite program koji traži od korisnika da unese jedan string 
i jedno slovo. Korišćenjem while petlje program treba da štampa 
indeks prvog pojavljivanja unetog slova ili poruku da string ne 
sadrži to slovo.
b) Napišite isti program korišćenjem for/break petlje.
'''

s = input("Unesite string: ")
slovo = input("Unesite slovo: ")

# a)
i=0
while s[i] != slovo and i < len(s)-1:
    i=i+1
if i == len(s)-1:
    print("Slovo ",slovo,"niju u stringu",s)
else:
    print(i)
# b)
i=0
for z in s:
    if z == slovo:
        print(i)
        break
    else:
        i=i+1
if i == len(s):
    print("Slovo ",slovo,"niju u stringu",s)
`    
z[7] = `
'''
Zadatak 7.
Najveći zajednički delioc (NZD) dva data broja je najveći broj 
kojim su deljiva oba data broja. Na primer NZD(18,42) je 6 zato 
što je 6 najveći broj sa kojim su deljivi i 18 i 42. 
Napišite program koji traži od korisnika da unese dva broja i 
izračunava njihov NZD. Sledi jedan od načina na koji se izračunava 
NZD, poznat kao Euklidov algoritam.
Prvo, izračunajte ostatak kada se veći od dva broja podeli manjim
Drugo, zamenite veči broj sa manjim brojem, a manji broj sa gore 
izračunatim ostatkom.
Ponavljajte ovaj proces sve dok manji broj ne postane 0. 
Najveći zajednički delioc je poslednja vrednost dobijena za veći broj.
'''

a = int(input("Unesite prvi broj: "))
b = int(input("Unesite drugi broj: "))

# a) jednostavnije
if(a<b):
    t=a
    a=b
    b=t
while(b!=0):
    r=b
    b=a%r
    a=r

print(a)

# b) komplikovanije
while b:
    a, b = b, a%b
print(a)
`
z[8] = `
'''
Zadatak 8.
Jedan metod za izračunavanje kvadratnog korena broja 5, 
koji je star 4000- godina, može se opisati ovako
Počnite sa nekim pokušajem recimo 1. Zatim izračunamo:

(1+5/1)/2=3.

Kao sledeće, uzmemo ovo izračunato 3 i zamenimo sa njim 
jedinice u predhodnoj formuli. Tada ćemo dobiti:

(3+5/3)/2=7/3 ≈ 2.33.

Zatim zamenimo trojke u prethodnoj formuli sa 7/3. Dobijamo:

(7/3+5/(7/3))/2=47/21 ≈ 2.24.

Ako nastavimo ovaj proces izračunavanja formule i zamene u formuli 
sa dobijenim rezultatom, dobijaćemo rezultat sve bliži tačnoj vrenosti √5. 
Ovaj metod funkcioniše i za druge brojeve, a ne samo za 5. 

Napišite program koji od korisnika traži da unese neki broj, 
pa pomoću gornjeg metoda izračunajte približnu vrednost kvadratnog korena 
tog broja sa greškom manjom od 1e-10. Približna vrednost je u okviru greške 
1e-10 kada je apsolutna vrednost razlike dve uzastopno izračunate vrednosti 
manja od 1e-10.
'''

a=float(input("Unesite broj: "))
x=1
while abs(x - (x + a/x)/2) > 1e-10:
    x=(x+a/x)/2
print(x)
`
z[9] = `
'''
Zadatak 9.
Napišite program koji ima listu od deset reči, takvih da neke reči imaju 
ponovljena slova a neke nemaju. Napišite program koji iz takve liste 
slučajno bira reč koja nema ponovljenih slova.
'''

from random import choice
lista=["kuća","tabla","računar","ogledalo","taster","jabuka","slika","motor","brod","kajak"]
while True:
    rec = choice(lista)
    for c in rec:
        if rec.count(c) > 1:
            break
    else:
        break
print(rec)
`
z[10] = `
'''
Zadatak 10.
Napišite program koji startuje sa 5 × 5 listom nula i slučajno menja tačno 
10 od tih nula u jedinice.
'''

from random import randint
lista=[[0,0,0,0,0] for i in range(5)]
broj_jedinica = 0
while broj_jedinica < 10:
    i=randint(0,4)
    j=randint(0,4)
    if lista[i][j] == 0:
        lista[i][j] = 1
        broj_jedinica=broj_jedinica+1
print(lista)
`
z[11] = `
'''
Zadatak 11.
Napišite program u kojem imate listz od sedam brojeva koji mogu biti 0 ili 1. 
Pronađite prvu nulu u listi i zamenite je sa jedinicom. 
Ako u listi nema nula štampajte poruku koja to kaže.
'''

l=[]
while len(l)<7:
    b=int(input("Unesite 0 ili 1: "))
    if b==0 or b==1:
        l.append(b)
    else:
        print("Pogresan unos. ",end="")
if 0 not in l:
    print("Lista na sadrzi 0")
else:
    l[l.index(0)]=1
    print(l)
`
z[12] = `
'''
Zadatak 12.
U jednom prethodnom zadatku smo pisali program za igranje igre 
Kamen-Papir-Makaze protiv kompjutera. U tom programu smo imali 
5 rundi igre posle čega smo proglašavali pobednika. Sada želimo 
da broj rundi ne bude fiksan, već da se pobednik proglasi odmah 
čim ostvari 3 pobede.
'''

from random import randint
skor_covek = 0
skor_kompjuter = 0

while skor_covek < 3 and skor_kompjuter < 3:
    izbor_kompjuter=randint(1,3)
    izbor_covek=int(input("Vas izbor: 1-Kamen, 2-Papir, 3-Makaze: "))
    if izbor_kompjuter == 1 and izbor_covek == 3:
        skor_kompjuter = skor_kompjuter + 1
    elif izbor_kompjuter == 1 and izbor_covek == 2:
        skor_covek = skor_covek + 1
    elif izbor_kompjuter == 2 and izbor_covek == 1:
        skor_kompjuter = skor_kompjuter + 1
    elif izbor_kompjuter == 2 and izbor_covek == 3:
        skor_covek = skor_covek + 1
    elif izbor_kompjuter == 3 and izbor_covek == 2:
        skor_kompjuter == skor_kompjuter + 1
    elif izbor_kompjuter == 3 and izbor_covek == 1:
        skor_covek = skor_covek + 1
if skor_covek == 3:
    print("Čestitam. Pobedili ste.")
else:
    print("Žao mi je. Pobedio je kompjuter.")
`
z[13] = `
'''
Zadatak 13.
Napišite program za igranje sledeće igre. Igrač počinje sa sumom od $100. 
U svakoj rundi igre baca se novčić a igrač pokušava da pogodi ishod bacanja. 
Igrač dobija $9 ako pogodi a gubi $10 za svaki promašaj. 
Igra se završava kada igrač ostane bez novca ili kada dostigne $200.
'''

from random import randint
suma=100
while suma < 200 and suma > 0:
    ishod=randint(0,1)
    pokusaj=int(input("Unesite vašu prognozu 0-glava, 1-pismo: "))
    if pokusaj == ishod:
        suma = suma + 9
    else:
        suma=suma - 10
    print(suma)
print("Na kraju igre imate:",suma)
`
z[14] = `
'''
Zadatak 14.
Napišite program za igranje sledeće igre. Imamo listu sa nekoliko naziva 
zemalja iz koje program slučajno bira jednu zemlju. Igrač treba da pogodi 
sva slova iz naziva zemlje, tako što proba slovo po slovo. Pre svakog novog 
pokušaja, program štampa naziv zemlje u kojem su prikazana slova koja je 
igrač do tada pogodio, a crticom (-) prikazuje slova koja još nisu pogođena. 
Na primer, ako je zemlja Canada a igrač je pogodio slova a, d, i n, program 
će prikazati -ana-da. Program nastavlja rad sve dok igrač ne pogodi sva slova 
ili ne pogodi ni jedno.
'''

from random import choice
zemlje=["kanada","srbija","makedonija","slovenija","austrija"]
zamisljena_zemlja = choice(zemlje)
pogodjeno="-"*len(zamisljena_zemlja)
while pogodjeno != zamisljena_zemlja:
    print(pogodjeno)
    s=input("Unesite slovo: ")
    if s in zamisljena_zemlja:
        for i in range(len(zamisljena_zemlja)):
            if s==zamisljena_zemlja[i]:
                pogodjeno=pogodjeno[:i]+s+pogodjeno[i+1:]
print(pogodjeno)
`
z[15] = `
'''    
Zadatak 15.
Kreirajte 6 × 6 listu koja ima 12 jedinica na slučajno odabranim mestima. 
Ostali elementi liste su nule.
'''

from pprint import pprint
from random import randint
l=[[0 for i in range(6)] for j in range(6)]
broj_jedinica = 0
while broj_jedinica < 12:
    i=randint(0,5)
    j=randint(0,5)
    if l[i][j]==0:
        l[i][j]=1
        broj_jedinica=broj_jedinica+1
pprint(l)
`
z[16] = `
Zadatak 16.
'''
Kreirajte slučajnu listu od 9 × 9 elemenata koja sadrži brojeve od 1 do 9 
tako da se brojevi ne ponavljaju ni u jednom redu ili koloni.
'''

from pprint import pprint
from random import randint

l=[1,2,3,4,5,6,7,8,9]
lista=[l]
for i in range(1,9):
    lista.append(l[i:]+l[:i])
broj_promena=0
while broj_promena<10:
    i=randint(0,8)
    j=randint(0,8)
    if i != j:
        lista[i][:],lista[j][:]=lista[j][:],lista[i][:]
        broj_promena=broj_promena+1
pprint(lista)
`
prog = ''
for (var i=1; i < z.length; i++)
  prog = prog+z[i];
$model.view.setCode(prog);
$model.reset();
$("#open_file").val("");
}

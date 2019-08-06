function select_sample_dictionaries(){
var z = new Array();

z[1] = `
'''
Zadatak 1
Napišite program koji uzastopno traži od korisnika da unese 
proizvod i njegovu cenu. Smestite sve unete vrednosti u rečnik 
čiji je ključ naziv proizvoda a vrednost cena proizvoda. 
Kada korisnik završi sa unosom podataka za rečnik, dajte mu 
mogućnost da uzastopno unosi ime proizvoda pa štampajte njegovu 
cenu ili poruku da proizvod nije u rečniku.
'''
proizvodi={}
while 1:
    linija=input("Unesite naziv proizvoda i cenu: ")
    if linija == "kraj": break
    p,c = linija.split()
    c=float(c)
    proizvodi[p]=c

while 1:
    p=input("Unesite naziv proizvoda: ")
    if p == "kraj": break
    if p in proizvodi:
        print(p,"košta",proizvodi[p])
    else:
        print("Nemamo takav proizvod.")
`

z[2] = `
'''
Zadatak 2
Napišite program koji koristi rečnik u kojem se nalazi deset 
imana korisnika i njihovih pasvorda. Program treba da traži 
od korisnika da unesu ime i pasvord. Ako ime nije u rečniku 
program treba da obavesti korisnika da nije registrovan u sistemu. 
Ako je uneto ime u recniku ali korisnik nije uneo ispravan pasvord, 
program treba da ga obavesti da je uneti pasvord neispravan. 
Ako je pasvord ispravan program treba da saopšti korisniku 
da se ulogovao u sistem.
'''

korisnici={'marko':'123','darko':'456'}
ime=input("Ime: ")
password=input("Password: ")
if ime not in korisnici:
    print("Niste reistrovani korisnik")
elif korisnici[ime] != password:
    print("Pogresan password")
else:
    print("Ulogovani ste u sistem")
`
z[3] = `
'''
Zadatak 3
Tražite uzastopno od korisnika da unese ime tima kao i koliko 
je utakmica tim dobio i izgubio. Smestite ove informacije u rečnik 
u kojem će ključ biti ime tima a vrednost lista u formi 
[broj pobeda, broj poraza] .
a) Tražite od korisnika da unese naziv tima, pa korišćenjem rečnika 
izračunajte i štampajte procenat pobeda koje je taj tim ostvario.
b) Korišćenjem rečnika, kreirajte listu čiji su elementi brojevi 
pobeda svih timova.
c) Korišćenjem rečnika kreirajte listu svih timova koji imaju više 
pobeda nego poraza.
'''

tabela={}
while 1:
    linija=input("Naziv tima, broj pobeda, broj poraza: ")
    if linija == "kraj": break
    naziv,pobeda,poraza=linija.split()
    pobeda=int(pobeda)
    poraza=int(poraza)
    tabela[naziv]=[pobeda,poraza]
# a)
naziv=input("Naziv tima: ")
pobeda=tabela[naziv][0]
poraza=tabela[naziv][1]
print("Procenat pobeda:",pobeda/(pobeda+poraza)*100)
# b)
lista=[tabela[k][0] for k in tabela]
print(lista)
# c)
lista=[k for k in tabela if tabela[k][0] > tabela[k][1]]
print(lista)
`

z[4] = `
'''
Zadatak 4
Uzastopno trašite od korisnika da unese rezultate utakmica dva 
tima u formi tim1 golova1 - tim2 golova2. 
Smestite ove informacije u rečnik kod kojeg je kljuc naziv tima 
a vrednost lista oblika [broj pobeda, broj poraza].
'''

tabela={}
while 1:
    linija=input("Unesite rezultat u obliku tim1 golova1 - tim2 golova2: ")
    if linija=="kraj": break
    prvi,drugi=linija.split('-')
    
    tim1,gol1=prvi.split()
    gol1=int(gol1)
    
    tim2,gol2=drugi.split()
    gol2=int(gol2)

    if tim1 not in tabela: tabela[tim1]=[0,0]
    if tim2 not in tabela: tabela[tim2]=[0,0]
    if gol1 > gol2:
        tabela[tim1][0]+=1
        tabela[tim2][1]+=1
    elif gol1 < gol2:
        tabela[tim1][1]+=1
        tabela[tim2][0]+=1
print(tabela)     
`
z[5] = `
'''
Zadatak 5
Korišćenjem rečnika za špil karata kreirajte jednu prostu igru u 
kojoj dvojica igrača dobijaju po tri karte. 
Igrač sa najačom kartom pobeđuje. Ako oba igrača imaju istu najaču 
kartu pobeđuje onaj koji ima drugu najaču kartu, ako je i tada 
nerešeno upoređuju se treće karte. Ako su kod oba igrača sve tri 
karte iste „jačine“ partija je nerešena.
'''

from random import randint,shuffle,sample
spil = [{'vrednost':i, 'boja':c}
        for c in ['pik', 'tref', 'herc', 'karo']
        for i in range(2,15)]
shuffle(spil)
komp=sample(spil,3)
i=0
covek=[]
while i<3:
    k=randint(0,51)
    if spil[k] not in komp:
        covek.append(spil[k])
        i+=1
covek_v =[e['vrednost'] for e in covek]
komp_v  =[e['vrednost'] for e in komp]
covek_v.sort(reverse=True)
komp_v.sort(reverse=True)
print("Vase karte:",[(k['vrednost'],k['boja']) for k in covek])
print("Kompjuter:",[(k['vrednost'],k['boja']) for k in komp])
for i in range(len(covek_v)):
    if covek_v[i] in komp_v:
        del covek_v[i]
        del komp_v[i]
if covek_v == []:
    print("Nereseno")
elif covek_v[0] > komp_v[0]:
    print("Pobedili ste")
else:
    print("izgubili ste")
`

z[6] = `
'''
Zadatak 6
Korišćenjem rečnika za špil karata , 
podelite tri karte. Odredite sledeće:
a) Da li su sve tri karte iste boje (fleš).
b) Da li su sve tri karte iste vrste (triling)
c) Da li postoji par istih (ali ne i triling)
d) Da li tri karte čine liniju (kao recimo 2,3,4 ili (10, Žandar, Dama)
'''
from random import randint,shuffle,sample
spil = [{'vrednost':i, 'boja':c}
        for c in ['pik', 'tref', 'herc', 'karo']
        for i in range(2,15)]
shuffle(spil)
tri=sample(spil,3)
print(tri)
# a) fles
if tri[0]['boja']==tri[1]['boja']==tri[2]['boja']:
    print("Fles")
else:
    print("Nije fles")
# b) triling
if tri[0]['vrednost']==tri[1]['vrednost']==tri[2]['vrednost']:
    print("Triling")
else:
    print("Nije triling")
# c) par
if (tri[0]['vrednost']==tri[1]['vrednost'] or tri[0]['vrednost']==tri[2]['vrednost'] or tri[1]['vrednost']==tri[2]['vrednost'])\
   and not tri[0]['vrednost']==tri[1]['vrednost']==tri[2]['vrednost']:
    print("Par")
else:
    print("Nije par")
# d) linija (skala)
v=[tri[0]['vrednost'],tri[1]['vrednost'],tri[2]['vrednost']]
v.sort()
if v[0]==v[1]-1 and v[1]==v[2]-1:
    print("Linija")
else:
    print("Nije linija")
`
z[7] = `
'''
Zadatak 7
Korišćenjem rečnika za špil karata i Monte Karlo simulacije 
procenite verovatnoću da se dobije fleš kada se podeli pet karata.
'''

from random import randint,shuffle,sample
spil = [{'vrednost':i, 'boja':c}
        for c in ['pik', 'tref', 'herc', 'karo']
        for i in range(2,15)]
brojac=0
for i in range(100000):   # ponavljamo delenje 100000 puta
    shuffle(spil)
    pet=sample(spil,5)
    if pet[0]['boja']==pet[1]['boja']==pet[2]['boja']==pet[3]['boja']==pet[4]['boja']:
        brojac+=1
print("Verovatnoca da se podeli fles: ",brojac/1000,"%")
`

z[8] = `
'''
Zadatak 8
U nekom od ranijih poglavlja sreli smo se sa šifriranjem teksta. 
Kod šifriranja se svako slovo teksta zamenjuje sa nekim drugim slovom. 
Na primer svako a zamenjujemo sa e, svako b sa a itd. 
Napišite program koji traži od korisnika da unese dva stringa. 
Zatim utvrdite da li drugi string može da bude šifrirana verzija prvog 
stringa kod kojeg je izvršena zamena slova kako je gore navedeno. 
Na primer string CXYZ ne može biti šifiran string BOOK jer se O 
pojavljuje sa dva različita slova u šifriranim string CXYZ. 
Takođe, CXXK nije šifrirana verzija od BOOK jer se K zamenilo 
sa samim sobom. S druge strane CXXZ može biti širiran string BOOK. 
Problem može biti rešen sa ili bez rečnika.
'''

prvi=input("Unesite prvi string: ")
drugi=input("unesite drugi string: ")
sifra={}
flag=0
for i in range(len(drugi)):     #pretpostavka je da su stringovi iste duzine
    if drugi[i] in sifra:
        if prvi[i] != sifra[drugi[i]]:
            flag=1
            break
    else:
        sifra[drugi[i]]=prvi[i]
print(sifra)
if flag==1:
    print("Ne moze")
else:
    print("Moze")
`
z[9] = `
'''
Zadatak 9
Pretpostavimo da vam je data sledeća lista stringova
L = ['aabaabac', 'cabaabca', 'aaabbcba', 'aabacbab', 'acababba']
Ovakvi nizovi se pojavljuju na raznim mestima uključujući DNA kodove. 
Korisnik ima string sa samo nekim od slova a ostala mesta su popunjena 
sa zvezdicama. Na primer a**a****. Korisnik bi želeo da zna koji string 
iz liste odgovara njegovom parcijalnom stringu. U primeru koji je dat, 
a**a****, ovoj mustri bi moglao da odgovara prvi i treći član liste. 
Jedan način da se reši ovaj problem je da se kreira rečnik čiji ključevi 
bi bili indeksi za ona slova iz korisnikovog stringa koja nisu zvezdice, 
a vrednosti u rečniku bi bila sama ta slova. Napišite program koji koristi 
ovaj način (ili neki drugi načina ) za pronalaženje stringova koji 
odgovaraju stringu koji unese korisnik ( mustri).
'''

L = ['aabaabac', 'cabaabca', 'aaabbcba', 'aabacbab', 'acababba']
s=input("Unesite string koji ima i zvezdice: ")
recnik={}
for i in range(len(s)):
    if s[i] != "*":
        recnik[i]=s[i]
for rec in L:
    flag=0
    for k,v in recnik.items():
        if rec[k]!=v:
            flag=1
            break
    if flag==0:
        print("Odgovara:",rec)
`
z[10] = `
'''
Zadatak 10
Rečnici predstavljaju pogodan način za smeštanje (pamćenje) 
struktuiranih podataka. Evo jednog takvog primera: 

d=[{'ime':'Janko', 'telefon':'555-1414', 'email':'janko@mail.net'},
   {'ime':'Marko', 'telefon':'555-1618', 'email':'marko@mail.net'},
   {'ime':'Ana', 'telefon':'555-3141', 'email':'';},
   {'ime':'Jovana', 'telefon':'555-2718', 'email':'jovana@mail.net'}]

Napišite program koji čita ovaj rečnik i štampa sledeće:

a) Sve korisnike čiji telefonski broj se završava sa 8.
b) Sve korisnike koji nemaju email adresu.
'''

d=[{'ime':'Janko', 'telefon':'555-1414', 'email':'janko@mail.net'},
   {'ime':'Marko', 'telefon':'555-1618', 'email':'marko@mail.net'},
   {'ime':'Ana', 'telefon':'555-3141', "email":""},
   {'ime':'Jovana', 'telefon':'555-2718', 'email':'jovana@mail.net'}]

# a)
for i in range(len(d)):
    if d[i]["telefon"][-1] == "8":
        print("Korisnik sa poslednjim brojem telefona 8:", d[i]["ime"])

# b)
for j in range(len(d)):
    if d[j]["email"] == "":
        print("Korisnik bez email adrese:", d[j]["ime"])
`

prog = ''
for (var i=1; i < z.length; i++)
  prog = prog+z[i];
$model.view.setCode(prog);
$model.reset();
$("#open_file").val("");
}

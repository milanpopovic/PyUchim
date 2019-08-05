function select_sample_try_except(){
var z = new Array();

z[1] = `
'''
Zadatak 1.
U prikazanom programu pojaviće se greška pri štampanju varijable x,
jer varijabli nije dodeljena vrednost.
Ispravite program tako da se greška ne pojavljuje.
'''

try:
  print(x)
except:
  print("Pojavila se greška")
`

z[2] = `
'''
Zadatak 2.
U prikazanom programu pojaviće se greška pri štampanju varijable x,
jer varijabli nije dodeljena vrednost.
Ispravite program tako da se greška ne pojavljuje.
'''
try:
  print(x)
  print(x/0)
except NameError:
  print("Varijabla x nije definisana")
except:
  print("Pojavija se neka druga greška")
`
z[3] = `
'''
Zadatak 3.
U prikazanom programu pojaviće se greška.
Ispravite program tako da se greška ne pojavljuje.
'''

try:
  pprint("Hello")
except:
  print("Pojavila se greška")
else:
  print("Nije bilo greške")
`
z[4] = `
'''
Zadatak 4.
U prikazanom programu pojaviće se greška.
Ispravite program tako da se greška ne pojavljuje.
'''
try:
  fprint(x)
except:
  print("Pojavila se greška")
finally:
  print("The 'try except' is finished")
`
z[5] = `
'''
Zadatak 5.
U prikazanom programu pojaviće se greška.
Ispravite program tako da se greška ne pojavljuje.
'''
try:
  f = open("demofile.txt")
  f.write("Lorum Ipsum")
except:
  print("Pojavila se greška pri upisivanju u fajl.")
finally:
  print("PyStudio ne dozvoljava upisivanje u fajl.")
`


prog = ''
for (var i=1; i < z.length; i++)
  prog = prog+z[i];
$model.view.setCode(prog);
$model.reset();
$("#open_file").val("");
}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown

Proměnná (angl. *variable*) je nějaký popisek, nebo také odkaz.

Účelem tohoto odkazu je nasměrovat tě ke konkrétní hodnotě, tak ať tuto hodnotu
můžeš později snadno najít a použít.

### Vytvoření proměnné
Pro vytvoření proměnné musíš dodržet tento postup:

1. `jmeno` – na levé straně od rovnítka je **jméno proměnné**. Jak pojmenovat
proměnnou si povíme za chvíli,
2. `=` symbol, který **přiřadí zadanou hodnotu** ke jménu proměnné,
3. `"Lukas"` – je **hodnota**, kterou si chceme uložit na později (nebo ji
použít více než 1x). V tomto případě je to `str`, ale můžeš uložit také
číselné hodnoty aj.


# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Zkus si ukázku níže:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# tvorba proměnné jmeno s hodnotou Lukas
jmeno = "Lukas"

# použití proměnné
print(jmeno)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
Lukas
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Pravidla pro pojmenování najdeš vypsané níže. Jméno proměnné (někdy také odkaz) **může obsahovat** tyto znaky:
1. **Písmenné znaky**
2. **Číselné znaky**
3. **Podtržítka**

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# proměnná jmeno obsahuje jen písemné znaky
jmeno = "Lukas"

# obsahuje i číselné znaky
jmeno2 = "Matous"

# obsahuje podtržítko
moje_jmeno = "Jan"

# jestli chceme proměnné vypsat, použijeme funkci print
print(jmeno)
print(jmeno2)
print(moje_jmeno)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
Lukas
Matous
Jan
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Existují ovšem znaky, které jméno **obsahovat nesmí**:
### Jméno proměnné nesmí **začínat číselným znakem**

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# proměnná nemůže začínat číslem, vypíše chybu
2jmeno = "Marek"
print(2jmeno)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown

Po spuštění dostaneš chybu:
```
Traceback (most recent call last):
  File <string>, line 2
    2jmeno = "Marek"
SyntaxError: invalid syntax,<string>,2,3,2jmeno = "Marek"
```
                

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### Jméno proměnné nesmí obsahovat mezery

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# proměnná obsahuje nesprávně mezeru
moje jmeno = "Tomas"
print(moje jmeno)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown


Opět dostaneš chybové oznámení:
```
Traceback (most recent call last):
  File <string>, line 2
    moje jmeno = "Tomas"
SyntaxError: invalid syntax,<string>,2,6,moje jmeno = "Tomas"
```
            

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### Jméno proměnné nesmí obsahovat speciální znaky (kromě podtržítka)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# proměnná obsahuje znak @
moje@jmeno = "Zdenek"
print(moje@jmeno)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown

Chybová hláška:
```
Traceback (most recent call last):
  File <string>, line 2
    moje@jmeno = "Zdenek"
SyntaxError: cannot assign to operator,<string>,2,12,moje@jmeno = "Zdenek"
```
        

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Tady jsou některá další doporučení, která mají uživatelům pomáhat při zapisování
a čtení.

### Styl pojmenování
Pojmenování ve tvém zápisu by mělo být **konzistentní**, proto si vyber jeden
styl a toho se drž:

`camelCase` (počáteční písmeno malé, každé první písmeno nového slova velké):
```python
mojeJmeno = "Matous"
novaHodnota = 1234
```

`snake_case` (slova zapsaná malými písmeny, oddělená podtržítkem):
```python
moje_jmeno = "Matous"
nova_hodnota = 1234
```



### Konstanty
Pokud se hodnota proměnné nebude měnit (~zůstane konstantní), zapisuj celé
jméno **velkými písmeny**:
```python
TIHOVE_ZRYCHLENI = 9.81
PI = 3.141
```



### Komplikované čtení
Pokud budeš chtít jméno proměnné **označit jedním písmenem**, doporučujeme
**nepoužívat** `l` (malé el), `O` (velké ó), `I` (velké í). Může totiž snadno
dojít k jejich záměně s jiným písmenem.



Dále existují různé druhy písma, kde jsou písmena k nerozeznání od **nuly**
a **jedničky**.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Proměnná je pouze odkaz na hodnotu (jako je *string*, *integer*, *float*), proto
je můžeš používat stejně jako doposud:

### Integer (celé číslo)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
jedno_cislo = 5
druhe_cislo = 6
print(jedno_cislo + druhe_cislo)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem kódu výše bude:
```
11
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### String

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
jmeno = "Karel"
prijmeni = " Novak"
print(jmeno + prijmeni)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
Karel Novak
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"V průběhu programu **ukládáme hodnoty** pro jejich pozdější využití. Jak to provedeš?","answers":[{"answerText":"Hodnotu uložíme do proměnné pomocí dvojtečky,","correct":false},{"answerText":"hodnotu přiřadíme proměnné pomocí znaménka rovná se (`=`),","correct":true},{"answerText":"za hodnotu napíšeme šipku a název proměnné,","correct":false},{"answerText":"za chodu programu nelze ukládat hodnoty.","correct":false}],"explanation":"Pouze tento zápis je správně: `name = \"Bob\"`"}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"Vyber **pravdivé** tvrzení o proměnných v Pythonu.","answers":[{"answerText":"Jméno proměnné může začínat číslem,","correct":false},{"answerText":"jméno proměnné může obsahovat mezeru,","correct":false},{"answerText":"jméno proměnné může obsahovat speciální znaky jako `@` a `%`,","correct":false},{"answerText":"jméno proměnné může obsahovat písmena.","correct":true}],"explanation":"Jméno proměnné (nebo také odkazu) v Pythonu může obsahovat pouze písmena, číslice (avšak nesmí začínat číslem) a podtržítko."}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"Máme proměnnou `x = 6` a `y = 6`. Jaký bude výsledek této operace `x + y`?","answers":[{"answerText":"`\"xy\"`","correct":false},{"answerText":"`\"66\"`","correct":false},{"answerText":"`12`","correct":true},{"answerText":"`66`","correct":false}],"explanation":"S proměnnými můžeme pracovat jako s hodnotami uloženými uvnitř. V naší ukázce jde tedy o sčítání, takže výsledek je `12` (celé číslo)."}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"Máme proměnnou `text = \"##Moje poznamka\"`. Jaký bude výsledek tohto zápisu `print(text[2:])`?","answers":[{"answerText":"`\"Moje poznamka\"`","correct":true},{"answerText":"chyba,tuto operaci nelze provést","correct":false},{"answerText":"`\"M\"`","correct":false},{"answerText":"`\"# \"`","correct":false}],"explanation":"S proměnnými můžeme pracovat jako s hodnotami uloženými uvnitř. V naší ukázce jde tedy o string, takže výsledek je `\"Moje poznamka\"` (string po rozříznutí, *slicing*)."}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Celou dobu pracuješ s proměnnými, které obsahují **jedno číslo**
(`int`, `float`), nebo **jeden řetězec** textových znaků (`str`).

Pojď se nyní přesvědčit, že Python umí pracovat i s více údaji v rámci jedné hodnoty (několik čísel nebo několik textových hodnot).

Takové hodnoty potom budeš označovat jako tzv. **sekvenční datové typy** (tedy
v jedné proměnné bude několik oddělených údajů).

Obecně Python nabízí tyto tři základní sekvenční typy:
1. `list` (z angl. *list*, česky *seznam*),
2. `tuple` (z angl. *tuple*, česky *n-tice*),
3. `range` (z angl. *range*, česky *rozsah*) – na něj přijde řada později.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
`list` je opravdu datový typ, který je doslova tvořen seznamem údajů. Tyto údaje
jsou oddělené **datovým oddělovačem čárkou**.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# tvůj první list
print(["Matous", "Marek", "Lukas"])

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
V příkladu výše si můžeš všimnout některých **charakteristických rysů** pro `list`:
1. **Hranaté závorky** na začátku a na konci listu,
2. **stringy**, které tvůj `list` obsahuje,
3. **čárky**, které oddělují jednotlivé hodnoty.



Opět si můžeš pomocí funkce `type` ověřit datový typ:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# můžeš si ověřit, jestli máme datový typ list
print(type(["Matous", "Marek", "Lukas"]))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Není nutné chápat celkový
význam výstupu funkce `type`. Stačí si povšimnout výrazu `list` ve výstupu.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstup kódu z ukázky výše je:
```
<class 'list'>
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### Jak vytvořit list
Nejprve se podívej na možnosti, jak **vytvořit prázdný list**, kam si budeš moct
v budoucnu ukládat svoje hodnoty:
1. Pomocí **prázdných hranatých závorek**,
2. pomocí zabudované **funkce** `list()`.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# takhle vytvoříš list dle 1. možnosti
prvni_seznam = []

# takhle vytvoříš list dle 2. možnosti
druhy_seznam = list()

# ověř, že obě možnosti vyprodukovali datový typ list
print(type(prvni_seznam))
print(type(druhy_seznam))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem ukázky výše bude:
```
<class 'list'>
<class 'list'>
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### List s hodnotami (neprázdný list)
Pokud potřebuješ vytvořit **neprázdný list**, můžeš údaje zapsat přímo
do hranaté závorky. Stejně jako v první ukázce (možnost 1) této kapitoly.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# listy, které obsahují číselné hodnoty
treti_seznam = [2, 4, 6, 8, 10]
ctvrty_seznam = [1.0, 3.0, 5.0, 7.0, 9.0]

# pomocí funkce print si hodnoty v listech můžeš vypsat
print(treti_seznam)
print(ctvrty_seznam)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
A už víš, že výsledkem bude:
```
[2, 4, 6, 8, 10]
[1.0, 3.0, 5.0, 7.0, 9.0]
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### Jak pracovat s listem
Jednotlivé hodnoty, které `list` obsahuje, můžeš zpřístupnit pomocí jejich **pořadí**, tedy
indexů. Tento princip funguje stejně jako jsme si ukázali u stringů. Mrkni na zápis níž:


# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
muj_seznam = ["Matous", "Marek", "Lukas"]
# chceš si vypsat první hodnotu z muj_seznam, index 0
print(muj_seznam[0])

# vypiš druhou hodnotu s indexem 1
print(muj_seznam[1])

# vypiš poslední hodnotu v listu, s indexem -1
print(muj_seznam[-1])

# poslední hodnota je třetí hodnota v listu
# takže jméno Lukas vypíše i index 2
print(muj_seznam[2])

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výsledkem bude:
```
Matous
Marek
Lukas
Lukas
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Tuple je na první pohled velice podobný **listu** (seznamu):

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
print(("Matous", "Marek", "Lukas"))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Pro srovnání s `tuplem`, který používá kulaté závorky `()`, takhle vypadá `list` s hranatými závorkami `[]`, který už znáš:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
muj_seznam = ["Matous", "Marek", "Lukas"]
print(muj_seznam)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
V příkladu si můžeš všimnout některých **charakteristických rysů** pro `tuple`:
1. **Kulaté závorky** na začátku a na konci tuplu,
2. **stringy**, které náš list obsahuje,
3. **čárky**, které oddělují jednotlivé hodnoty.

### Tak proč mít tuple i list?
Možná se tedy ptáš, proč je nutné mít jak `list`, tak `tuple`, když jsou tak
podobné. Hlavním rozdílem je **změnitelnost**.

| Sekvenční typ | Změnitelnost | Vysvětlení |
| :- | :- | :- |
| `list` (~seznam) | *mutable* (~změnitelný) | Můžeš přidávat a odebírat hodnoty |
| `tuple` (~n-tice) | *immutable* (~nezměnitelný)| Jakmile jej vytvoříš, nelze změnit |



Z tabulky uvedené výše vyplývá, že pokud chceš pracovat se sekvencí, u které
budeš v průběhu **měnit její obsah**, použiješ `list` (~seznam).

Naopak pokud budeš chtít u svého programování napsat takovou sekvenci, kterou
si **nepřeješ změnit** (a dát to vědomí sobě nebo ostatním programátorům),
použiješ `tuple`. Podívej se na ukázku níže:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
nejvetsi_mesta = ("Praha", "Brno", "Ostrava", "Plzen")

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
V tuplu `nejvetsi_mesta` jsou města v České republice, která mají víc jak 150 000 obyvatel.

Pokud je toto zásadní hodnota a nechceš, aby do této proměnné kdokoliv přidal
nějaký další údaj, použiješ `tuple`.

### Jak vytvořit tuple
Vzhledem k faktu, že je `tuple` nezměnitelný, není vytvoření prázdného tuplu moc
výhodné.

Nicméně pokud bychom to vážně potřebovali, postupujeme jako u `list`:
1. Pomocí **prázdných kulatých závorek**,
2. Pomocí zabudované **funkce** `tuple()`.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# vytvoř tuple pomocí prázdných kulatých závorek
prvni_tupl = ()

# vytvoř tuple pomocí zabudované funkce
druhy_tupl = tuple()

# ověř si datový typ prvního tuplu
print(type(prvni_tupl))

# ověř datový typ druhého tuplu
print(type(druhy_tupl))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výsledkem, jak už víš, bude:
```
<class 'tuple'>
<class 'tuple'>
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### Neprázdný tuple
Prázdné tuply nejsou příliš užitečné (obvykle vyžadujeme různé
hodnoty), proto se zaměř na vytvoření **neprázdných tuplů**:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
treti_tupl = ("Praha", "Berlin", "Viden", "Bratislava")

# pozor, tuple můžeš vytvořit i bez kulatých závorek
# ..není to bežné, ale budeš vědět, že to existuje
ctvrty_tupl = 1.3, 3.6, 1.8, 0.4, 1.9

print(type(treti_tupl))
print(type(ctvrty_tupl))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Na výstupu vidíš, že oba zápisy jsou datového typu `tuple`.

Ačkoliv varianta **bez kulatých závorek** není zcela běžná, můžeš se s ní setkat.
```
<class 'tuple'>
<class 'tuple'>
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### Jak pracovat s tuplem
Stejně jako u `list` můžeš i v `tuple` získat hodnoty z konkrétních indexů, případně jej *rozkrájet* (~slicing):

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
treti_tupl = ("Praha", "Berlin", "Viden", "Bratislava")
# vypiš první hodnotu z tuplu, tedy index 0
print(treti_tupl[0])

# vypiš poslední hodnotu z tuplu (použij index -1)
print(treti_tupl[-1])

# vypiš jen první dvě hodnoty
print(treti_tupl[0:2])

# vypiš předposlední hodnotu
print(treti_tupl[-2])

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výsledkem kódu výše pak bude:

```
Praha
Bratislava
('Praha', 'Berlin')
Viden
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"Který z níže uvedených datových typů je `list` (~seznam):","answers":[{"answerText":"`1234`","correct":false},{"answerText":"`[1, 2, 3, 4]`","correct":true},{"answerText":"`(1, 2, 3, 4)`","correct":false},{"answerText":"`1, 2, 3, 4`","correct":false}],"explanation":"`list` můžeme na první pohled odlišit pomocí hranatých závorek."}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"Sekvence `list` (~seznam) je tzv. změnitelný datový typ (~mutable). To znamená, že..:","answers":[{"answerText":"Po vytvoření můžeme upravovat hodnoty v daném listu,","correct":true},{"answerText":"po vytvoření můžeme měnit jméno této hodnoty,","correct":false},{"answerText":"po vytvoření můžeme změnit všechny číselné hodnoty uvnitř na řetězce,","correct":false},{"answerText":"po vytvoření jej můžeme změnit na `tuple`.","correct":false}],"explanation":"`list` jako datovou strukturu můžeme upravovat i potom, co jej vytvoříme."}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"Proč bychom v Pythonu chtěli použít `tuple`?","answers":[{"answerText":"Protože `tuple` může obsahovat více údajů, než `list`,","correct":false},{"answerText":"protože `tuple` po vytvoření nemůže měnit svůj obsah,","correct":true},{"answerText":"protože `tuple` může obsahovat jak číselné, tak textové hodnoty,","correct":false},{"answerText":"protože `tuple` nemá stanovené pořadí hodnot.","correct":false}],"explanation":"Hlavní výhodou je zejména nezměnitelnost této sekvence. Takže ji později nelze upravovat."}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Obecně řečeno Python disponuje několika typy funkcí. Tebe budou zajímat hlavně
tyto:
1. **Zabudované funkce** (z angl. *built-in functions*),
2. **Uživatelské funkce** (z angl. *user-defined functions*) – ty přijdou na řadu později.

Funkce jsou v podstatě pomocné nástroje, které ti umožní snazší a efektivnější
práci (např. zadávat hodnoty do tvého programu nebo měnit datovou strukturu
jedné hodnoty na jinou).

To, že nesou označení **zabudované**, znamená, že je máš k dispozici ihned
po instalaci. Tedy v každém souboru (s příponou `.py`), který do budoucna
vytvoříš.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
V uplynulých kapitolách jsou již některé **zabudované funkce** použité.

Byla to zrovna funkce `print` nebo `type`. Pojď si nyní pro kompletnost ještě jednou ukázat, jak se taková *zabudovaná funkce* používá:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# když spustíš tento kód, neuvidíš žádný výstup
type("abc")

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Proč nevidíš žádný výstup? Protože funkce `type` Pythonu oznámí, aby ti určil datový typ hodnoty `"abc"`.

Ale **neoznámí**, aby tento datový typ **vypsal**. Když potřebuješ něco vypsat, musíš použít funkci `print`.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Zkusme si to ještě jednou, ale teď hodnotu datového typu vypíšeš.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# type("abc") ti určí datový typ hodnoty, která je v závorkách
# funkci print použij, ať uvidíš výstup z editoru
print(type("abc"))

# ..stejně jako u desetinných čísel
print(type(3.1416))

# ..nebo listu
print(type(["m", "h"]))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown

Po spuštění ukázky dostaneš výstup:
```
<class 'str'>
<class 'float'>
<class 'list'>
```

            

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### Pravidla
Všimni si, že její spuštění má jistá **pravidla**:
1. Spustíš funkci pomocí jejího jména, `type`,
2. ihned za jménem následují **kulaté závorky**,
3. do kulatých závorek zapíšeš **hodnoty**, se kterými chceš pracovat,
4. zabudované funkce umějí často pracovat **s různými datovými** typy (`str`, `float`, `list`),
5. výsledek, který získáš použitím funkce, si můžeš schovat do proměnné.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Ukázka uložení výstupu do proměnné:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# do proměnné muj_typ si uložíš výsledek funkce type
muj_typ = type("@")

# pokud chceš výsledek vypsat, použij funkci print
print(muj_typ)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown

Výsledkem tak bude:
```
<class 'str'>
```

            

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Účelem tohoto materiálu není žádné šprtání všech jmen funkcí. Ani zkušenější
programátoři si nepamatují všechny. Důležité je vědět, **kam se podívat**, až je
budeš potřebovat.

Níže najdeš tabulku s **některými** zabudovanými funkcemi (ne se všemi!)

| Jméno funkce| Účel funkce |
| :-: | :- |
| `type` | Vrací datový typ zadané hodnoty |
| `round` | Zaokrouhlí zadanou hodnotu na stanovený počet desetinných míst |
| `abs` | Vrací absolutní hodnotu |
| `int` | Vrací *integer* ze zadaného stringu nebo číselného údaje |
| `float` | Vrací *float* ze zadaného stringu nebo číselného údaje |
| `str` | Vrací *string* ze zadané hodnoty |
| `list` | Vrací nový objekt, sekvenční datový typ *list* |
| `tuple` | Vrací nový objekt, sekvenční datový typ *tuple* |
| `help` | Vrací nápovědu k zadanému objektu |
| `print` | Vypisuje zadané hodnoty jako výstupy |
| `input` | Umožňuje ukládat vstupy od uživatele |
| `len` | Vrací délku zadané hodnoty |
| `max` | Vrací největší hodnotu |
| `min` | Vrací nejmenší hodnotu |
| `sum` | Vrací součet všech hodnot |
| `pow` | Vrací zadanou hodnotu umocněnou o zadaný exponent |

Pokud máš se zabudovanými funkcemi nějaké zkušenosti nebo tě zajímá, které
další můžeš v rámci Pythonu využít, mrkni na
<a href="https://docs.python.org/3/library/functions.html#pow" target="_blank">oficiální tabulku všech zabudovaných funkcí</a>.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Nakonec této kapitolky si některé ze zabudovaných funkcí vyzkoušíš, ať se ti
s nimi později snáze pracuje.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### print
Funkci `print` už znáš. Je veliký pomocník a budeme ji používat **velice často**. Na zopakování – slouží k vypsání hodnoty v proměnných a stringových textů:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# vypiš celé číslo - int
print(12)

# vypiš text - string
print("Ahoj, tady Matous")

# ulož float do proměnné a vypiš ho
desetinne_cislo = 2.718
print(desetinne_cislo)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
12
Ahoj, tady Matous
2.718
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Dokonce můžeš kombinovat vypisování několika údajů (různých datových typů):

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
jmeno = "Matous"
vek = 99
print("Jmenuji se", jmeno, ". Je mi", vek, "let.")

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
Jmenuji se Matous . Je mi 99 let.
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### help
Funkce `help` ti umožní zobrazit nápovědu. Samozřejmě můžeš pořád hledat
na internetu, ale občas je dobré mít poznámky i offline. Pojď si 
vypsat nápovědu pro funkci `print`:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# Pro vypsání help(str) použij print
print(help(print))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Nápověda ti může ze začátku **méně sedět**. Jednak kvůli angličtině, jednak je poměrně podrobná.

Vůbec se toho neboj. Teprve časem ti začne dokumentace dávat lépe smysl. Pro teď ti stačí tyto materiály.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstup:
```
print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
```
```
Prints the values to a stream, or to sys.stdout by default.
```
```
Optional keyword arguments:
file:  a file-like object (stream); defaults to the current sys.stdout.
sep:   string inserted between values, default a space.
end:   string appended after the last value, default a newline.
flush: whether to forcibly flush the stream.
print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
...
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### round
Funkce `round` umí zaokrouhlit desetinné čísla. První zadanou hodnotou je desetinné
číslo, druhou zadanou hodnotou je desetinný řád:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# zaokrouhli číslo 0.33333 na 2 desetinná místa
print(round(0.33333, 2))

# ..na 4 místa
print(round(0.987654, 4))

# ..a opět na 2 místa
print(round(2.675, 2))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výsledkem bude:
```
0.33
0.9877
2.68
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### abs
Funkce `abs` vrací absolutní hodnotu zadaného čísla:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
print(abs(-1))
print(abs(-1.1234))
print(abs(223))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výsledkem bude:
```
1
1.1234
223
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### int
Funkce `int` umí převádět **některé** datové typy na celá čísla:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# převeď float na int
print(int(1.11))

# převeď string na int
print(int("11"))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
1
11
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### float
Funkce `float` umí převádět **některé** datové typy na desetinná čísla:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# z celého čísla (int) udělej desetinné
print(float(12))

# string převeď na float
print(float("1.12"))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
12.0
1.12
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### str
Funkce `str` umí převádět **některé** datové typy na string:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# z int udělej string
print(str(12))

# z float udělej string
print(str(1.12))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
12
1.12
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### list
Funkce `list` umí vytvořit (také převést) některé datové typy na `list`.

Pokud jí zadáš např. `string`, sama si jej rozdělí (po indexu) na hodnoty v
seznamu:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# vytvoř list ze stringu
print(list("abc"))

# vypiš prázdný list
print(list())

# do proměnné ulož dva stringy a vypiš list
muj_tupl = ("a", "b")
print(list(muj_tupl))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
['a', 'b', 'c']
[]
['a', 'b']
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### tuple
Funkce `tuple` pracuje velice podobně jako funkce `list`, ale jejím výsledkem
bude vždycky `tuple`:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# ze stringu vytvoř tuple
print(tuple("abc"))

# vypiš prázdný tuple
print(tuple())

# v proměnné máš uložený list
# tento list pomocí funkce předělej na tuple
muj_seznam = ["a", "b"]
print(tuple(muj_seznam))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
('a', 'b', 'c')
()
('a', 'b')
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### input
Pokud budeš potřebovat zadat do svého zápisu nějakou hodnotu, funkce `input` ti
může pomoct. Nejen, že ti umožní zapsat hodnotu, ale současně si ji můžeš
schovat do proměnné.

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# do proměnné jmeno si ulož hodnotu, kterou napíše uživatel
# po spuštění kódu vyskočí okno, do kterého zapíšeš text
jmeno = input()

# uloženou hodnotu v proměnné pak vypíšeme
print(jmeno)

# můžeš ji vypsat i s nějakým textem
print("Tvé jméno je:", jmeno)

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Jestli zadáš ve vyskakovacím okně **Matouš**, výstupem kódu bude:
```
Matouš
Tvé jméno je: Matouš
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
A pozor – mysli na to, že ať už napíšeš **čísla** nebo **písmena**, funkce `input` z nich
ve výsledku automaticky udělá `str`.

Jestli potřebuješ číslo (`int`), musíš výstup funkce `input` ručně převést:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# i když vidíš zadané číslo na výstupu, je to datový typ string
cislo = input("Zadej cislo:")
print("Bylo zadané číslo:", cislo)

# jestli je výstup funkce input string si můžeš ověřit
print(type(cislo))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown

Jestli po spuštění kódu z ukázky výše zadáš např. číslo `33`, výstupem bude:
```
Bylo zadané číslo: 33
<class 'str'>
```

            

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Samotný převod výstupu funkce `input` ze *stringu* na `int` uděláme pomocí funkce `int`, kterou již také znáš:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# pomocí funkce int nastavíš, že hodnota bude datového typu int
cislo_int = int(input())
print(cislo_int)

# ověř, jestli je cislo_int vážně datový typ int
print(type(cislo_int))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### len
Jakmile do funkce `len` zapíšeš nějaký sekvenční datový typ (i string), vrátí
ti jeho délku:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# kolik znaků má string abc?
print(len("abc"))

# délka prázdného listu
print(len([]))

# délka listu s 5 hodnotami
print(len(list("abcde")))


# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
3
0
5
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### min
Funkce `min` vrací nejmenší údaj ze dvou a více hodnot (případně sekvence).
Pokud se nejmenší údaj objeví vícekrát, funkce vrátí první, který najde:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# vypiš nejmenší údaj z čísel 1, 2, 3
print(min(1, 2, 3))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
1
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### max
Funkce `max` vrací největší údaj ze dvou a více hodnot (případně sekvence).
Pokud se největší údaj objeví vícekrát, funkce vrátí první, který najde:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# najdi největší hodnotu
print(max(11, 12, 13, 13, 14, 14))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
14
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### sum
Funkce `sum` vrátí součet všech číselných hodnot v sekvenci:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# ulož hodnoty 1, 2, 3, 4 do proměnné
cela_cisla = (1, 2, 3, 4)

# pomocí funkce sum sečti čísla uložené v proměnné
print(sum(cela_cisla))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
10
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
### pow
Funkce `pow` umocňuje, tím pádem potřebuje dvě vstupní hodnoty. První hodnota je číselný údaj, druhá hodnota je exponent:

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: pythonRepl
# hodnota tři na druhou
print(pow(3, 2))   

# hodnota sto na druhou
print(pow(100, 2))

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: markdown
Výstupem bude:
```
9
10000
```

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"Jak se nazývá **built-in funkce**, která vypíše informaci na obrazovku?","answers":[{"answerText":"`vypis`","correct":false},{"answerText":"`draw`","correct":false},{"answerText":"`write`","correct":false},{"answerText":"`print`","correct":true}],"explanation":"Pomocí funkce `print` můžeš vypisovat hodnoty na výstup."}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"Který z následujících `příkazů` skončí chybou?","answers":[{"answerText":"`int(\"43.92\")`","correct":true},{"answerText":"`int(56.6)`","correct":false},{"answerText":"`str(42)`","correct":false},{"answerText":"`int('43')`","correct":false}],"explanation":"Funkce `int()` umí převést datový typ `float` (desetinné číslo) na `integer` (celé číslo), nebo `string` obsahující celé číslo na `int`. Neumí však provést oba převody současně."}

# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a
## Widget Type: testQuestion
{"questionText":"Jaký bude výsledný datový typ z takového zápisu `jmeno = input('Tvoje jmeno?')`","answers":[{"answerText":"`int`","correct":false},{"answerText":"`float`","correct":false},{"answerText":"`str`","correct":true},{"answerText":"`array`","correct":false}],"explanation":"Funkce `input()` vrací automaticky datový typ `str` (řetězec)."}


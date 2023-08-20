import { DS,S,ATC} from "../assets"
import {TbCarTurbine, TbDeviceRemote, TbEngine, TbHexagonLetterT} from 'react-icons/tb'
import {MdOutlineTableRestaurant} from 'react-icons/md'
import {GiVacuumCleaner,GiAutomaticSas} from 'react-icons/gi'
import {AiOutlineTool} from 'react-icons/ai'


export const navItems = [
    {
        name: 'home',
        url: '',
        title: 'Home'
    },
    {
        name: 'galerija',
        url: 'galerija',
        title: 'Galerija'
    },
    {
        name: 'kontakt',
        url: 'kontakt',
        title: 'Kontakt'
    }
]
export const machines =[
    {
        name: 'S Serija',
        img: {home: S},
        url: 's_serija',
        description1: ` - je naš standardni proizvod sa jednim obradnim
        motorom koji je namenjen za rad u malim ili srednjim industrijama
        gde se obrada materijala vrši uglavnom sa jednim obradnim alatom
        (glodalom) po projektu.
        `,
        description2: `Ukoliko je potrebno korišcenje više različitih alata za jedan projekat,
        postupak izmena alata je olakšan automatskim umeravanjem Z ose.
        `,
        description3: `S serija je odličan izbor za male biznise u kojima se projekti često
        menjaju.`

    },
    {
        name: 'DS Serija',
        img: {home: DS},
        url: 'ds_serija',
        description1: ` - je naš proizvod sa dva obradna motora, namenjen za
        rad u srednjim ili velikim industrijama gde se najčešce obavalja
        serijska proizvodnja.
        `,
        description2: `Ovaj model je odlična zamena za ATC obradne motore, jer pruža
        mogućnost korišcenja dva različita alata koji se pozivaju u jednom
        programu.
        `,
        description3: `DS serija je odličan izbor za industrije koje se bave obradom
        Alubond-a (Aluminium composite panels) i HPL-a (High Pressure
        Laminate), kao i mnogim različitim industrijama.`
    },
    {
        name: 'ATC Serija',
        img: {home: ATC},
        url: 'atc_serija',
        description1: ` - je naš proizvod sa automatskom izmenom alata
        koji je namenjen za rad u srednjim i velikim industrijama, gde se
        najcešće proizvodnja bazira na serijskoj proizvodnji i u kojoj projekti
        zahtevaju čestu izmenu različitih obradnih alata.`,
        description2: `ATC Obradni motor koristi nosače alata koji su mnogo stabilniji i
        precizniji prilikom obrade. Velika brzina izmene alata ovaj model čini 
        izuzetno produktivnim i poželjnim za velike industrije.`,
        description3: `ATC serija omogućava bržu i precizniju obradu, uz veću fleksibilnost
        i produktivnost, zahvaljujući automatskoj izmeni alata.`,
    },
]
export const tableForm =[
    {
        name: 'Modeli',
        value: ['1116 Pico','1316 Nano',"1522 Mega","1526 Giga","1530 Tera","1841 Exa"]
    },
    {
        name: "Broj osa",
        value: ["3 ili 4","3 ili 4","3 ili 4","3 ili 4","3 ili 4","3 ili 4"]
    },
    {
        name: "Velicina stola",
        value: ["1100x1600 mm","1300x1600 mm","1500x2200 mm","1500x2600 mm","1500x3000 mm","1800x4100 mm"]
    },
    {
        name: "Prolaz ispod portala",
        value: ["200 mm","200 mm","200 mm","200 mm","200 mm","200 mm"]
    },
    {
        name: "Hod X",
        value: ["1100 mm","1300 mm","1500 mm","1500 mm","1500 mm","1800 mm"]
    },
    {
        name: "Hod Y",
        value: ["1600 mm","1600 mm","2200 mm","2600 mm","3000 mm","4100 mm"]
    },
    {
        name: "Hod Z",
        value: ["300 mm","300 mm","300 mm","300 mm","300 mm","300 mm"]
    },
    {
        name: "Dimenzije mašine",
        value: ["1500x1950 mm","1700x1950 mm","1900x2550 mm","1900x2950 mm","1900x3350 mm","2280x4500 mm"]
    },
    {
        name: "Brzina posmaka",
        value: ["30 m/min","30 m/min","30 m/min","30 m/min","30 m/min","30 m/min"]
    },
    {
        name: "Obradni motor - glavni",
        value: ["5.5 ili 9 kW","5.5 ili 9 kW","5.5 ili 9 kW","5.5 ili 9 kW","5.5 ili 9 kW","5.5 ili 9 kW"]

    },
    {
        name: "*Obradni motor - pomoćni",
        value: ["3.2 kW","3.2 kW","3.2 kW","3.2 kW","3.2 kW","3.2 kW"]
    },
    {
        name: "Prihvat alata",
        value: ["ER 25","ER 25","ER 25","ER 25","ER 25","ER 25"]

    },
    {
        name: "Hibridni servo koračni motor",
        value: ["Nema 34 8.5 Nm","Nema 34 8.5 Nm","Nema 34 8.5 Nm","Nema 34 8.5 Nm","Nema 34 8.5 Nm","Nema 34 8.5 Nm"]

    },
    {
        name: "Linearni sistemi (X,Y,Z)",
        value: ["HGR 25", "HGR 25", "HGR 25", "HGR 25", "HGR 25", "HGR 25"]

    },
    {
        name: "Zupčasti sistemi (X,Y,Z)",
        value: ["Helikoidna letva M1.25", "Helikogidna letva M1.25", "Helikoidna letva M1.25", "Helikoidna letva M1.25", "Helikoidna letva M1.25", "Helikoidna letva M1.25"]
    },
    {
        name: "Kuglično navojno vreteno (Z)",
        value: ["SFU - 2010", "SFU - 2010", "SFU - 2010", "SFU - 2010", "SFU - 2010", "SFU - 2010"]
    },
    {
        name: "**Nosač alata",
        value:["BT-30 (ISO-30)", "BT-30 (ISO-30)", "BT-30 (ISO-30)", "BT-30 (ISO-30)", "BT-30 (ISO-30)", "BT-30 (ISO-30)"]
    },
    {
        name: "**Broj alata",
        value: ["5 ili 10", "5 ili 10", "5 ili 10", "5 ili 10", "5 ili 10", "5 ili 10"]
    }
]
export const tools=[
    {
        icon: TbCarTurbine,
        name: "Vazdušna turbina",
        description: "Kada se vazdušna turbina koristi za stvaranje vakumske sile, ona stvara niski pritisak koji može usisati materijal na radnu površinu CNC mašine i održavati ga tamo dok se obrađuje"

    },
    {
        icon: TbDeviceRemote,
        name: "Bežićni kontroler",
        description: "Bežični kontroleri omogućavaju operateru da se slobodno kreže oko mašine i pristupi svim delovima bez ograničenja koja bi mogla uzrokovati kablovska veza"

    },
    {
        icon: TbEngine,
        name: "Servo motor",
        description: "Servo motori su bolji izbor od hibridnih koračnih motora iz nekoliko razloga: precizniji su, mogu postiži vece brzine, imaju bolji obrtni moment i manje su veličine"
    },
    {
        icon: MdOutlineTableRestaurant,
        name: "Vakum sto",
        description: "Vakum sto sa poljima koji se mogu nezavisno aktivirati u zavisnosti od veličine materijala koji se obrađuje i koja sluŽe za fiksiranje materijala na radnU površinu"
    },
    {
        icon: GiVacuumCleaner,
        name: "Otprašivač",
        description: "Samostalna jedinica za otprašivanje sa motorom snage 1.1 kW sa izmenjivim vrećama za skupljanje piljevine (iverja, strugotine, prašine)",

    },
    {
        icon: TbHexagonLetterT,
        name: "T-slot sto",
        description: "Aluminijumski T-slot radni sto se često koristi na CNC ruter mašinama za obradu materijala koji zahtevaju čvrst i stabilan oslonac i koji zahtevaju precizno pozicioniranje"

    },
    {
        icon: GiAutomaticSas,
        name: "ATC Obradni motor",
        description: "U ponudi imamo ATC (Automatic Tool Change) obradne motore snage 3.2 kW, 5.5 kW I 9 Kw sa prihvatom za BT-30 (ISO-30) nosač alata. Maksimalni obrtaji motora su 24000 O/min"
    },
    {
        icon: AiOutlineTool,
        name: "ER Obradni motor",
        description: " U ponudi imamo obradne motore snage 3.2 kW, 4.5 kW, 5.5 kW sa vodenim hlađenjem sa maksimalnim obrtajima od 24000 O/min"
    }

]
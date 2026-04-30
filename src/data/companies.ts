import type { Company } from "./index";

export interface CompanyWithContact extends Company {
  ansprechpartner?: string;
}

export const companies: CompanyWithContact[] = [
  {
    "id": "1",
    "name": "Volutus GmbH/ Chandyshop/ Biergarten",
    "branche": "Hotel & Gastronomie",
    "initialen": "VC",
    "adresse": "Plau am See",
    "telefon": "+49 1522 3105755",
    "email": "info@volutus.de",
    "website": "",
    "bewerbungslink": "",
    "ansprechpartner": "Herr Kröcher",
    "anstellungsarten": [
      "Ferienjob",
      "Festanstellung",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Verkauf / Service",
        "beschreibung": "",
        "anstellungsart": "Ferienjob"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Rabatt auf das komplette Sortiment",
      "2 Monate Urlaub im Jahr"
    ],
    "schnuppertage": true,
    "aktiv": true
  },
  {
    "id": "2",
    "name": "ETL Schmidt & Partern GmbH Steuerberatungsgesellschaft & Co. Plau am See KG",
    "branche": "Steuerberatung & Recht",
    "initialen": "ES",
    "adresse": "Plau am See",
    "telefon": "+49 38735 8340",
    "email": "karin.rosenow@etl.de",
    "website": "https://www.steuerberatung-plau.de/",
    "bewerbungslink": "",
    "ansprechpartner": "Karin Rosenow",
    "anstellungsarten": [
      "Ausbildung",
      "Duales Studium"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Steuerfachangestellte/r",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Kauffrau/Kaufmann für Büromanagement",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Homeoffice-Optionen",
      "Jobrad",
      "modern ausgestatette Arbeitsplätze"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/etl-schmidt-und-partern-gmbh-steuerberatungsgesellschaft-und.png"
  },
  {
    "id": "3",
    "name": "Febe Bau GmbH",
    "branche": "Handwerk & Bau",
    "initialen": "FB",
    "adresse": "Plau am See",
    "telefon": "+49 173 2071659",
    "email": "buchhaltung@feddeler.com",
    "website": "http://www.febe-bau.com/",
    "bewerbungslink": "",
    "ansprechpartner": "Anne Feddeler",
    "anstellungsarten": [
      "Ausbildung",
      "Ferienjob",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Handwerk",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Übernahmegarantie (Azubis)"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/febe-bau-gmbh.png"
  },
  {
    "id": "4",
    "name": "Deutsche Proventus AG",
    "branche": "Finanz- & Versicherungswesen",
    "initialen": "DP",
    "adresse": "Plau am See",
    "telefon": "+49 172 1619298",
    "email": "katharina.krause@proventus.de",
    "website": "https://www.proventus.de/katharina-krause.html",
    "bewerbungslink": "",
    "ansprechpartner": "Katharina Krause",
    "anstellungsarten": [
      "Boys & Girls Day",
      "Festanstellung",
      "Praxislerntag",
      "Minijob",
      "Teilzeit",
      "Vollzeit"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Finanzen / Versicherungen",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      },
      {
        "id": "s_1",
        "titel": "Kundenberatung",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      },
      {
        "id": "s_2",
        "titel": "Vertrieb / Sales",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      },
      {
        "id": "s_3",
        "titel": "Büro / Organisation",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      }
    ],
    "benefits": [
      "Bonus / Erfolgsprämien",
      "Mitarbeiter-Rabatte",
      "Weiterbildungsbudget"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/deutsche-proventus-ag.svg"
  },
  {
    "id": "5",
    "name": "Kindertagesstätte Zwergenparadies",
    "branche": "Bildung & Soziales",
    "initialen": "KZ",
    "adresse": "Plau am See",
    "telefon": "+49 38735 41897",
    "email": "kita.plau@kloster-dobbertin.de",
    "website": "https://kloster-dobbertin.de/unsere-einrichtungen/bildung-und-foerderung/kita-zwergenparadies-plau/",
    "bewerbungslink": "",
    "ansprechpartner": "Kirstin Laabs",
    "anstellungsarten": [],
    "stellenangebote": [],
    "benefits": [],
    "schnuppertage": false,
    "aktiv": true,
    "logo": "/logos/kindertagesstaette-zwergenparadies.webp"
  },
  {
    "id": "6",
    "name": "Bauservice & Transporte Tschiersch-Seehafer",
    "branche": "Transport & Logistik",
    "initialen": "BT",
    "adresse": "Plau am See",
    "telefon": "+49 1520 2302788",
    "email": "info@bauservice-transporte-tschiersch-seehafer.de",
    "website": "https://www.bauservice-transporte-tschiersch-seehafer.de/",
    "bewerbungslink": "",
    "ansprechpartner": "Sven Tschiersch-Seehafer",
    "anstellungsarten": [
      "Festanstellung"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Tief-und Straßenbauer",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      },
      {
        "id": "s_1",
        "titel": "Baggerfahrer",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      }
    ],
    "benefits": [
      "Weihnachtsgeld und ggf",
      "Sonderzahlung (Bonus)"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/bauservice-und-transporte-tschiersch-seehafer.png"
  },
  {
    "id": "7",
    "name": "WiFöG swm",
    "branche": "Öffentlicher Dienst",
    "initialen": "WS",
    "adresse": "Plau am See",
    "telefon": "+49 3871 7225607",
    "email": "haroyan@invest-swm.de",
    "website": "https://www.invest-swm.de/",
    "bewerbungslink": "",
    "ansprechpartner": "Haroyan, Voskehat",
    "anstellungsarten": [],
    "stellenangebote": [],
    "benefits": [],
    "schnuppertage": false,
    "aktiv": true,
    "logo": "/logos/wifoeg-swm.png"
  },
  {
    "id": "8",
    "name": "Kita Bunte Stifte",
    "branche": "Bildung & Soziales",
    "initialen": "KB",
    "adresse": "Plau am See",
    "telefon": "+49 38735 492263",
    "email": "kitabuntestifte@ill-ev.de",
    "website": "https://ill-ev.de/kindertagesstaetten/landkreis-ludwigslust-parchim/kindertagesstaette-bunte-stifte/unsere-einrichtung",
    "bewerbungslink": "",
    "ansprechpartner": "Yvonne Kuhring",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Erzieher/innen",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Urlaubs & Weihnachtsgeld",
      "2 urlaubsfreie Tage (24.12. und 31.12.)",
      "kostenfreie Mittagsverpflegung",
      "1x jährlich großes Betriebsfest"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/kita-bunte-stifte.png"
  },
  {
    "id": "9",
    "name": "Eiscafe Al Ponte",
    "branche": "Hotel & Gastronomie",
    "initialen": "EA",
    "adresse": "Plau am See",
    "telefon": "+49 172 4871056",
    "email": "eiszeit@eiscafe-al-ponte.de",
    "website": "https://eiscafe-al-ponte.de",
    "bewerbungslink": "",
    "ansprechpartner": "Marlis Rupp",
    "anstellungsarten": [
      "Ferienjob",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Gastronomie",
        "beschreibung": "",
        "anstellungsart": "Ferienjob"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Eis :-)"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/eiscafe-al-ponte.png"
  },
  {
    "id": "10",
    "name": "Bauunternehmen Ahrens",
    "branche": "Handwerk & Bau",
    "initialen": "BA",
    "adresse": "Plau am See",
    "telefon": "+49 175 4043206",
    "email": "Bau.ahrens@mail.de",
    "website": "",
    "bewerbungslink": "",
    "ansprechpartner": "Olaf Ahrens",
    "anstellungsarten": [
      "Ausbildung",
      "Ferienjob",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Maurer und Betonbauer",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Übernahmegarantie (Azubis)"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/bauunternehmen-ahrens.jpg"
  },
  {
    "id": "11",
    "name": "Ferienpark Heidenholz & Aparthotel „Am See“",
    "branche": "Hotel & Gastronomie",
    "initialen": "FH",
    "adresse": "Plau am See",
    "telefon": "+49 38735 850",
    "email": "info@ferienpark-heidenholz.de",
    "website": "https://ferienpark-heidenholz.de",
    "bewerbungslink": "",
    "ansprechpartner": "Timo Weisbrich",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Duales Studium",
      "Ferienjob",
      "Festanstellung",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Hotelfachmann/frau",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Gastronomie (Küche/Service)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_2",
        "titel": "Tierpflege",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_3",
        "titel": "Buchhaltung",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_4",
        "titel": "Facility Management",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Folgen"
    ],
    "schnuppertage": false,
    "aktiv": true,
    "logo": "/logos/ferienpark-heidenholz-und-aparthotel-am-see.jpg"
  },
  {
    "id": "12",
    "name": "Ganzlin Beschichtungspulver GmbH",
    "branche": "Industrie & Produktion",
    "initialen": "GB",
    "adresse": "Plau am See",
    "telefon": "+49 38737 3030",
    "email": "bewerbung@ganzlin.com",
    "website": "https://www.ganzlin.com",
    "bewerbungslink": "",
    "ansprechpartner": "André Beckerman",
    "anstellungsarten": [
      "Ausbildung",
      "Duales Studium",
      "Ferienjob",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Ausbildung Mechatroniker",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Ausbildung Fachkraft für Lagerlogistik",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_2",
        "titel": "Ausbildung Industriekaufmann",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_3",
        "titel": "Mitarbeiter Wareneingang und Warenausgang",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_4",
        "titel": "Mitarbeiter Produktion",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_5",
        "titel": "Mitarbeiter Produktentwicklung",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Urlaubs & Weihnachtsgeld",
      "Übernahmegarantie (Azubis)",
      "Jeden Monat einen Tankgutschein"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/ganzlin-beschichtungspulver-gmbh.png"
  },
  {
    "id": "13",
    "name": "Lenk Küchendesign & Montageservice",
    "branche": "Handwerk & Bau",
    "initialen": "LK",
    "adresse": "Plau am See",
    "telefon": "+49 1520 2979163",
    "email": "info@kuemo-lenk.de",
    "website": "https://kuemo-lenk.de/",
    "bewerbungslink": "",
    "ansprechpartner": "Dürten Lenk",
    "anstellungsarten": [
      "Festanstellung"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Handwerk",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      },
      {
        "id": "s_1",
        "titel": "Bürokauffrau",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Urlaubs & Weihnachtsgeld"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/lenk-kuechendesign-und-montageservice.png"
  },
  {
    "id": "14",
    "name": "VR Bank Mecklenburg eG",
    "branche": "Finanz- & Versicherungswesen",
    "initialen": "VB",
    "adresse": "Plau am See",
    "telefon": "+49 385 54905017",
    "email": "susanne.kleist@vrbankmecklenburg.de",
    "website": "https://www.vrbankmecklenburg.de",
    "bewerbungslink": "",
    "ansprechpartner": "Susanne Kleist",
    "anstellungsarten": [
      "Ausbildung",
      "Duales Studium",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Bankkaufmann/Bankkauffrau (w/m/d)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "andere Berufe im Bereich Banken und Finanzen",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Homeoffice-Optionen",
      "Jobrad",
      "Urlaubs & Weihnachtsgeld",
      "Health-Management und Betriebliches Gesundheitsmanagement",
      "Sabbatical-Option",
      "Erholungsbeihilfe und vieles mehr"
    ],
    "schnuppertage": false,
    "aktiv": true,
    "logo": "/logos/vr-bank-mecklenburg-eg.jpg"
  },
  {
    "id": "15",
    "name": "Steuerberater Steffen Steinhäuser",
    "branche": "Steuerberatung & Recht",
    "initialen": "SS",
    "adresse": "Plau am See",
    "telefon": "+49 38735 81600",
    "email": "info@steuerberater-steinhaeuser.de",
    "website": "https://it-safety24.de/#start",
    "bewerbungslink": "",
    "ansprechpartner": "Steffen Steinhäuser",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Festanstellung",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Steuerfachangestellte/r (m/w/d)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Bilanzbuchhalter/in (m/w/d)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_2",
        "titel": "Steuerfachwirt/in (m/w/d)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Homeoffice-Optionen",
      "Jobrad",
      "Urlaubs & Weihnachtsgeld",
      "Mtl",
      "Massage",
      "Wtl",
      "Team-Essen",
      "Tankgutschein",
      "Erholungsbeihilfe"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/steuerberater-steffen-steinhaeuser.png"
  },
  {
    "id": "16",
    "name": "Stadt Plau am See",
    "branche": "Öffentlicher Dienst",
    "initialen": "SP",
    "adresse": "Plau am See",
    "telefon": "+49 38735 49415",
    "email": "personal@amtplau.de",
    "website": "https://www.amtplau.de",
    "bewerbungslink": "",
    "ansprechpartner": "F. Böhm / C. Schröder",
    "anstellungsarten": [
      "Ausbildung",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Kommunale Verwaltung",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Kinderbetreuung kommunaler Hort",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Urlaubs & Weihnachtsgeld"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/stadt-plau-am-see.png"
  },
  {
    "id": "17",
    "name": "MS Zeltbau & Partyservice",
    "branche": "Handwerk & Bau",
    "initialen": "MZ",
    "adresse": "Plau am See",
    "telefon": "+49 173 2190511",
    "email": "sp@ms-zeltbau.com",
    "website": "https://ms-zeltbau.com/",
    "bewerbungslink": "",
    "ansprechpartner": "Stefanie Bartsch",
    "anstellungsarten": [
      "Festanstellung"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Monteur von Festzelten",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      }
    ],
    "benefits": [],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/ms-zeltbau-und-partyservice.png"
  },
  {
    "id": "18",
    "name": "Pflegedienst heitmann poser",
    "branche": "Medizin & Pflege",
    "initialen": "PH",
    "adresse": "Plau am See",
    "telefon": "+49 172 2396348",
    "email": "info@pflegedienst-karow.de",
    "website": "https://pflegedienst-karow.de/",
    "bewerbungslink": "",
    "ansprechpartner": "Claudia Poser",
    "anstellungsarten": [
      "Boys & Girls Day",
      "Festanstellung",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Pflege",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      }
    ],
    "benefits": [
      "Firmenwagen",
      "Urlaubs & Weihnachtsgeld"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/pflegedienst-heitmann-poser.jpg"
  },
  {
    "id": "19",
    "name": "Fischerei Müritz-Plau GmbH",
    "branche": "Fischerei",
    "initialen": "FM",
    "adresse": "Plau am See",
    "telefon": "+49 3991 153441",
    "email": "jklos@mueritzfischer.de",
    "website": "https://www.mueritzfischer.de/jobs/",
    "bewerbungslink": "",
    "ansprechpartner": "Janine Klos",
    "anstellungsarten": [
      "Ausbildung",
      "Ferienjob",
      "Festanstellung",
      "Teilzeit",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Fischwirt",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Verkäufer Fischimbiss",
        "beschreibung": "",
        "anstellungsart": "Ferienjob"
      },
      {
        "id": "s_2",
        "titel": "Verkäufer Fischimbiss",
        "beschreibung": "",
        "anstellungsart": "Teilzeit"
      },
      {
        "id": "s_3",
        "titel": "Mitarbeiter Produktion",
        "beschreibung": "",
        "anstellungsart": "Ferienjob"
      },
      {
        "id": "s_4",
        "titel": "Mitarbeiter Produktion",
        "beschreibung": "",
        "anstellungsart": "Festanstellung"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Übernahmegarantie (Azubis)",
      "Sonn- und Feiertagszuschläge, vollständige Berufsbekleidung, Übernahmegarantie bei guten Leistungen, Übernahme Kosten Bootsführerschein, günstige Mitarbeiter-Angelkarte, Mitarbeiterrabatte an allen Standorten, Zahlung nach Tarif"
    ],
    "schnuppertage": false,
    "aktiv": true,
    "logo": "/logos/fischerei-mueritz-plau-gmbh.svg"
  },
  {
    "id": "20",
    "name": "Altenhilfezentrum Dr. Wilde - Haus Plau am See",
    "branche": "Medizin & Pflege",
    "initialen": "AD",
    "adresse": "Plau am See",
    "telefon": "+49 38735 8950",
    "email": "ahz.plau@kloster-dobbertin.de",
    "website": "https://kloster-dobbertin.de/",
    "bewerbungslink": "",
    "ansprechpartner": "Carmen Schuldt",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Ferienjob",
      "Festanstellung",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Pflege und Betreuung",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Jobrad",
      "Urlaubs & Weihnachtsgeld",
      "Übernahmegarantie (Azubis)"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/altenhilfezentrum-dr-wilde-haus-plau-am-see.webp"
  },
  {
    "id": "21",
    "name": "Hawart OMV Landtechnik GmbH",
    "branche": "Industrie & Produktion",
    "initialen": "HO",
    "adresse": "Plau am See",
    "telefon": "+49 38735 82216",
    "email": "klebe@hawartomv.de",
    "website": "https://www.hawartomv.de/",
    "bewerbungslink": "",
    "ansprechpartner": "Christoph Frick",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Ferienjob",
      "Festanstellung",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Handwerk",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Jobrad",
      "Urlaubs & Weihnachtsgeld",
      "Übernahmegarantie (Azubis)",
      "kostenlose Getränke",
      "kostenlose Parkplätze",
      "Mitarbeiterrabatte",
      "Übernahme der Kosten für Arbeitsbekleidung"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/hawart-omv-landtechnik-gmbh.jpeg"
  },
  {
    "id": "22",
    "name": "Metallbau Senkbeil GmbH",
    "branche": "Handwerk & Bau",
    "initialen": "MS",
    "adresse": "Plau am See",
    "telefon": "+49 38737 20050",
    "email": "office@senkbeil-gruppe.de",
    "website": "https://www.senkbeil-gruppe.de",
    "bewerbungslink": "",
    "ansprechpartner": "Frau Kemnitz",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Duales Studium",
      "Ferienjob",
      "Festanstellung",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Handwerk",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "- Metallbauer (Konstruktionstechnik) für Produktion Aluminium/Schlosser und Montage",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_2",
        "titel": "- Technischer Systemplaner",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_3",
        "titel": "- Büro/Verwaltung",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "- attraktive Vergütung + Sonderzahlungen",
      "- jährliche Sommer- und Weihnachtsferien",
      "- komplette Versorgung mit Kalt- & Heißgetränken",
      "- Unterstützung bei der Wohnungssuche",
      "- Zuschuß zu Führerschein oder Mietzahlung möglich (AZUBIS)"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/metallbau-senkbeil-gmbh.avif"
  },
  {
    "id": "23",
    "name": "Luchs Haustechnik GmbH",
    "branche": "Handwerk & Bau",
    "initialen": "LH",
    "adresse": "Plau am See",
    "telefon": "+49 38738 139870",
    "email": "info@luchs-haustechnik.de",
    "website": "https://www.luchs-haustechnik.de",
    "bewerbungslink": "",
    "ansprechpartner": "Rebekka Jaroß",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "SHK Anlagenmechaniker m/w/d",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "SHK Meister m/w/d",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_2",
        "titel": "Auszubildender Anlagenmechaniker Sanitär-",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_3",
        "titel": "Heizungs-und Klimatechnik m/w/d",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Firmenwagen",
      "Jobrad",
      "Übernahmegarantie (Azubis)",
      "4-Tage Woche, Bereit­stellung der Berufs­beklei­dung, Individu­elle Coa­chings, Förde­rung und beruf­liche Auf­stiegs­chancen, Inter­net­nut­zung, Mitarbeiter­events, Mit­arbeiter­handy, Mitarbeiter­rabatte, Moderne Betriebs­ausstattung, Parkplatz, steuer­freie Zusatz­leistungen, übertarifliche Bezahlung, Gutes Betriebsklima, Feste Arbeits­zeiten und die Ver­ein­bar­keit von Fami­lie und Beruf - Work-Life-Balance"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/luchs-haustechnik-gmbh.png"
  },
  {
    "id": "24",
    "name": "Technologik Metallsysteme GmbH",
    "branche": "Industrie & Produktion",
    "initialen": "TM",
    "adresse": "Plau am See",
    "telefon": "+49 39931 87211",
    "email": "a.buenger@technologik.de",
    "website": "https://www.technologik.de",
    "bewerbungslink": "",
    "ansprechpartner": "Anna Bünger",
    "anstellungsarten": [
      "Ausbildung",
      "Ferienjob",
      "Festanstellung",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Stahl - und Metallbau",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Handwerk",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_2",
        "titel": "Berufe:",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_3",
        "titel": "Konstruktionsmechaniker (ehemals Schlosser)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_4",
        "titel": "Fachkraft für Metalltechnik (ehemals Teilezurichter)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_5",
        "titel": "Schweißer MAG/ WIG",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_6",
        "titel": "Monteure für Stahlbau",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Jobrad",
      "Übernahmegarantie (Azubis)",
      "Personal Training",
      "kostenlose Getränke",
      "Firmenfeiern",
      "Tankgutscheine"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/technologik-metallsysteme-gmbh.png"
  },
  {
    "id": "25",
    "name": "Bäckerei und Konditorei Behrens",
    "branche": "Hotel & Gastronomie",
    "initialen": "BK",
    "adresse": "Plau am See",
    "telefon": "+49 173 1651753",
    "email": "behrensalx@aol.de",
    "website": "",
    "bewerbungslink": "",
    "ansprechpartner": "Hannes Behrens/ Heidi Schaumkessel",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Ferienjob",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Handwerk",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Verkauf",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_2",
        "titel": "Lebensmittel/ Bäckerhandwerk",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Urlaubs & Weihnachtsgeld",
      "Übernahmegarantie (Azubis)"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/baeckerei-und-konditorei-behrens.jpeg"
  },
  {
    "id": "26",
    "name": "Leinerstift Erziehungsstellen",
    "branche": "Bildung & Soziales",
    "initialen": "LE",
    "adresse": "Plau am See",
    "telefon": "+49 1525 6774101",
    "email": "g.jakobs@leinerstift.de",
    "website": "https://www.leinerstift.de",
    "bewerbungslink": "",
    "ansprechpartner": "Gisela Jakobs",
    "anstellungsarten": [
      "Duales Studium",
      "Festanstellung"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Soziale Arbeit",
        "beschreibung": "",
        "anstellungsart": "Duales Studium"
      },
      {
        "id": "s_1",
        "titel": "Erzieher*in",
        "beschreibung": "",
        "anstellungsart": "Duales Studium"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Homeoffice-Optionen",
      "Jobrad",
      "Urlaubs & Weihnachtsgeld"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/leinerstift-erziehungsstellen.png"
  },
  {
    "id": "27",
    "name": "Wohnungsgesellschaft Plau mbH",
    "branche": "Immobilien",
    "initialen": "WP",
    "adresse": "Plau am See",
    "telefon": "+49 162 1817256",
    "email": "info@wohnen-plau.de",
    "website": "https://wohnen-plau.de",
    "bewerbungslink": "",
    "ansprechpartner": "Jana Maibaum",
    "anstellungsarten": [],
    "stellenangebote": [],
    "benefits": [],
    "schnuppertage": false,
    "aktiv": false
  },
  {
    "id": "28",
    "name": "Landespolizei Mecklenburg-Vorpommern",
    "branche": "Öffentlicher Dienst",
    "initialen": "LM",
    "adresse": "Plau am See",
    "telefon": "+49 38735 8370",
    "email": "pr.plau@polmv.de",
    "website": "https://www.polizei.mvnet.de",
    "bewerbungslink": "",
    "ansprechpartner": "Kathrin Mach",
    "anstellungsarten": [
      "Ausbildung",
      "Duales Studium"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Polizevollzugsbeamte",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Spannenden Job an jedem Tag"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/landespolizei-mecklenburg-vorpommern.jpg"
  },
  {
    "id": "29",
    "name": "Fries GmbH",
    "branche": "Transport & Logistik",
    "initialen": "F",
    "adresse": "Plau am See",
    "telefon": "+49 38737 50463",
    "email": "a.schroeder@fries24.de",
    "website": "https://www.fries24.de/Stellenangebote/",
    "bewerbungslink": "",
    "ansprechpartner": "Angie Schröder",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Festanstellung",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Kaufleute im  Groß- und Außenhandelsmanagement - Azubis",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Kaufleute im  Büromanagement - Azubis",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_2",
        "titel": "Fachkraft für Lagerlogistik - Azubis + Mitarbeiter",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_3",
        "titel": "Fachlageristen - Azubis + Mitarbeiter",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_4",
        "titel": "Berufskraftfahrer - Mitarbeiter",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Jobrad",
      "Urlaubs & Weihnachtsgeld",
      "Übernahmegarantie (Azubis)",
      "Gesundheitstag",
      "FRIES-Card"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/fries-gmbh.jpeg"
  },
  {
    "id": "30",
    "name": "Volkssolidarität Kreisverband Parchim e.V.",
    "branche": "Medizin & Pflege",
    "initialen": "VK",
    "adresse": "Plau am See",
    "telefon": "+49 3871 267220",
    "email": "markus.vonjan@volkssolidaritaet.de",
    "website": "https://www.volkssolidaritaet.de",
    "bewerbungslink": "",
    "ansprechpartner": "Markus von Jan",
    "anstellungsarten": [
      "Ausbildung",
      "Boys & Girls Day",
      "Ferienjob",
      "Festanstellung",
      "Praktikum",
      "Praxislerntag"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Pflegebereich (Tagespflege, Ambulanter Pflegedienst)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_1",
        "titel": "Kita (Erzieher etc.)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      },
      {
        "id": "s_2",
        "titel": "Koch/Köchin für Kantine/Großküche",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Jahressonderzahlung",
      "30 Tage Urlaub / 24.12. und 31.12. frei",
      "betriebliche Altersvorsorge",
      "Verdienst nach TVöD (Pflegebereich und Kita)",
      "kostengünstigere Mitgliedschaft im Fitnessstudio",
      "vergünstigtes Mitarbeiteressen",
      "Jobrad (geplant)"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/volkssolidaritaet-kreisverband-parchim-e-v.png"
  },
  {
    "id": "31",
    "name": "Plauer Dachdecker / Lublow Gerüstbau",
    "branche": "Handwerk & Bau",
    "initialen": "PD",
    "adresse": "Plau am See",
    "telefon": "+49 160 5659652",
    "email": "k.blumenthal@lublow-gruppe.de",
    "website": "https://lublow-geruestbau.de",
    "bewerbungslink": "",
    "ansprechpartner": "Kevin Blumenthal",
    "anstellungsarten": [
      "Ausbildung",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Handwerk (Dachdecker / Gerüstbau)",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Urlaubs & Weihnachtsgeld",
      "Leistungsprämien",
      "Weiterbildungen",
      "Kostenübernahme für Schule / Unterkunft / Fahrtwege"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/plauer-dachdecker-lublow-geruestbau.png"
  },
  {
    "id": "32",
    "name": "MEDICLIN Kliniken Plau am See GmbH & Co. KG.",
    "branche": "Medizin & Pflege",
    "initialen": "MK",
    "adresse": "Plau am See",
    "telefon": "+49 38735 87132",
    "email": "Bewerbung.plau@mediclin.de",
    "website": "https://www.mediclin.de/kliniken/plau-am-see",
    "bewerbungslink": "",
    "ansprechpartner": "Oliver Kaschel",
    "anstellungsarten": [
      "Ausbildung",
      "Festanstellung",
      "Praktikum"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Gesundheitswesen",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Flexible Arbeitszeiten / Gleitzeit",
      "Jobrad",
      "Urlaubs & Weihnachtsgeld",
      "Übernahmegarantie (Azubis)",
      "Kostenlose Parkplätze, Vergünstigtes Essen in der Cafeteria, Kostenlose Nutzung der Schwimmhalle und des Fitnessraumes, Vermögenswirksame Leistungen"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/mediclin-kliniken-plau-am-see-gmbh-und-co-kg.svg"
  },
  {
    "id": "33",
    "name": "Notar Dirk Tast",
    "branche": "Steuerberatung & Recht",
    "initialen": "ND",
    "adresse": "Plau am See",
    "telefon": "+49 38735 45536",
    "email": "corinna.tast@notar-tast.de",
    "website": "",
    "bewerbungslink": "",
    "ansprechpartner": "Corinna Tast",
    "anstellungsarten": [
      "Ausbildung",
      "Festanstellung"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Notariatsmitarbeiter",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Urlaubs & Weihnachtsgeld",
      "Übernahmegarantie (Azubis)",
      "- Familiäres wertschätzendes Team",
      "- Flache Hierarchien",
      "- Teilzeitmodelle",
      "- Verlässliche Arbeitszeiten ohne Wochendarbeit",
      "- Kostenübernahme für Fortbildungen",
      "- Attraktive Vergütung",
      "- Kostenlose Getränke",
      "- Teamevents und Betriebsausflüge"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/notar-dirk-tast.png"
  },
  {
    "id": "34",
    "name": "Falk Seehotels GmbH - Seehotel Plau am See",
    "branche": "Hotel & Gastronomie",
    "initialen": "FS",
    "adresse": "Plau am See",
    "telefon": "+49 38735 840",
    "email": "birgit.falk@seehorel-plau.de",
    "website": "https://www.seehotel-plau.de",
    "bewerbungslink": "",
    "ansprechpartner": "Birgit Falk",
    "anstellungsarten": [
      "Ausbildung",
      "Ferienjob",
      "Festanstellung"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Hotellerie",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "Übernahmegarantie (Azubis)"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/falk-seehotels-gmbh-seehotel-plau-am-see.jpg"
  },
  {
    "id": "35",
    "name": "Pavillon",
    "branche": "Hotel & Gastronomie",
    "initialen": "P",
    "adresse": "Plau am See",
    "telefon": "+49 173 6145410",
    "email": "snake266@gmx.de",
    "website": "",
    "bewerbungslink": "",
    "ansprechpartner": "Bianka Moldenhauer",
    "anstellungsarten": [
      "Boys & Girls Day",
      "Ferienjob",
      "Praktikum",
      "Minijob",
      "Teilzeit"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Pavillon",
        "beschreibung": "",
        "anstellungsart": "Minijob"
      },
      {
        "id": "s_1",
        "titel": "Pavillon",
        "beschreibung": "",
        "anstellungsart": "Teilzeit"
      }
    ],
    "benefits": [],
    "schnuppertage": true,
    "aktiv": true
  },
  {
    "id": "36",
    "name": "BEECH Resort Plauer See",
    "branche": "Hotel & Gastronomie",
    "initialen": "BR",
    "adresse": "Plau am See",
    "telefon": "+49 173 6740900",
    "email": "talente@five-e-group.com",
    "website": "https://www.beechresort-plauer-see.com/",
    "bewerbungslink": "",
    "ansprechpartner": "Urszula Wycech",
    "anstellungsarten": [
      "Ausbildung",
      "Ferienjob",
      "Festanstellung",
      "Praktikum",
      "Minijob",
      "Teilzeit",
      "Vollzeit"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Service/ Housekeeping/ Küche/ Garten/ Technik/ Rezeption",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [
      "E-Ladesäulen",
      "Mitarbeiter-Rabatte",
      "Weiterbildungsbudget",
      "Übernahmegarantie (Azubis)",
      "Sonn-, Feiertags- und Nachtzuschläge",
      "Mitarbeiterkantine",
      "Berufsbekleidung inkl",
      "Reinigung",
      "Möblierte Personalunterkünfte vorhanden",
      "30% Rabatt in allen unseren gastronomischen Outlets und weitere Vergünstigungen",
      "Aktive und digitale Fortbildungsmöglichkeiten",
      "Vergünstigte Übernachtungsmöglichkeiten im deutschsprachigen Raum/Perso Nights"
    ],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logo-beech-resorts.svg"
  },
  {
    "id": "37",
    "name": "Parkhotel Klüschenberg",
    "branche": "Hotel & Gastronomie",
    "initialen": "PK",
    "adresse": "Plau am See",
    "telefon": "+49 385 73549410",
    "email": "info@klueschenberg.de",
    "website": "https://www.klueschenberg.de",
    "bewerbungslink": "",
    "ansprechpartner": "Beatrice Gotzian",
    "anstellungsarten": [
      "Ausbildung",
      "Ferienjob",
      "Minijob"
    ],
    "stellenangebote": [
      {
        "id": "s_0",
        "titel": "Hotel und Gastronomie",
        "beschreibung": "",
        "anstellungsart": "Ausbildung"
      }
    ],
    "benefits": [],
    "schnuppertage": true,
    "aktiv": true,
    "logo": "/logos/parkhotel-klueschenberg.jpg"
  },
  {
    "id": "38",
    "name": "Lidl",
    "branche": "Handel & Vertrieb",
    "initialen": "L",
    "adresse": "Plau am See",
    "telefon": "+49 381 66691371",
    "email": "Bewerbung.ros@lidl.de",
    "website": "https://jobs.lidl.de",
    "bewerbungslink": "https://jobs.lidl.de/suche?page=1&midpoint_name=Plau%20am%20See,%20Ludwigslust-Parchim&midpoint_lat=53.4601&midpoint_lon=12.2613&radius=25&sort_field=location.distance&sort_order=asc",
    "ansprechpartner": "Kai Jungblut",
    "anstellungsarten": [
      "Festanstellung",
      "Praktikum",
      "Duales Studium",
      "Ausbildung",
      "Minijob",
      "Teilzeit",
      "Vollzeit",
      "Boys & Girls Day"
    ],
    "stellenangebote": [],
    "benefits": [
      "Weiterbildung",
      "Betriebliche Altersvorsorge",
      "Gesundheitsangebote",
      "Mitarbeiterrabatte",
      "Teamevents",
      "Urlaubs- & Weihnachtsgeld"
    ],
    "schnuppertage": false,
    "aktiv": true,
    "logo": "/logos/lidl.svg"
  }
];

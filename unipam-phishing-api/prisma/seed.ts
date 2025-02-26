import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.expectedTarget.createMany({
    data: [
      {
        "email": "adriana@unipam.edu.br",
        "name": "ADRIANA DE LANNA MALTA TREDEZINI",
        "hash": "RZV492QLEC"
      },
      {
        "email": "alansantos@unipam.edu.br",
        "name": "ALAN SANTOS DE OLIVEIRA",
        "hash": "EZXM4G6TDO"
      },
      {
        "email": "altamirinho@unipam.edu.br",
        "name": "ALTAMIR FERNANDES DE SOUSA",
        "hash": "2LBJ6F3RAQ"
      },
      {
        "email": "teacherana@unipam.edu.br",
        "name": "ANA MARIA CAIXETA CAMARGO",
        "hash": "2HC70FGMNY"
      },
      {
        "email": "apfonseca@unipam.edu.br",
        "name": "ANA PAULA NASCENTES DE DEUS FONSECA SIQUEIRA",
        "hash": "PG8OKI03UT"
      },
      {
        "email": "carloshenrique@unipam.edu.br",
        "name": "CARLOS HENRIQUE EITERER DE SOUZA",
        "hash": "ILQRK4TUAV"
      },
      {
        "email": "catiacaixeta@unipam.edu.br",
        "name": "CÁTIA APARECIDA SILVEIRA CAIXETA",
        "hash": "AFX8UP169I"
      },
      {
        "email": "denilson@unipam.edu.br",
        "name": "DENILSON JOSÉ MARTINS",
        "hash": "4FBQ8I2HKA"
      },
      {
        "email": "edite@unipam.edu.br",
        "name": "EDITE DA GLÓRIA AMORIM GUIMARÃES",
        "hash": "DZCMSUE7T2"
      },
      {
        "email": "ulhoa@unipam.edu.br",
        "name": "ELIANA CHAVES ULHOA",
        "hash": "2P078RH53X"
      },
      {
        "email": "eliphas@unipam.edu.br",
        "name": "ELIPHAS LEVI PEREIRA",
        "hash": "H6FV7DR521"
      },
      {
        "email": "elisaqg@unipam.edu.br",
        "name": "ELISA QUEIROZ GARCIA",
        "hash": "31H4BJDRYC"
      },
      {
        "email": "elizete@unipam.edu.br",
        "name": "ELIZETE MARIA DA SILVA MOREIRA",
        "hash": "02HZX4VIAM"
      },
      {
        "email": "eunice@unipam.edu.br",
        "name": "EUNICE APARECIDA CAIXETA",
        "hash": "MCS76U1H2N"
      },
      {
        "email": "fernandosilva@unipam.edu.br",
        "name": "FERNANDO DIAS DA SILVA",
        "hash": "U0H5FTRI34"
      },
      {
        "email": "flaviafisio@unipam.edu.br",
        "name": "FLAVIA AMELIA COSTA FARIA",
        "hash": "1TRFSIU8VD"
      },
      {
        "email": "geovane@unipam.edu.br",
        "name": "GEOVANE FERNANDES CAIXETA",
        "hash": "PGDMU3VQX2"
      },
      {
        "email": "arvelos@unipam.edu.br",
        "name": "GERALDO DE ARVELOS",
        "hash": "0UPJXQIAV8"
      },
      {
        "email": "gilsoncb@unipam.edu.br",
        "name": "GILSON CAIXETA BORGES",
        "hash": "21JCDS9UYK"
      },
      {
        "email": "gncunha@unipam.edu.br",
        "name": "GUILHERME NASCIMENTO CUNHA",
        "hash": "014J8YE9CU"
      },
      {
        "email": "helen@unipam.edu.br",
        "name": "HELEN CARLA VIEIRA CAIXETA",
        "hash": "ROELGYWKVI"
      },
      {
        "email": "helensolis@unipam.edu.br",
        "name": "HELEN CORRÊA SOLIS NEVES",
        "hash": "Z7H864VYOI"
      },
      {
        "email": "henaldo@unipam.edu.br",
        "name": "HENALDO BARROS MORAES",
        "hash": "M08FE12DZ7"
      },
      {
        "email": "profhenrique@unipam.edu.br",
        "name": "HENRIQUE CARIVALDO DE MIRANDA NETO",
        "hash": "B7XAMDRN5L"
      },
      {
        "email": "janaine@unipam.edu.br",
        "name": "JANAINE MYRNA RODRIGUES REIS",
        "hash": "I095BAM8NL"
      },
      {
        "email": "jrodolfo@unipam.edu.br",
        "name": "JOSÉ RODOLFO DE OLIVEIRA",
        "hash": "CQN4HJV2FZ"
      },
      {
        "email": "juliana@unipam.edu.br",
        "name": "JULIANA LILIS DA SILVA",
        "hash": "V2NWLF0EHO"
      },
      {
        "email": "karyna@unipam.edu.br",
        "name": "KARYNA MARIA DE MELLO LOCATELLI",
        "hash": "ON6GYIT0MC"
      },
      {
        "email": "leonor@unipam.edu.br",
        "name": "LEONOR CAIXETA DOS SANTOS",
        "hash": "172QVOXLYI"
      },
      {
        "email": "franca@unipam.edu.br",
        "name": "LUCIANA DE ALMEIDA FRANÇA",
        "hash": "FCG1OJKAQM"
      },
      {
        "email": "luiz@unipam.edu.br",
        "name": "LUIZ HENRIQUE SANTOS",
        "hash": "387NTGLI6X"
      },
      {
        "email": "marciamancio@unipam.edu.br",
        "name": "MÁRCIA REGINA AMÂNCIO",
        "hash": "CGTWSF6JL0"
      },
      {
        "email": "marcilio@unipam.edu.br",
        "name": "MARCÍLIO GERALDO MENDES",
        "hash": "5YKIR6Q47A"
      },
      {
        "email": "rassi@unipam.edu.br",
        "name": "MARCOS ANTÔNIO CAIXETA RASSI",
        "hash": "7CDLMARTBV"
      },
      {
        "email": "fatimaporto@unipam.edu.br",
        "name": "MARIA DE FÁTIMA SILVA PORTO",
        "hash": "CUMXB4OGTE"
      },
      {
        "email": "mlucia@unipam.edu.br",
        "name": "MARIA LÚCIA NOGUEIRA",
        "hash": "L9RBG5O16K"
      },
      {
        "email": "mariamarta@unipam.edu.br",
        "name": "MARIA MARTA DO COUTO PEREIRA RODRIGUES",
        "hash": "C7Z8XA5946"
      },
      {
        "email": "perpetor@unipam.edu.br",
        "name": "MARIA PERPÉTUA OLIVEIRA RAMOS",
        "hash": "2W18XGSR4Z"
      },
      {
        "email": "milce@unipam.edu.br",
        "name": "MILCE BURGOS FERREIRA",
        "hash": "C8QB7UITLY"
      },
      {
        "email": "monica@unipam.edu.br",
        "name": "MÔNICA SOARES DE ARAÚJO GUIMARÃES",
        "hash": "9KS3HJM8QL"
      },
      {
        "email": "morisa@unipam.edu.br",
        "name": "MORISA MARTINS JAJAH",
        "hash": "2T0GEZILUA"
      },
      {
        "email": "nivia@unipam.edu.br",
        "name": "NÍVIA MARIA BORGES",
        "hash": "ZQO6EPCW58"
      },
      {
        "email": "norma@unipam.edu.br",
        "name": "NORMA APARECIDA BORGES BITAR",
        "hash": "VZQL9WF6XR"
      },
      {
        "email": "reginamacedo@unipam.edu.br",
        "name": "REGINA MACEDO BOAVENTURA",
        "hash": "PLVWXSATO9"
      },
      {
        "email": "rejane@unipam.edu.br",
        "name": "REJANE MARTINS CANEDO LIMA",
        "hash": "EVD3UYK2F8"
      },
      {
        "email": "renatanepc@unipam.edu.br",
        "name": "RENATA NEPOMUCENO DA CUNHA",
        "hash": "MD5UCAIL6O"
      },
      {
        "email": "renatoia@unipam.edu.br",
        "name": "RENATO IANHEZ",
        "hash": "D5T0Z6BJXP"
      },
      {
        "email": "ricardofreitas@unipam.edu.br",
        "name": "RICARDO DE FREITAS FONSECA",
        "hash": "OKQFW0T2ZP"
      },
      {
        "email": "robertopiau@unipam.edu.br",
        "name": "ROBERTO ALAÔR PIAU MARQUES",
        "hash": "KE34CS9BHO"
      },
      {
        "email": "ronaldo@unipam.edu.br",
        "name": "RONALDO PEREIRA CAIXETA",
        "hash": "QRLAFYSCDJ"
      },
      {
        "email": "rossanapgs@unipam.edu.br",
        "name": "ROSSANA PIERANGELI GODINHO SILVA",
        "hash": "427EPWZV5J"
      },
      {
        "email": "sandra@unipam.edu.br",
        "name": "SANDRA SOARES",
        "hash": "J9KWOVX7IM"
      },
      {
        "email": "sandroangelo@unipam.edu.br",
        "name": "SANDRO ÂNGELO DE ANDRADE",
        "hash": "0ZWEXUM69L"
      },
      {
        "email": "sandro@unipam.edu.br",
        "name": "SANDRO DE PAULA MATIAS",
        "hash": "X72NDLP4U0"
      },
      {
        "email": "saulo@unipam.edu.br",
        "name": "SAULO SANTOS",
        "hash": "KOLCI1JQP7"
      },
      {
        "email": "vanessapt@unipam.edu.br",
        "name": "VANESSA PEREIRA TOLENTINO",
        "hash": "FQJI49MDLS"
      },
      {
        "email": "varlei@unipam.edu.br",
        "name": "VARLEI CÉSAR DA SILVA",
        "hash": "MENFS6WX7Q"
      },
      {
        "email": "walter@unipam.edu.br",
        "name": "WALTER VIEIRA DA CUNHA",
        "hash": "WTVRHQFEI5"
      },
      {
        "email": "wania@unipam.edu.br",
        "name": "WÂNIA ALVES FERREIRA FONTES",
        "hash": "N0WF1CR8OT"
      },
      {
        "email": "warleit@unipam.edu.br",
        "name": "WARLEI TANA",
        "hash": "ZTVNL8R9X3"
      },
      {
        "email": "anairis@unipam.edu.br",
        "name": "ANA ÍRIS GALVÃO AMARAL",
        "hash": "70OPQC64E1"
      },
      {
        "email": "gisele@unipam.edu.br",
        "name": "GISELE CARVALHO DE ARAÚJO CAIXETA",
        "hash": "OICUV07KYL"
      },
      {
        "email": "evbinotto@unipam.edu.br",
        "name": "EVANDRO BINOTTO FAGAN",
        "hash": "ERLKXQ1DAW"
      },
      {
        "email": "isa@unipam.edu.br",
        "name": "ISA RIBEIRO DE OLIVEIRA DANTAS",
        "hash": "KATRY79ZCW"
      },
      {
        "email": "odilene@unipam.edu.br",
        "name": "ODILENE GONÇALVES",
        "hash": "EWP7SFNL25"
      },
      {
        "email": "walerio@unipam.edu.br",
        "name": "WALÉRIO ARAÚJO DE MELO",
        "hash": "Z7OG9CIFXV"
      },
      {
        "email": "danyane@unipam.edu.br",
        "name": "DANYANE SIMÃO GOMES",
        "hash": "FVMH3D7QON"
      },
      {
        "email": "alinecp@unipam.edu.br",
        "name": "ALINE CARDOSO DE PAIVA",
        "hash": "SUIR8CHG5E"
      },
      {
        "email": "gledson@unipam.edu.br",
        "name": "GLEDSON RÉGIS LOBATO",
        "hash": "4VSOU2HNC5"
      },
      {
        "email": "luizhbv@unipam.edu.br",
        "name": "LUIZ HENRIQUE BORGES VARELLA",
        "hash": "JUG0NSQXAV"
      },
      {
        "email": "abelardommota@unipam.edu.br",
        "name": "ABELARDO MEDEIROS MOTA",
        "hash": "HOLQPK2NCM"
      },
      {
        "email": "leonardo@unipam.edu.br",
        "name": "LEONARDO BRAGA DOS REIS",
        "hash": "8907EXVN4S"
      },
      {
        "email": "alexandremo@unipam.edu.br",
        "name": "ALEXANDRE MÁXIMO OLIVEIRA",
        "hash": "KNBD1AMIG9"
      },
      {
        "email": "larissa@unipam.edu.br",
        "name": "LARISSA COSTA KELES DE ALMEIDA",
        "hash": "1ZLY6F39BX"
      },
      {
        "email": "fabricioro@unipam.edu.br",
        "name": "FABRÍCIO ROCHA DE OLIVEIRA",
        "hash": "DCF3BAOWJK"
      },
      {
        "email": "fernandocmjr@unipam.edu.br",
        "name": "FERNANDO CORRÊA DE MELLO JÚNIOR",
        "hash": "DPJCYOSVIK"
      },
      {
        "email": "roselyoa@unipam.edu.br",
        "name": "ROSELY OLIVEIRA DE ALMEIDA",
        "hash": "DMW6YNPIUK"
      },
      {
        "email": "franciele@unipam.edu.br",
        "name": "FRANCIELE MARIA CAIXETA",
        "hash": "49OBVCZIMH"
      },
      {
        "email": "maura@unipam.edu.br",
        "name": "MAURA REGINA GUIMARÃES RABELO",
        "hash": "0QBG5FW6OI"
      },
      {
        "email": "bethania@unipam.edu.br",
        "name": "BETHÂNIA CRISTHINE DE ARAÚJO",
        "hash": "AQYMV8GIB5"
      },
      {
        "email": "marisacp@unipam.edu.br",
        "name": "MARISA COSTA E PEIXOTO",
        "hash": "M5XBG617HR"
      },
      {
        "email": "francis@unipam.edu.br",
        "name": "FRANCIS JARDIM PFEILSTICKER",
        "hash": "HMJPKAQ6R2"
      },
      {
        "email": "flaviogil@unipam.edu.br",
        "name": "FLÁVIO ROCHA GIL",
        "hash": "UY7XTPDCRM"
      },
      {
        "email": "claudinecb@unipam.edu.br",
        "name": "CLAUDINE DE CARVALHO BARROS",
        "hash": "JU1HQMOW36"
      },
      {
        "email": "julianargr@unipam.edu.br",
        "name": "JULIANA RIBEIRO GOUVEIA REIS",
        "hash": "1KVC82GJP4"
      },
      {
        "email": "maryrivany@unipam.edu.br",
        "name": "MARILENE RIVANY NUNES",
        "hash": "V9YTM1LNC0"
      },
      {
        "email": "kelen@unipam.edu.br",
        "name": "KELEN CRISTINA ESTAVANATE DE CASTRO",
        "hash": "FILE5H34R2"
      },
      {
        "email": "carol@unipam.edu.br",
        "name": "CAROLINA DA CUNHA REEDIJK",
        "hash": "4I0PMNBX3T"
      },
      {
        "email": "elizene@unipam.edu.br",
        "name": "ELIZENE SEBASTIANA DE OLIVEIRA",
        "hash": "4FC85K9WEX"
      },
      {
        "email": "anapaula@unipam.edu.br",
        "name": "ANA PAULA LARA DE VASCONCELOS RAMOS",
        "hash": "JR7S6WPZ3A"
      },
      {
        "email": "adelaide@unipam.edu.br",
        "name": "ADELAIDE MARIA FERREIRA CAMPOS D'ÁVILA",
        "hash": "GA6OILKB28"
      },
      {
        "email": "marilucef@unipam.edu.br",
        "name": "MARILUCE FERREIRA ROMÃO",
        "hash": "R75IT0N31S"
      },
      {
        "email": "nadiacamila@unipam.edu.br",
        "name": "NÁDIA CAMILA RODRIGUES COSTA CAIXETA",
        "hash": "Y0XPJ4L6IE"
      },
      {
        "email": "rosimeireborges@unipam.edu.br",
        "name": "ROSIMEIRE BORGES MOREIRA LACERDA",
        "hash": "HN16Q0PRSU"
      },
      {
        "email": "alessandro@unipam.edu.br",
        "name": "ALESSANDRO REIS",
        "hash": "Z8CN4S1F7J"
      },
      {
        "email": "itamarjf@unipam.edu.br",
        "name": "ITAMAR JOSÉ FERNANDES",
        "hash": "3ZHV50TWAO"
      },
      {
        "email": "monalizaas@unipam.edu.br",
        "name": "MONALIZA ANGÉLICA SANTANA",
        "hash": "UZY80B5J4N"
      },
      {
        "email": "wandir@unipam.edu.br",
        "name": "WANDIR FURTADO DE SOUSA",
        "hash": "NHTKR986M2"
      },
      {
        "email": "edsonantonacci@unipam.edu.br",
        "name": "EDSON ANTONACCI JÚNIOR",
        "hash": "0RXKWGAFML"
      },
      {
        "email": "katiaramos@unipam.edu.br",
        "name": "KÁTIA ALVES RAMOS",
        "hash": "69OEMTH50J"
      },
      {
        "email": "josehenrique@unipam.edu.br",
        "name": "JOSÉ HENRIQUE NUNES BORGES DE ANDRADE",
        "hash": "H9SPEBVUL5"
      },
      {
        "email": "lucianors@unipam.edu.br",
        "name": "LUCIANO REZENDE DOS SANTOS",
        "hash": "E0S8WNAR6J"
      },
      {
        "email": "dulcidiojr@unipam.edu.br",
        "name": "DULCÍDIO DE BARROS MOREIRA JÚNIOR",
        "hash": "B7ZA1YSDMV"
      },
      {
        "email": "giselle@unipam.edu.br",
        "name": "GISELLE CUNHA BARBOSA SAFATLE",
        "hash": "PCTX4FWBRS"
      },
      {
        "email": "julianarcb@unipam.edu.br",
        "name": "JULIANA ROCHA CAVALCANTI BARROS",
        "hash": "0TCDUYJVW3"
      },
      {
        "email": "viniciussp@unipam.edu.br",
        "name": "VINÍCIUS SANTANA PEREIRA",
        "hash": "VTI6BOKNRH"
      },
      {
        "email": "sebastiaofilho@unipam.edu.br",
        "name": "SEBASTIÃO DANTAS FILHO",
        "hash": "WHVKX934S7"
      },
      {
        "email": "carlenfg@unipam.edu.br",
        "name": "CARLEN FONSECA GONÇALVES",
        "hash": "D450NA6QLX"
      },
      {
        "email": "vanessajm@unipam.edu.br",
        "name": "VANESSA JÚNIA MACHADO",
        "hash": "N8LPOUMARI"
      },
      {
        "email": "mariaerlp@unipam.edu.br",
        "name": "MARIA EMÍLIA RODRIGUES LEITÃO PARREIRA",
        "hash": "OGI7HBX0CK"
      },
      {
        "email": "renatov@unipam.edu.br",
        "name": "RENATO VENTURA",
        "hash": "M32F75K1Y8"
      },
      {
        "email": "laerciojv@unipam.edu.br",
        "name": "LAÉRCIO JOSÉ VIDA",
        "hash": "HFNEAZGWQ0"
      },
      {
        "email": "priscillarqr@unipam.edu.br",
        "name": "PRISCILLA ROSA QUEIROZ RIBEIRO",
        "hash": "9SIP1L3GAQ"
      },
      {
        "email": "sheilapv@unipam.edu.br",
        "name": "SHEILLA PEREIRA VIEIRA",
        "hash": "1SYDMIC297"
      },
      {
        "email": "gabrielgcvm@unipam.edu.br",
        "name": "GABRIEL GOMES CANÊDO VIEIRA DE MAGALHÃES",
        "hash": "YK4BHT32Z7"
      },
      {
        "email": "gilmarbs@unipam.edu.br",
        "name": "GILMAR MENEZES SILVA",
        "hash": "KDVIR732X6"
      },
      {
        "email": "fabiobg@unipam.edu.br",
        "name": "FÁBIO DE BRITO GONTIJO",
        "hash": "FUA8K7V5MR"
      },
      {
        "email": "priscilaco@unipam.edu.br",
        "name": "PRISCILA CAPELARI ORSOLIN",
        "hash": "W4NKAGF9O0"
      },
      {
        "email": "ulisses@unipam.edu.br",
        "name": "ULISSES DE OLIVEIRA SIMÕES",
        "hash": "W2L956AKXE"
      },
      {
        "email": "pablo@unipam.edu.br",
        "name": "PABLO FONSECA DA CUNHA",
        "hash": "KLXU29PZJO"
      },
      {
        "email": "flaviodbm@unipam.edu.br",
        "name": "FLÁVIO DANIEL BORGES DE MORAIS",
        "hash": "702P4CWRFX"
      },
      {
        "email": "janainaap@unipam.edu.br",
        "name": "JANAÍNA APARECIDA PEREIRA",
        "hash": "XYDBLET2G7"
      },
      {
        "email": "diegoh@unipam.edu.br",
        "name": "DIEGO HENRIQUE DA MOTA",
        "hash": "KSX30OMT47"
      },
      {
        "email": "sttefane@unipam.edu.br",
        "name": "ADRIENE STTÉFANE SILVA",
        "hash": "A3VKBO6IXY"
      },
      {
        "email": "sabrinanb@unipam.edu.br",
        "name": "SABRINA NUNES BORGES",
        "hash": "2SGJT4XPKY"
      },
      {
        "email": "joaopaf@unipam.edu.br",
        "name": "JOÃO PAULO ALVES DE FARIA",
        "hash": "ISN6YW7ZB8"
      },
      {
        "email": "liliabo@unipam.edu.br",
        "name": "LILIA BEATRIZ OLIVEIRA",
        "hash": "5ZOJXL9PW8"
      },
      {
        "email": "eduardoam@unipam.edu.br",
        "name": "EDUARDO ANTÔNIO MOREIRA",
        "hash": "BLX6W2KQTC"
      },
      {
        "email": "brunobernardes@unipam.edu.br",
        "name": "BRUNO BERNARDES DE ANDRADE",
        "hash": "YUQG9ZRMFO"
      },
      {
        "email": "luishs@unipam.edu.br",
        "name": "LUÍS HENRIQUE SOARES",
        "hash": "9KGY82HAFM"
      },
      {
        "email": "laismba@unipam.edu.br",
        "name": "LAÍS MOREIRA BORGES ARAÚJO",
        "hash": "43VA8LYDKH"
      },
      {
        "email": "marcelasl@unipam.edu.br",
        "name": "MARCELA SILVA LIMA",
        "hash": "EC3HP9D1W4"
      },
      {
        "email": "paulombg@unipam.edu.br",
        "name": "PAULO MAURÍCIO BUSO GOMES",
        "hash": "U14B7CLSTH"
      },
      {
        "email": "jorgiane@unipam.edu.br",
        "name": "JORGIANE SUÉLEN DE SOUSA",
        "hash": "N5PAOSL1ME"
      },
      {
        "email": "thiagov@unipam.edu.br",
        "name": "THIAGO HENRIQUE FERREIRA VASCONCELLOS",
        "hash": "ED8X6YNTLB"
      },
      {
        "email": "adrianacs@unipam.edu.br",
        "name": "ADRIANA CRISTINA DE SANTANA",
        "hash": "Z7IR5CWX03"
      },
      {
        "email": "fabianacf@unipam.edu.br",
        "name": "FABIANA CRISTINA FERREIRA",
        "hash": "RI9D41376K"
      },
      {
        "email": "viniciusmm@unipam.edu.br",
        "name": "VINÍCIUS DE MORAIS MACHADO",
        "hash": "8NZ6X4EFA9"
      },
      {
        "email": "elianesousa@unipam.edu.br",
        "name": "ELIANE DE SOUSA COSTA",
        "hash": "I9DC76OPNZ"
      },
      {
        "email": "lucassm@unipam.edu.br",
        "name": "LUCAS DA SILVA MENDES",
        "hash": "PMK4IZB6NO"
      },
      {
        "email": "pabloufu@yahoo.com.br",
        "name": "PABLO FERNANDO SOUZA MARTINS",
        "hash": "ZREWSUP87F"
      },
      {
        "email": "julianabp@unipam.edu.br",
        "name": "JULIANA BORGES PEREIRA",
        "hash": "J4MH9E236G"
      },
      {
        "email": "carolfariaarantes@gmail.com",
        "name": "CAROLINA FARIA ARANTES",
        "hash": "W47BCR8ZMD"
      },
      {
        "email": "renataom@unipam.edu.br",
        "name": "RENATA DE OLIVEIRA MELO",
        "hash": "BIQV83OL9P"
      },
      {
        "email": "talitams@unipam.edu.br",
        "name": "TALITA MARQUES DA SILVA",
        "hash": "OKZJF216S8"
      },
      {
        "email": "mislene@unipam.edu.br",
        "name": "MISLENE DALILA DA SILVA",
        "hash": "APWDBY2T8H"
      },
      {
        "email": "sandraln@unipam.edu.br",
        "name": "SANDRA LÚCIA NOGUEIRA",
        "hash": "JKZSPBD6C3"
      },
      {
        "email": "marala@unipam.edu.br",
        "name": "MARA LÍVIA DE ARAÚJO",
        "hash": "4LE7CT3V2U"
      },
      {
        "email": "rosianess@unipam.edu.br",
        "name": "ROSIANE SOARES SATURNINO",
        "hash": "B2JOVH04T7"
      },
      {
        "email": "rosianegso@unipam.edu.br",
        "name": "ROSIANE GOMES SILVA OLIVEIRA",
        "hash": "KG4963DWM1"
      },
      {
        "email": "raquelfonseca@unipam.edu.br",
        "name": "RAQUEL GONÇALVES DA FONSECA",
        "hash": "TJKAHMN305"
      },
      {
        "email": "nataliaft@unipam.edu.br",
        "name": "NATALIA FILARDI TAFURI",
        "hash": "3VQKUX416W"
      },
      {
        "email": "lucianama@unipam.edu.br",
        "name": "LUCIANA MENDONÇA ARANTES",
        "hash": "XJTFZI564W"
      },
      {
        "email": "keniacc@unipam.edu.br",
        "name": "KÊNIA CARVALHO COUTINHO",
        "hash": "YFKPLOD3ZI"
      },
      {
        "email": "gilsonpm@unipam.edu.br",
        "name": "GILSON PASSOS DE MORAES",
        "hash": "OMPFACKY6Q"
      },
      {
        "email": "lucianadac@unipam.edu.br",
        "name": "LUCIANA DELFINO ARAÚJO COSTA",
        "hash": "4FNXA3I1M2"
      },
      {
        "email": "marianaa@unipam.edu.br",
        "name": "MARIANA ASSUNÇÃO DE SOUZA",
        "hash": "8S9LZEOPRY"
      },
      {
        "email": "luisandrelima@unipam.edu.br",
        "name": "LUÍS ANDRÉ DE LIMA",
        "hash": "7M8HO05ND4"
      },
      {
        "email": "mauricioac@unipam.edu.br",
        "name": "MAURÍCIO ANTÔNIO DE OLIVEIRA COELHO",
        "hash": "VF71L9KOYN"
      },
      {
        "email": "raquelcp@unipam.edu.br",
        "name": "RAQUEL CLASEN PICH",
        "hash": "NXFZY12VWG"
      },
      {
        "email": "karineca@unipam.edu.br",
        "name": "KARINE CRISTINE DE ALMEIDA",
        "hash": "ANHGVME1ZK"
      },
      {
        "email": "sadyacv@unipam.edu.br",
        "name": "SADY ALEXIS CHAVAUTY VALDES",
        "hash": "3EY0VO8SR6"
      },
      {
        "email": "valeika@unipam.edu.br",
        "name": "VALEIKA CARMINATI",
        "hash": "2BMAXDJCQ0"
      },
      {
        "email": "maranp@unipam.edu.br",
        "name": "MARA NOGUEIRA PORTO",
        "hash": "QS35JWHZVP"
      },
      {
        "email": "danielg@unipam.edu.br",
        "name": "DANIEL AMORIM GOMES",
        "hash": "QXUWL0OGPZ"
      },
      {
        "email": "rodrigomo@unipam.edu.br",
        "name": "RODRIGO MENDES DE OLIVEIRA",
        "hash": "OF43E7JVPG"
      },
      {
        "email": "feagro@hotmail.com",
        "name": "FERNANDO SINONE BACILIERI",
        "hash": "38V2FOE1TD"
      },
      {
        "email": "adrianesn@unipam.edu.br",
        "name": "ADRIANE SILVÉRIO NETO",
        "hash": "X4OS9GMRFH"
      },
      {
        "email": "andreandrade@unipam.edu.br",
        "name": "ANDRÉ SANTANA ANDRADE",
        "hash": "RDTZA4KHGB"
      },
      {
        "email": "brunobg@unipam.edu.br",
        "name": "BRUNO BATISTA GONÇALVES",
        "hash": "KD7PSVZN8J"
      },
      {
        "email": "antonioas@unipam.edu.br",
        "name": "ANTÔNIO AFONSO SOMMER",
        "hash": "1JXLBREICU"
      },
      {
        "email": "paulohfc@unipam.edu.br",
        "name": "PAULO HENRIQUE FERNANDES CAIXETA",
        "hash": "NGWV8QXUFJ"
      },
      {
        "email": "estevaovr@unipam.edu.br",
        "name": "ESTEVÃO VIEIRA DE REZENDE",
        "hash": "J1GWAYKZF2"
      },
      {
        "email": "samirvrocha@unipam.edu.br",
        "name": "SAMIR VAZ VIEIRA ROCHA",
        "hash": "RKBFVWXOE0"
      },
      {
        "email": "meirevieira@unipam.edu.br",
        "name": "MEIRE DE DEUS VIEIRA SANTOS",
        "hash": "1IT60YNLSR"
      },
      {
        "email": "marcoslp@unipam.edu.br",
        "name": "MARCOS LEANDRO PEREIRA",
        "hash": "41N7BOXP0Z"
      },
      {
        "email": "denisesm@unipam.edu.br",
        "name": "DENISE DE SOUZA MATOS",
        "hash": "J65L8RSU0V"
      },
      {
        "email": "cassiaesv@unipam.edu.br",
        "name": "CÁSSIA ENEIDA SOUZA VIEIRA DUTRA",
        "hash": "OZ7GHUB4E1"
      },
      {
        "email": "douglasmp@unipam.edu.br",
        "name": "DOUGLAS MAGALHÃES DE PAULA",
        "hash": "F9SVNKGEYB"
      },
      {
        "email": "deboracml@unipam.edu.br",
        "name": "DÉBORA CRISTINA DE MELO LIMA",
        "hash": "8QRSWKOGVN"
      },
      {
        "email": "jeysoncl@unipam.edu.br",
        "name": "JEYSON CÉSARY LOPES",
        "hash": "BJTSZWINM8"
      },
      {
        "email": "brenoaw@unipam.edu.br",
        "name": "BRENO ALMEIDA WANDERLEY",
        "hash": "ZISGU7WXMD"
      },
      {
        "email": "flavioma@unipam.edu.br",
        "name": "FLÁVIO MOREIRA DE ALMEIDA",
        "hash": "IZ86HTLR4N"
      },
      {
        "email": "lorenepqc@unipam.edu.br",
        "name": "LORENE QUEIROZ CASALI REIS",
        "hash": "FPU1O7HSE0"
      },
      {
        "email": "tida@unipam.edu.br",
        "name": "APARECIDA SILVÉRIO ROSA",
        "hash": "XZJ3GD2F4V"
      },
      {
        "email": "fernandabr@unipam.edu.br",
        "name": "FERNANDA BARCELOS ROCHA",
        "hash": "AP0LI2DE5G"
      },
      {
        "email": "rogerioban@unipam.edu.br",
        "name": "ROGÉRIO BATISTA DE ARAÚJO NETTO",
        "hash": "F8YZX5C76L"
      },
      {
        "email": "virginiabraz@unipam.edu.br",
        "name": "VIRGÍNIA LARA BERNARDES BRAZ",
        "hash": "MPDA75RSO2"
      },
      {
        "email": "marcelobp@unipam.edu.br",
        "name": "MARCELO BORGES DE PAULA",
        "hash": "DVTHFW71G0"
      },
      {
        "email": "moisesavila@unipam.edu.br",
        "name": "MOISÉS ÁVILA DA SILVA",
        "hash": "BS6K40DPT2"
      },
      {
        "email": "helveciomjr@unipam.edu.br",
        "name": "HELVÉCIO MARANGON JÚNIOR",
        "hash": "6F7AVTK0EH"
      },
      {
        "email": "heitorcb@unipam.edu.br",
        "name": "HEITOR CUNHA BARROS",
        "hash": "DWVGHPX7J1"
      },
      {
        "email": "renatonunes@unipam.edu.br",
        "name": "RENATO DE SOUZA NUNES",
        "hash": "3C612H4K8V"
      },
      {
        "email": "fabriciaav@unipam.edu.br",
        "name": "FABRICIA ALVES VIEIRA",
        "hash": "I9RBA8765L"
      },
      {
        "email": "viniciusvieiras@unipam.edu.br",
        "name": "VINÍCIUS VIEIRA SOUSA",
        "hash": "HF8CVDWA45"
      },
      {
        "email": "eduardoca@unipam.edu.br",
        "name": "EDUARDO CARDOSO DE ARAÚJO",
        "hash": "2HYXJ3MQ98"
      },
      {
        "email": "patriciapantaleao@unipam.edu.br",
        "name": "PATRÍCIA DE FÁTIMA PANTALEÃO",
        "hash": "NRO8DBY2TS"
      },
      {
        "email": "anaclaragg@unipam.edu.br",
        "name": "ANA CLARA GARCIA GUIMARÃES",
        "hash": "FW3MS2T5G7"
      },
      {
        "email": "cristianema@unipam.edu.br",
        "name": "CRISTIANE MARIA DOS ANJOS DE AVILA",
        "hash": "AKEW7O2MPF"
      },
      {
        "email": "leonardobiscaro@unipam.edu.br",
        "name": "LEONARDO BISCARO PEREIRA",
        "hash": "L54EO6C07S"
      },
      {
        "email": "naircaetano@unipam.edu.br",
        "name": "NAIR CAETANO DOMINGOS",
        "hash": "N2BZOQ81KF"
      },
      {
        "email": "daniellacborges@unipam.edu.br",
        "name": "DANIELLA CRISTINA BORGES",
        "hash": "NGFOTSMD6K"
      },
      {
        "email": "katiacaetano@unipam.edu.br",
        "name": "KÁTIA ALESSANDRA DE SOUZA CAETANO",
        "hash": "5KV6WY2HIT"
      },
      {
        "email": "mariacga@unipam.edu.br",
        "name": "MARIA CLARA GROSSI ANDRADE",
        "hash": "B0R5DYQ6VO"
      },
      {
        "email": "alexcastro@unipam.edu.br",
        "name": "ALEX DE CASTRO BORGES",
        "hash": "5JODPE4BUS"
      },
      {
        "email": "kellyfaria@unipam.edu.br",
        "name": "KELLY CHRISTINA DE FARIA NUNES",
        "hash": "21ITLOKXZ6"
      },
      {
        "email": "laysbraga@unipam.edu.br",
        "name": "LAYS MAGALHÃES BRAGA",
        "hash": "S94TQGUH82"
      },
      {
        "email": "saraassuncao@unipam.edu.br",
        "name": "SARA CRISTINA DE ASSUNÇÃO MELO NASCIMENTO",
        "hash": "3DNLFXSYV1"
      },
      {
        "email": "gustalvesan@gmail.com",
        "name": "GUSTAVO ALVES SANTOS",
        "hash": "ILH2MXQ1VN"
      },
      {
        "email": "thaysmelo@unipam.edu.br",
        "name": "THAYS CRISTINY SIMÃO MELO",
        "hash": "9SR4KMY321"
      },
      {
        "email": "fernandacarneiro@unipam.edu.br",
        "name": "FERNANDA CARNEIRO DE BASTOS SOUTO",
        "hash": "SMRQYPXAJW"
      },
      {
        "email": "marcosbm@unipam.edu.br",
        "name": "MARCOS BILHARINHO DE MENDONÇA",
        "hash": "Q59LM0KYTC"
      },
      {
        "email": "gasparramos@unipam.edu.br",
        "name": "GASPAR EUGENIO OLIVEIRA RAMOS",
        "hash": "6VYIDOZR8P"
      },
      {
        "email": "karinaalvarenga@unipam.edu.br",
        "name": "KARINA ALVARENGA RIBEIRO",
        "hash": "CVG8BZKM9S"
      },
      {
        "email": "yasminjustine@unipam.edu.br",
        "name": "YASMIN JUSTINE BORGES",
        "hash": "DBYF0XPJLE"
      },
      {
        "email": "arthurwillian@unipam.edu.br",
        "name": "ARTHUR WILLIAN SOARES ALVES",
        "hash": "GMR64NHF1L"
      },
      {
        "email": "cyntiapaixao@unipam.edu.br",
        "name": "CYNTIA PAIXAO MENDES",
        "hash": "4T01XMFY52"
      },
      {
        "email": "filipesilvadm@hotmail.com",
        "name": "FILIPE SILVA CASTRO",
        "hash": "UHCD4TW57Z"
      },
      {
        "email": "mtulio.agro@gmail.com",
        "name": "MARCO TÚLIO GONÇALVES DE PAULA",
        "hash": "XWZSE57684"
      },
      {
        "email": "julyanamachado@unipam.edu.br",
        "name": "JULYANA MACHADO DA SILVA MARTINS",
        "hash": "921V7K5P38"
      },
      {
        "email": "tatianamaciel@unipam.edu.br",
        "name": "TATIANA MACIEL",
        "hash": "ZE8CX62Q5M"
      },
      {
        "email": "flavianazootecnia@gmail.com",
        "name": "FLAVIANA MIRANDA GONÇALVES",
        "hash": "HF3ZBXKARW"
      },
      {
        "email": "elciomoreira@unipam.edu.br",
        "name": "ELCIO MOREIRA ALVES",
        "hash": "4IY07XK8GN"
      },
      {
        "email": "evertonedjar@unipam.edu.br",
        "name": "EVERTON EDJAR ATADEU DA SILVA",
        "hash": "U6AWKBDMXZ"
      },
      {
        "email": "fabianohenrique@unipam.edu.br",
        "name": "FABIANO HENRIQUE MORONTE",
        "hash": "ZYU69QVTLA"
      },
      {
        "email": "fredericovilela@unipam.edu.br",
        "name": "FREDERICO VILANI VILELA",
        "hash": "WFTM64S5XL"
      },
      {
        "email": "kellylonde@unipam.edu.br",
        "name": "KELLY VARGAS LONDE RIBEIRO DE ALMEIDA",
        "hash": "RI849V3COP"
      },
      {
        "email": "kenzoalvarenga@unipam.edu.br",
        "name": "KENZO HOLAYAMA ALVARENGA",
        "hash": "L8O64EN3Y1"
      },
      {
        "email": "mariabd@unipam.edu.br",
        "name": "MARIA BEATRIZ DEVOTI VILELA",
        "hash": "LPF1DRMN6G"
      },
      {
        "email": "mateusfaria@unipam.edu.br",
        "name": "MATEUS LOPES DE FARIA",
        "hash": "FA283RLT6Y"
      },
      {
        "email": "viniciuscarvalho@unipam.edu.br",
        "name": "VINICIUS CARVALHO GOMES GONTIJO",
        "hash": "1AOP2DLRFV"
      },
      {
        "email": "lilianagomes@unipam.edu.br",
        "name": "LILIANA MARIA GOMES",
        "hash": "RM2VT1GPIS"
      },
      {
        "email": "anacmcaixeta@unipam.edu.br",
        "name": "ANA CAROLINA MAGALHÃES CAIXETA",
        "hash": "E1NVJTPW5X"
      },
      {
        "email": "valterpnj@unipam.edu.br",
        "name": "VALTER PAZ DO NASCIMENTO JÚNIOR",
        "hash": "YAQ8OBI4XR"
      },
      {
        "email": "lucasandrade1@unipam.edu.br",
        "name": "LUCAS TADEU ANDRADE",
        "hash": "V2TLYUAXWN"
      },
      {
        "email": "ihale@unipam.edu.br",
        "name": "IHALE DE AQUINO ALVES",
        "hash": "J5BTSH6G4E"
      },
      {
        "email": "eder@unipam.edu.br",
        "name": "EDER MANOEL DE SANTANA",
        "hash": "HC68RGISWQ"
      },
      {
        "email": "thiagocarvalho@unipam.edu.br",
        "name": "THIAGO DE AMORIM CARVALHO",
        "hash": "8VBR6PSFNJ"
      },
      {
        "email": "rodrigosa@unipam.edu.br",
        "name": "RODRIGO SOARES DE ANDRADE",
        "hash": "WOBIMGK8ZX"
      },
      {
        "email": "ivaniapimenta@unipam.edu.br",
        "name": "IVÂNIA APARECIDA PIMENTA SANTOS SILVA",
        "hash": "ARK9DIW6SO"
      },
      {
        "email": "anaceciliacs@unipam.edu.br",
        "name": "ANA CECÍLIA CARDOSO DE SOUSA MOTA",
        "hash": "4RWG63QNZH"
      },
      {
        "email": "capelari@unipam.edu.br",
        "name": "SILVANA CAPELARI ORSOLIN",
        "hash": "PJATEH9I3U"
      },
      {
        "email": "MARCELOBM@UNIPAM.EDU.BR",
        "name": "MARCELO BERNARDI MANZANO",
        "hash": "FXVK3GY5LW"
      },
      {
        "email": "danielps@unipam.edu.br",
        "name": "DANIEL PEREIRA SILVA",
        "hash": "ROLXI5MNZF"
      },
      {
        "email": "heliohv@unipam.edu.br",
        "name": "HÉLIO HENRIQUE VILELA",
        "hash": "7GFYNR3L2Z"
      },
      {
        "email": "mariamamartins@unipam.edu.br",
        "name": "MARIAMA SOUSA AMÂNCIO MARTINS",
        "hash": "MSKXO385GA"
      },
      {
        "email": "rubiacoliveira@unipam.edu.br",
        "name": "RÚBIA CARLA OLIVEIRA",
        "hash": "XH920JVROB"
      },
      {
        "email": "thiagodc@unipam.edu.br",
        "name": "THIAGO DE DEUS CUNHA",
        "hash": "BV90JKWQU1"
      },
      {
        "email": "rodrigoassumpcao@unipam.edu.br",
        "name": "RODRIGO DE CARVALHO ASSUMPÇÃO",
        "hash": "4UFOIH1XAL"
      },
      {
        "email": "thiagocaetano@unipam.edu.br",
        "name": "THIAGO CAETANO DOS SANTOS",
        "hash": "JEBOIZ0LV7"
      },
      {
        "email": "tonycorrea@unipam.edu.br",
        "name": "TONY CORRÊA SILVA",
        "hash": "EB70OP8LVN"
      },
      {
        "email": "fernandobraga@unipam.edu.br",
        "name": "FERNANDO KENNEDY BRAGA OLIVEIRA",
        "hash": "X2W5FNLIRY"
      },
      {
        "email": "ritamundim@uol.com.br",
        "name": "RITA DE CÁSSIA NEVES MUNDIM",
        "hash": "5N3SWJVGX7"
      },
      {
        "email": "lucilamb@unipam.edu.br",
        "name": "LUCILA DE MATOS BORGES",
        "hash": "VIGL3ANDPT"
      },
      {
        "email": "davidson@eulinoefigueiredo.com.br",
        "name": "DAVIDSON HENRIQUE EULINO SILVA SANTOS",
        "hash": "CT2H598ENX"
      },
      {
        "email": "consult.ferrari@gmail.com",
        "name": "VANIRIA FERRARI PINHEIRO CHAVES",
        "hash": "4ZMH12XI3K"
      },
      {
        "email": "felipempcassiano@gmail.com",
        "name": "FELIPE MACHADO PEREIRA CASSIANO",
        "hash": "GWDLEA6Z0U"
      },
      {
        "email": "isabelcarneiro2195@gmail.com",
        "name": "ISABEL CRISTINA DE SOUSA CARNEIRO",
        "hash": "AM29XZSFLI"
      },
      {
        "email": "fabricio_faleiros@hotmail.com",
        "name": "FABRÍCIO FALEIROS DE CASTRO",
        "hash": "SW5EB7XJ08"
      },
      {
        "email": "ighor.thadeu@gmail.com",
        "name": "IGHOR THADEU SILVA OLIVEIRA",
        "hash": "6NQJRYVM5K"
      },
      {
        "email": "wandercy.silva@hotmail.com",
        "name": "WANDERCY AMPARO SILVA",
        "hash": "1ZALU83VWP"
      },
      {
        "email": "viniciuspcs@unipam.edu.br",
        "name": "VINICIUS DE PAULA CASTRO SILVA",
        "hash": "C5KJMYPF1E"
      },
      {
        "email": "vitoriaregina@unipam.edu.br",
        "name": "VITÓRIA REGINA DE MORAIS CARDOSO RODRIGUES",
        "hash": "3P6B09AKGS"
      },
      {
        "email": "sebastiaofilho@unipam.edu.br",
        "name": "SEBASTIÃO DANTAS FILHO",
        "hash": "K7SAHB6IZT"
      },
      {
        "email": "paulohrm@unipam.edu.br",
        "name": "PAULO HENRIQUE RODRIGUES MOREIRA",
        "hash": "KQBAUOGH3D"
      },
      {
        "email": "fabriciocampos@unipam.edu.br",
        "name": "FABRÍCIO CAMPOS MACHADO",
        "hash": "CG6SB19JA5"
      },
      {
        "email": "jessicakn@unipam.edu.br",
        "name": "JÉSSICA KAREN ALVES NOGUEIRA",
        "hash": "2E0K5UW9RN"
      },
      {
        "email": "valterpnj@unipam.edu.br",
        "name": "VALTER PAZ DO NASCIMENTO JÚNIOR",
        "hash": "52WIAH3T0P"
      },
      {
        "email": "suellencm@unipam.edu.br",
        "name": "SUELLEN CRISTINE MEIRA",
        "hash": "4SJFLDGO56"
      },
      {
        "email": "elisamana@unipam.edu.br",
        "name": "ELISAMA DO NASCIMENTO ALEXANDRINO",
        "hash": "EL4R3TZGN9"
      },
      {
        "email": "douglascb@unipam.edu.br",
        "name": "DOUGLAS CARDOSO BRANDÃO",
        "hash": "KUY1OJTDPQ"
      },
      {
        "email": "deboracml@unipam.edu.br",
        "name": "DÉBORA CRISTINA DE MELO LIMA",
        "hash": "MCLDSHTEYN"
      },
      {
        "email": "danielass@unipam.edu.br",
        "name": "DANIELA SILVA SOUZA",
        "hash": "61INYDGZTL"
      },
      {
        "email": "tatianacmontes@unipam.edu.br",
        "name": "TATIANA CARVALHO MONTES",
        "hash": "UBO7SIFPYA"
      },
      {
        "email": "crislainesousa@unipam.edu.br",
        "name": "CRISLAINE SILVA DE SOUSA",
        "hash": "TW01Z8XLYC"
      },
      {
        "email": "aletheiamoraes@unipam.edu.br",
        "name": "ALETHEIA MORAES ROCHA",
        "hash": "M1RWD84UTZ"
      },
      {
        "email": "alannasg@unipam.edu.br",
        "name": "ALANNA SIMAO GOMES SATURNINO",
        "hash": "HQJFOWULS9"
      },
      {
        "email": "lucasthiago@unipam.edu.br",
        "name": "LUCAS LUIS THIAGO",
        "hash": "2I13KUO4M8"
      },
      {
        "email": "rafaelalsbarbosa@unipam.edu.br",
        "name": "RAFAELA LARA BARBOSA MOTA DE ALMEIDA",
        "hash": "RC4L8IEXYH"
      },
      {
        "email": "elcimarcaixeta@unipam.edu.br",
        "name": "ELCIMAR DOS REIS CAIXETA",
        "hash": "3WNTSVB2H9"
      },
      {
        "email": "orlandofaquino@unipam.edu.br",
        "name": "ORLANDO FERNÁNDEZ AQUINO",
        "hash": "XKV2END9O5"
      },
      {
        "email": "rodrigoversiani@unipam.edu.br",
        "name": "RODRIGO LUIZ DA SILVA VERSIANI",
        "hash": "A6PK1C9IBU"
      },
      {
        "email": "tacianosr@unipam.edu.br",
        "name": "TACIANO DA SILVA REDONDO",
        "hash": "IP4XBV6SG5"
      },
      {
        "email": "paulamp@unipam.edu.br",
        "name": "PAULA MARYNELLA ALVES PEREIRA LIMA",
        "hash": "BZOGCXTA07"
      },
      {
        "email": "lannamgdias@unipam.edu.br",
        "name": "LANNA MAYARA GONÇALVES DIAS",
        "hash": "AYFMPOZ6K1"
      },
      {
        "email": "rafaellimabatista@unipam.edu.br",
        "name": "RAFAEL LIMA BATISTA",
        "hash": "9AUC06TL1E"
      },
      {
        "email": "fabianaaa@unipam.edu.br",
        "name": "FABIANA ARAUJO ALMEIDA",
        "hash": "W2QTMZXIG0"
      },
      {
        "email": "adrianoalmeida@unipam.edu.br",
        "name": "ADRIANO LUÍS PULQUÉRIO DE ALMEIDA",
        "hash": "CMWL0VH6QO"
      },
      {
        "email": "soraiavianazoo@gmail.com",
        "name": "SORAIA VIANA FERREIRA",
        "hash": "3UPWRSFHVC"
      },
      {
        "email": "kamilla@unipam.edu.br",
        "name": "KAMILLA HYASMIN CRUZ RODRIGUES",
        "hash": "XTH8DOILGS"
      },
      {
        "email": "renatacv@unipam.edu.br",
        "name": "RENATA CRISTINE VALADARES",
        "hash": "PXC6EIZWVL"
      },
      {
        "email": "daianeteodoro@unipam.edu.br",
        "name": "DAIANE TEODORO DE ANDRADE REIS",
        "hash": "XHLENAMU47"
      },
      {
        "email": "nathaliagomes@unipam.edu.br",
        "name": "NATHALIA SILVA GOMES",
        "hash": "PVK3B8XHEU"
      },
      {
        "email": "hellenferreira@unipam.edu.br",
        "name": "HELLEN APARECIDA FERREIRA",
        "hash": "EIN5TDJVRP"
      },
      {
        "email": "tonycorrea@unipam.edu.br",
        "name": "TONY CORRÊA SILVA",
        "hash": "CIN3YTWK0J"
      },
      {
        "email": "cassiaeleuterio@unipam.edu.br",
        "name": "CÁSSIA PEREIRA TAVARES ELEUTÉRIO",
        "hash": "94JZXIRSGV"
      },
      {
        "email": "victorhcf@unipam.edu.br",
        "name": "VICTOR HENRIQUE DA CUNHA FARIA",
        "hash": "BPXUREVY0J"
      },
      {
        "email": "rafaelmarinho@unipam.edu.br",
        "name": "RAFAEL MARINHO E SILVA",
        "hash": "8AIMSLRVCN"
      },
      {
        "email": "mateusbrum@unipam.edu.br",
        "name": "MATEUS MAIA DE SOUSA BRUM OLIVEIRA",
        "hash": "4TB3V2A96Q"
      },
      {
        "email": "mauraribeiro2000@yahoo.com",
        "name": "MAURA RIBEIRO ALVES",
        "hash": "O8LV4IQ7GX"
      },
      {
        "email": "luizsgf@unipam.edu.br",
        "name": "LUIZ SÉRGIO GROSSI FERREIRA",
        "hash": "XM5Q6H4Y8A"
      },
      {
        "email": "fabianafs@unipam.edu.br",
        "name": "FABIANA FERREIRA DOS SANTOS",
        "hash": "NIADV4O7F5"
      },
      {
        "email": "nacaneppele@gmail.com",
        "name": "NAIRANA RADTKE CANEPPELE BUSSLER",
        "hash": "E6AQOIM1YN"
      },
      {
        "email": "chrisresende@hotmial.com",
        "name": "CHRISTINA RESENDE MARTINS",
        "hash": "A9XKYDMBQE"
      },
      {
        "email": "dilene@unipam.edu.br",
        "name": "DILENE APARECIDA MONTEIRO BORGES GODINHO",
        "hash": "LAID0GHX37"
      },
      {
        "email": "eliassouto@unipam.edu.br",
        "name": "ELIAS DE OLIVEIRA SOUTO",
        "hash": "WTPCBKRJ0F"
      },
      {
        "email": "robertaef@unipam.edu.br",
        "name": "ROBERTA EULÁLIO FRANCO",
        "hash": "8D5WKNSBHT"
      },
      {
        "email": "irisismguimaraes@unipam.edu.br",
        "name": "IRIS ISABELA DA SILVA MEDEIROS GUIMARÃES",
        "hash": "HTURY4OS6X"
      },
      {
        "email": "odetevet.faria@gmail.com",
        "name": "MARIA ODETE FARIA",
        "hash": "NYMG9QB3SV"
      },
      {
        "email": "danilomacedo@unipam.edu.br",
        "name": "DANILO AUGUSTO VITORIO MACEDO",
        "hash": "ZFLDBW2O51"
      },
      {
        "email": "caiopennacchi@gmail.com",
        "name": "CAIO SANTOS PENNACCHI",
        "hash": "7SVB3JIX4T"
      },
      {
        "email": "carolc37@gmail.com",
        "name": "CAROLINA VALADARES NUNES",
        "hash": "WK1FOV0JLS"
      },
      {
        "email": "lucianamorato@unipam.edu.br",
        "name": "LUCIANA CECÍLIA MORATO",
        "hash": "KA5N14XWYR"
      },
      {
        "email": "wellingtonferrari@unipam.edu.br",
        "name": "WELLINGTON FERRARI DA SILVA",
        "hash": "VZ94MDFRU8"
      },
      {
        "email": "lorranequeiroz@unipam.edu.br",
        "name": "LORRANE QUEIROZ",
        "hash": "KWTYMALJV1"
      },
      {
        "email": "annelopes@unipam.edu.br",
        "name": "ANNE JUNEA BARBOSA LOPES",
        "hash": "UMWQBO7KRJ"
      },
      {
        "email": "luiznepomuceno@unipam.edu.br",
        "name": "LUIZ FLAVIO NEPOMUCENO DO NASCIMENTO",
        "hash": "5DZWJC0R1S"
      },
      {
        "email": "jessicalgo@unipam.edu.br",
        "name": "JÉSSICA LUANA GUIMARÃES DE OLIVEIRA",
        "hash": "TG89ENQLW2"
      },
      {
        "email": "rebecamedeiros@unipam.edu.br",
        "name": "REBECA GOMES DE MEDEIROS",
        "hash": "YRGZJWO0TH"
      },
      {
        "email": "fabiomagalhaes@unipam.edu.br",
        "name": "FABIO GONÇALVES DE LIMA MAGALHAES",
        "hash": "Z1IA9SXGN5"
      },
      {
        "email": "aliineestefane08@hotmail.com",
        "name": "ALINE ESTEFANE PESSOA BORBA",
        "hash": "3YU5KRVHLZ"
      },
      {
        "email": "rogerdasilvaborges@hotmail.com",
        "name": "ROGER DA SILVA BORGES",
        "hash": "3V87JC1XT0"
      },
      {
        "email": "ulissesrb@unipam.edu.br",
        "name": "ULISSES REZENDE BRANDÃO",
        "hash": "2N604ML8SC"
      },
      {
        "email": "thaisars@unipam.edu.br",
        "name": "THAISA REIS DOS SANTOS",
        "hash": "5LN1MDQ29Y"
      },
      {
        "email": "jmenezes@unipam.edu.br",
        "name": "JARBAS DE MENEZES",
        "hash": "O1MR5PSVIQ"
      },
      {
        "email": "guilhermeabraga@unipam.edu.br",
        "name": "GUILHERME ANDRÉ BRAGA",
        "hash": "YK4VPO52SI"
      },
      {
        "email": "samuelpaulo@unipam.edu.br",
        "name": "SAMUEL PAULO DA COSTA JÚNIOR",
        "hash": "CX2GW0BDZP"
      },
      {
        "email": "stefaniarg@unipam.edu.br",
        "name": "STEFÂNIA RODRIGUES GERMANO",
        "hash": "1SDV8JGC7Z"
      },
      {
        "email": "nayarahm@gmail.com",
        "name": "NAYARA HORTENCIO MANZAN",
        "hash": "M9D86JWHRY"
      },
      {
        "email": "patihonorato@yahoo.com.br",
        "name": "PATRÍCIA GONÇALVES HONORATO",
        "hash": "ATYDX0WUJB"
      },
      {
        "email": "alissonsouza@hotmail.com",
        "name": "ALISSON DE SOUZA COSTA",
        "hash": "V3EYQRT7CU"
      },
      {
        "email": "danieleperes@unipam.edu.br",
        "name": "DANIELE PERES FERREIRA",
        "hash": "QAZMJXPDS5"
      },
      {
        "email": "angelicapaula@unipam.edu.br",
        "name": "ANGÉLICA DE PAULA POLAC",
        "hash": "698HPFJ2CI"
      },
      {
        "email": "denisetorresb@unipam.edu.br",
        "name": "DENISE TORRES DE BRITO",
        "hash": "9N5DI3Y0QF"
      },
      {
        "email": "cledilsoncarlos@unipam.edu.br",
        "name": "CLEDILSON CARLOS DOS SANTOS ARAUJO",
        "hash": "KJ5O13HDM7"
      },
      {
        "email": "danielaalmeida@unipam.edu.br",
        "name": "DANIELA DA CUNHA LOPES ALMEIDA",
        "hash": "AFWL8BZJQR"
      },
      {
        "email": "wagmarroberto@unipam.edu.br",
        "name": "WAGMAR ROBERTO SILVA",
        "hash": "XYB1G7TN8K"
      },
      {
        "email": "gustavobv@unipam.edu.br",
        "name": "GUSTAVO BERNARDES VASCONCELOS",
        "hash": "OS17WPQRUI"
      },
      {
        "email": "camilarsb@unipam.edu.br",
        "name": "CAMILA RITA DE SOUZA BERTOLONI",
        "hash": "QI81NJPWVK"
      },
      {
        "email": "juliabdias@unipam.edu.br",
        "name": "JÚLIA BERNARDES DIAS",
        "hash": "91GTL2JZOP"
      },
      {
        "email": "nathalialmesilva@unipam.edu.br",
        "name": "NATHALIA LUZIAS DE MATOS E SILVA",
        "hash": "F3HU4VEJR5"
      },
      {
        "email": "juniago@unipam.edu.br",
        "name": "JÚNIA GONÇALVES OLIVEIRA",
        "hash": "29XBFJ75UC"
      },
      {
        "email": "laracp@unipam.edu.br",
        "name": "LARA CRISTINA PEREIRA",
        "hash": "7B06KEI9O2"
      },
      {
        "email": "marcelacaixeta@yahoo.com.br",
        "name": "MARCELA CAIXETA",
        "hash": "4OJFZEX3W7"
      },
      {
        "email": "rfernandeslopes@fapsi.ufu.br",
        "name": "RENATA FERRAREZ FERNANDES LOPES",
        "hash": "407CQ6S8OH"
      },
      {
        "email": "diegoh@unipam.edu.br",
        "name": "DIEGO HENRIQUE DA MOTA",
        "hash": "TPJE4BCKL0"
      },
      {
        "email": "rubenscaixeta@unipam.edu.br",
        "name": "RUBENS FERNANDES CAIXETA JÚNIOR",
        "hash": "NZVJPRIKEF"
      },
      {
        "email": "valdineimatos@unipam.edu.br",
        "name": "VALDINEI MATOS DE ARAUJO",
        "hash": "ZEF8IAV6WP"
      },
      {
        "email": "wesleyfrank@unipam.edu.br",
        "name": "WESLEY FRANK DA SILVA OLIVEIRA",
        "hash": "MPKJYBFGLA"
      },
      {
        "email": "nicollelopes@unipam.edu.br",
        "name": "NICOLLE APARECIDA LOPES",
        "hash": "FZYX8QW704"
      },
      {
        "email": "nataliamaria@unipam.edu.br",
        "name": "NATÁLIA MARIA PEREIRA CAIXETA",
        "hash": "4O7IYS2E68"
      },
      {
        "email": "brendaac@unipam.edu.br",
        "name": "BRENDA THAÍS ALVES CARDOSO",
        "hash": "XLN1D6TCZV"
      },
      {
        "email": "maryellefernandes@unipam.edu.br",
        "name": "MARYELLE FERNANDES DUARTE",
        "hash": "UJHSA0T31K"
      },
      {
        "email": "daelvilela@hotmail.com",
        "name": "DAEL VILELA OLIVEIRA COSTA",
        "hash": "IFO23Q5U1Z"
      },
      {
        "email": "thamymorais@gmail.com",
        "name": "THAMY DE MORAIS MIRANDA",
        "hash": "3LJWDSZ7OR"
      },
      {
        "email": "luizeduardogp@hotmail.com",
        "name": "LUIZ EDUARDO OLIVEIRA SANTOS",
        "hash": "ME7Y690A4Q"
      },
      {
        "email": "jessicarayane@unipam.edu.br",
        "name": "JÉSSICA RAYANE SILVA",
        "hash": "TPZDGFN5LM"
      },
      {
        "email": "vanifatima@unipam.edu.br",
        "name": "VANI DE FATIMA MALAQUIAS",
        "hash": "Y3JW8NCVA4"
      },
      {
        "email": "gabrielmatias@unipam.edu.br",
        "name": "GABRIEL HENRIQUE MATIAS",
        "hash": "YN5PRKBOG9"
      },
      {
        "email": "viniciusgfs@unipam.edu.br",
        "name": "VINÍCIUS GONÇALVES DE FREITAS SILVA",
        "hash": "9KUTCR0ZV4"
      },
      {
        "email": "dianealves@unipam.edu.br",
        "name": "DIANE FÁTIMA ALVES BRAGA",
        "hash": "8CG2BVLPFS"
      },
      {
        "email": "elismar@unipam.edu.br",
        "name": "ELISMAR RAMOS BARBOSA",
        "hash": "6AL5KGMRWF"
      },
      {
        "email": "italopgc@unipam.edu.br",
        "name": "ÍTALO PACHECO GOMES CAIXETA",
        "hash": "8KXHGQS3WI"
      },
      {
        "email": "polyanecas@unipam.edu.br",
        "name": "POLYANE CRISTINA ALVES DA SILVA",
        "hash": "AULQSTDB18"
      },
      {
        "email": "crisleyfontebassi@unipam.edu.br",
        "name": "CRISLEY FONTEBASSI LIMA",
        "hash": "7DB9CWAUX2"
      },
      {
        "email": "mariedureis01@gmail.com",
        "name": "MARIA EDUARDA DOS REIS",
        "hash": "QOB8STWF6D"
      },
      {
        "email": "melissalobato@unipam.edu.br",
        "name": "MELISSA LOBATO DEFENSOR",
        "hash": "PZ3OWYQI0N"
      },
      {
        "email": "joci.mar@me.com",
        "name": "JOCIMAR AVELAR MARTINS",
        "hash": "VEBG60M8TW"
      },
      {
        "email": "ronaldojrti@gmail.com",
        "name": "RONALDO ALVES BATISTA JUNIOR",
        "hash": "IZOY5T3U9A"
      },
      {
        "email": "hirleneoliveira@unipam.edu.br",
        "name": "HIRLENE DE OLIVEIRA E SILVA",
        "hash": "V8IL5KESJF"
      },
      {
        "email": "daniellefg@unipam.edu.br",
        "name": "DANIELLE DE FREITAS GONÇALVES",
        "hash": "1TA9GZ5SNH"
      },
      {
        "email": "lorenampv@unipam.edu.br",
        "name": "LORENA MARQUES HECK DE PIAU VIEIRA",
        "hash": "C8WOI6JDMB"
      },
      {
        "email": "rafaelvinhal@unipam.edu.br",
        "name": "RAFAEL VINHAL DA COSTA",
        "hash": "LDWTBGNCYI"
      },
      {
        "email": "gabrielaferreira@unipam.edu.br",
        "name": "GABRIELA CARDOSO MAIA DE ALBUQUERQUE FERREIRA",
        "hash": "V97JBKRCL4"
      },
      {
        "email": "fernandonascimento@unipam.edu.br",
        "name": "FERNANDO NASCIMENTO",
        "hash": "7HPVX3C2OQ"
      },
      {
        "email": "eduardomoura@unipam.edu.br",
        "name": "EDUARDO MOURA MENDES",
        "hash": "H0L7QZC81V"
      },
      {
        "email": "fernandadornela.ufv@gmail.com",
        "name": "FERNANDA JUNIA DORNELA",
        "hash": "J8MUKWCPDX"
      },
      {
        "email": "alexandrehs@unipam.edu.br",
        "name": "ALEXANDRE HENRICK DA SILVA ALVES",
        "hash": "J7HOASCZX5"
      },
      {
        "email": "daniolivfisio@gmail.com",
        "name": "DANIELE OLIVEIRA DOS SANTOS",
        "hash": "CJ5DS1E3LW"
      },
      {
        "email": "izabela.mb@hotmail.com",
        "name": "IZABELA DE MOURA BORGES",
        "hash": "M0F2T56EKX"
      },
      {
        "email": "ibisarianamoraes@gmail.com",
        "name": "ÍBIS ARIANA PEÑA DE MORAES",
        "hash": "8OFNJ5B9Y1"
      },
      {
        "email": "dialetika@dialetika.com.br",
        "name": "INOCÊNCIO MAGELA DE OLIVEIRA",
        "hash": "H6LPSU8RC1"
      },
      {
        "email": "coordenacao.cientifica@ceafi.edu.br",
        "name": "GIULLIANO GARDENGHI",
        "hash": "EQXSMBAN4P"
      },
      {
        "email": "elson@unipam.edu.br",
        "name": "ELSON KAGIMURA",
        "hash": "N24F160BPY"
      },
      {
        "email": "gustavoferreira_s@hotmail.com",
        "name": "GUSTAVO FERREIRA DE SOUSA",
        "hash": "EVXD69RSP5"
      },
      {
        "email": "renatohs@unipam.edu.br",
        "name": "RENATO HENRIQUE DA SILVA",
        "hash": "T2HDE87LC1"
      },
      {
        "email": "angelacaixeta@unipam.edu.br",
        "name": "ANGELA CAIXETA DIAS",
        "hash": "I1KDYBEHTR"
      },
      {
        "email": "djacyr@gmail.com",
        "name": "DJACYR CAETANO VIANA FILHO",
        "hash": "V28C146Y9G"
      },
      {
        "email": "dalila.araujo5@gmail.com",
        "name": "DALILA BISPO ARAUJO",
        "hash": "DG93EX6FVS"
      },
      {
        "email": "fabriciohfigueiredo@gmail.com",
        "name": "FABRÍCIO HENRIQUE DE FIGUEIREDO",
        "hash": "SA4CBKT581"
      },
      {
        "email": "m.adriely@hotmail.com",
        "name": "MAILA ADRIELY SILVA",
        "hash": "TAH15QD9IC"
      },
      {
        "email": "montagnero@ufu.br",
        "name": "ALEXANDRE VIANNA MONTAGNERO",
        "hash": "S6Q5EVJCT9"
      },
      {
        "email": "pollyanatiburcio@yahoo.com",
        "name": "POLLYANA LOURDES TIBURCIO DE MEDEIROS",
        "hash": "2E4PK36LWF"
      },
      {
        "email": "hamletdiaz@unipam.edu.br",
        "name": "HAMLET FERNANDEZ DIAZ",
        "hash": "2OJ7ZRPE1C"
      },
      {
        "email": "egbertoreis@unipam.edu.br",
        "name": "EGBERTO PEREIRA DOS REIS",
        "hash": "7MABVXPC5U"
      },
      {
        "email": "neirecunha@unipam.edu.br",
        "name": "NEIRE MÁRCIA DA CUNHA",
        "hash": "LSUB0IXQ8Y"
      },
      {
        "email": "mariamello@unipam.edu.br",
        "name": "MARIA APARECIDA MELLO",
        "hash": "6YE5K9S7CI"
      },
      {
        "email": "hellenkc@unipam.edu.br",
        "name": "HELLEN KELLER CAIXETA",
        "hash": "D453TEZ2WV"
      },
      {
        "email": "danielle.rodrigues@unifeob.edu.br",
        "name": "DANIELLE RODRIGUES",
        "hash": "ZUMVY3CONP"
      },
      {
        "email": "luciano@unipam.edu.br",
        "name": "LUCIANO REGIS",
        "hash": "LRI19ZXVNS"
      },
      {
        "email": "mariacecilia1@unipam.edu.br",
        "name": "MARIA CECILIA DE OLIVEIRA",
        "hash": "1QC3FXU57W"
      },
      {
        "email": "rogerioluiz@unipam.edu.br",
        "name": "ROGÉRIO LUIZ DA SILVA",
        "hash": "QR14J986BI"
      },
      {
        "email": "vivianecarvalho@unipam.edu.br",
        "name": "VIVIANE DA CRUZ RIBEIRO CARVALHO",
        "hash": "NU3DG4HMJQ"
      },
      {
        "email": "professor.alexandrelpinheiro@gmail.com",
        "name": "ALEXANDRE LIMA PINHEIRO",
        "hash": "D5UBIVA7E8"
      },
      {
        "email": "ricardoncosta@unipam.edu.br",
        "name": "RICARDO NICOLAU DA COSTA",
        "hash": "P3HZIV90TC"
      },
      {
        "email": "angelicaalves@unipam.edu.br",
        "name": "ANGÉLICA DE MELO ALVES",
        "hash": "DC645W8XSP"
      },
      {
        "email": "flaviacristina@unipam.edu.br",
        "name": "FLAVIA CRISTINA GUIMARAES TEIXEIRA",
        "hash": "BSP7L0KQDG"
      },
      {
        "email": "hudsonbraga@unipam.edu.br",
        "name": "HUDSON ROMÃO BRAGA",
        "hash": "32E4L190HK"
      },
      {
        "email": "diegomoc@unipam.edu.br",
        "name": "DIÊGO MARINHO OLIVEIRA COSTA",
        "hash": "QZLGVUHOSJ"
      },
      {
        "email": "cintianogueira@unipam.edu.br",
        "name": "CINTIA NOGUEIRA DE LIMA",
        "hash": "FHP15X2YWZ"
      },
      {
        "email": "wandersonrsilva@unipam.edu.br",
        "name": "WANDERSON ROBERTO DA SILVA",
        "hash": "5DCORVTJS8"
      },
      {
        "email": "danielreis@unipam.edu.br",
        "name": "DANIEL DE SOUZA REIS",
        "hash": "9DISNG8BX5"
      },
      {
        "email": "mmcribeiro@yahoo.com.br",
        "name": "CINTHIA MUCCI RIBEIRO",
        "hash": "2SN6X0WEZ5"
      },
      {
        "email": "pripalma@gmail.com",
        "name": "PRISCILA DE CAMARGO PALMA",
        "hash": "XS6YG93VAU"
      },
      {
        "email": "marinar@unipam.edu.br",
        "name": "MARINA RODRIGUES DOS REIS",
        "hash": "R3P6UI4215"
      },
      {
        "email": "jaquelinesilva12@unipam.edu.br",
        "name": "JAQUELINE MARIA DA SILVA",
        "hash": "42NGBORJAZ"
      },
      {
        "email": "fabiribeirorp@gmail.com",
        "name": "FABIANA RIBEIRO DE PAULA",
        "hash": "N3UC2ZD4RW"
      },
      {
        "email": "danielandrade@unipam.edu.br",
        "name": "DANIEL ANDRADE FARIA",
        "hash": "K5BYS63MGJ"
      },
      {
        "email": "milton@unipam.edu.br",
        "name": "MILTON ROBERTO DE CASTRO TEIXEIRA",
        "hash": "4B9QO1ZXN2"
      },
      {
        "email": "michellycaroline@unipam.edu.br",
        "name": "MICHELLY CAROLINE MOREIRA SILVA",
        "hash": "TUNWA0Y653"
      },
      {
        "email": "sirleimanzan@yahoo.com.br",
        "name": "SIRLEI MANZAN HORTÊNCIO",
        "hash": "6283FHYWVG"
      },
      {
        "email": "amandazp@unipam.edu.br",
        "name": "AMANDA ZIVIANI PIMENTEL",
        "hash": "ID3A4SPUK9"
      },
      {
        "email": "analacerda@unipam.edu.br",
        "name": "ANA CAROLINA DE LACERDA REIS",
        "hash": "EG7HMBQW4C"
      },
      {
        "email": "gabriellagm@unipam.edu.br",
        "name": "GABRIELLA GONÇALVES DE MELO",
        "hash": "ZBFLPJ5CH6"
      },
      {
        "email": "raquelfa@unipam.edu.br",
        "name": "RAQUEL DE FÁTIMA ALVES",
        "hash": "SBKCZ8AE2J"
      },
      {
        "email": "fabriciosilva@unipam.edu.br",
        "name": "FABRÍCIO PEREIRA SILVA",
        "hash": "AENMJDIC3K"
      },
      {
        "email": "brunocunha@unipam.edu.br",
        "name": "BRUNO SILVA CUNHA",
        "hash": "XM4BJ0TP9W"
      },
      {
        "email": "andrepalharesmagalhaes@gmail.com",
        "name": "ANDRÉ PALHARES DE MAGALHÃES",
        "hash": "P28KOT1FCQ"
      },
      {
        "email": "julia.pfisio@gmail.com",
        "name": "JÚLIA DE FÁTIMA MARTINS PEREIRA",
        "hash": "4HKXY8GW9I"
      },
      {
        "email": "steniasevero@unipam.edu.br",
        "name": "STENIA SEVERO RABELO",
        "hash": "2P4FZ1B6QT"
      },
      {
        "email": "gabrielasilva1@unipam.edu.br",
        "name": "GABRIELA DA SILVA CRUVINEL",
        "hash": "LMBOCZ9HV2"
      },
      {
        "email": "cassioalbino@unipam.edu.br",
        "name": "CASSIO RAFAEL MOREIRA ALBINO",
        "hash": "KVR1AQTB3G"
      },
      {
        "email": "igortemponi@unipam.edu.br",
        "name": "IGOR TEMPONI COSTA",
        "hash": "XATV16JKH2"
      },
      {
        "email": "josemiguel@unipam.edu.br",
        "name": "JOSE MIGUEL DA SILVA MACIEL JUNIOR",
        "hash": "YC9UJB2XVN"
      },
      {
        "email": "karolinelcaixeta@gmail.com",
        "name": "KAROLINE LOPES CAIXETA",
        "hash": "6S1WF3ZVUA"
      },
      {
        "email": "victorqmiranda@hotmail.com",
        "name": "VICTOR QUEIROZ DE MIRANDA",
        "hash": "8RADUFX1LS"
      },
      {
        "email": "jjubs@hotmail.com",
        "name": "JULIANA BARBOSA SOARES",
        "hash": "IY6L7EA4XZ"
      },
      {
        "email": "lourdesbranquinho@uniipam.edu.br",
        "name": "LOURDES GONÇALVES MOREIRA BRANQUINHO",
        "hash": "59G83YMBP0"
      },
      {
        "email": "beatrizbm@unipam.edu.br",
        "name": "BEATRIZ BATISTA DE MENDONÇA",
        "hash": "51OC2YBFAM"
      },
      {
        "email": "pabloassis@unipam.edu.br",
        "name": "PABLO GABRIEL ASSIS CAVALHEIRO",
        "hash": "79PON3MYU5"
      },
      {
        "email": "matheusbrenner@unipam.edu.br",
        "name": "MATHEUS BRENNER RODRIGUES",
        "hash": "ZU2M40H9FP"
      },
      {
        "email": "marcellosimao@unipam.edu.br",
        "name": "MARCELLO SIMÃO DE MORAIS",
        "hash": "89MV7I3QK6"
      },
      {
        "email": "cristina.palhano@yahoo.com.br",
        "name": "ANA CRISTINA PALHANO ARANTES",
        "hash": "I9Y0PBL8N2"
      },
      {
        "email": "rodrigomagela1@unipam.edu.br",
        "name": "RODRIGO MAGELA DE CASTRO BORGES",
        "hash": "W4VAHYUFB6"
      },
      {
        "email": "nivaldotk@unipam.edu.br",
        "name": "NIVALDO GONÇALVES CAIXETA JÚNIOR",
        "hash": "D5CN61VGQ3"
      }
    ]
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


 

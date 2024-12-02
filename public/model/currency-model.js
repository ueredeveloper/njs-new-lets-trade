import fetchAllCurrencies from "../services/fetch-all-currencies.js"

const CurrencyModel = {
    currencies:[],
    getAllCurrencies: async function (){
        this.currencies =[
            {
                "id": null,
                "symbol": "BTCUSDT",
                "price": "95655.63000000"
            },
            {
                "id": null,
                "symbol": "ETHUSDT",
                "price": "3604.75000000"
            },
            {
                "id": null,
                "symbol": "BNBUSDT",
                "price": "638.13000000"
            },
            {
                "id": null,
                "symbol": "NEOUSDT",
                "price": "17.35000000"
            },
            {
                "id": null,
                "symbol": "LTCUSDT",
                "price": "130.55000000"
            },
            {
                "id": null,
                "symbol": "QTUMUSDT",
                "price": "4.26300000"
            },
            {
                "id": null,
                "symbol": "ADAUSDT",
                "price": "1.19840000"
            },
            {
                "id": null,
                "symbol": "XRPUSDT",
                "price": "2.76650000"
            },
            {
                "id": null,
                "symbol": "EOSUSDT",
                "price": "1.12320000"
            },
            {
                "id": null,
                "symbol": "TUSDUSDT",
                "price": "1.00150000"
            },
            {
                "id": null,
                "symbol": "IOTAUSDT",
                "price": "0.38500000"
            },
            {
                "id": null,
                "symbol": "XLMUSDT",
                "price": "0.54850000"
            },
            {
                "id": null,
                "symbol": "ONTUSDT",
                "price": "0.30570000"
            },
            {
                "id": null,
                "symbol": "TRXUSDT",
                "price": "0.21370000"
            },
            {
                "id": null,
                "symbol": "ETCUSDT",
                "price": "32.91000000"
            },
            {
                "id": null,
                "symbol": "ICXUSDT",
                "price": "0.25500000"
            },
            {
                "id": null,
                "symbol": "NULSUSDT",
                "price": "0.43050000"
            },
            {
                "id": null,
                "symbol": "VETUSDT",
                "price": "0.05233000"
            },
            {
                "id": null,
                "symbol": "USDCUSDT",
                "price": "0.99990000"
            },
            {
                "id": null,
                "symbol": "LINKUSDT",
                "price": "23.62000000"
            },
            {
                "id": null,
                "symbol": "ONGUSDT",
                "price": "0.43190000"
            },
            {
                "id": null,
                "symbol": "HOTUSDT",
                "price": "0.00318700"
            },
            {
                "id": null,
                "symbol": "ZILUSDT",
                "price": "0.02989000"
            },
            {
                "id": null,
                "symbol": "ZRXUSDT",
                "price": "0.59180000"
            },
            {
                "id": null,
                "symbol": "FETUSDT",
                "price": "1.76600000"
            },
            {
                "id": null,
                "symbol": "BATUSDT",
                "price": "0.31320000"
            },
            {
                "id": null,
                "symbol": "ZECUSDT",
                "price": "64.53000000"
            },
            {
                "id": null,
                "symbol": "IOSTUSDT",
                "price": "0.00967400"
            },
            {
                "id": null,
                "symbol": "CELRUSDT",
                "price": "0.02259000"
            },
            {
                "id": null,
                "symbol": "DASHUSDT",
                "price": "53.74000000"
            },
            {
                "id": null,
                "symbol": "THETAUSDT",
                "price": "2.84700000"
            },
            {
                "id": null,
                "symbol": "ENJUSDT",
                "price": "0.31480000"
            },
            {
                "id": null,
                "symbol": "ATOMUSDT",
                "price": "9.20000000"
            },
            {
                "id": null,
                "symbol": "TFUELUSDT",
                "price": "0.08630000"
            },
            {
                "id": null,
                "symbol": "ONEUSDT",
                "price": "0.02841000"
            },
            {
                "id": null,
                "symbol": "FTMUSDT",
                "price": "1.06680000"
            },
            {
                "id": null,
                "symbol": "ALGOUSDT",
                "price": "0.53940000"
            },
            {
                "id": null,
                "symbol": "DOGEUSDT",
                "price": "0.42306000"
            },
            {
                "id": null,
                "symbol": "DUSKUSDT",
                "price": "0.28020000"
            },
            {
                "id": null,
                "symbol": "ANKRUSDT",
                "price": "0.04238000"
            },
            {
                "id": null,
                "symbol": "WINUSDT",
                "price": "0.00011698"
            },
            {
                "id": null,
                "symbol": "COSUSDT",
                "price": "0.01210800"
            },
            {
                "id": null,
                "symbol": "MTLUSDT",
                "price": "1.53400000"
            },
            {
                "id": null,
                "symbol": "DENTUSDT",
                "price": "0.00157900"
            },
            {
                "id": null,
                "symbol": "KEYUSDT",
                "price": "0.00239300"
            },
            {
                "id": null,
                "symbol": "WANUSDT",
                "price": "0.26640000"
            },
            {
                "id": null,
                "symbol": "FUNUSDT",
                "price": "0.00434600"
            },
            {
                "id": null,
                "symbol": "CVCUSDT",
                "price": "0.16430000"
            },
            {
                "id": null,
                "symbol": "CHZUSDT",
                "price": "0.10470000"
            },
            {
                "id": null,
                "symbol": "BANDUSDT",
                "price": "1.84800000"
            },
            {
                "id": null,
                "symbol": "XTZUSDT",
                "price": "1.63800000"
            },
            {
                "id": null,
                "symbol": "RENUSDT",
                "price": "0.04807000"
            },
            {
                "id": null,
                "symbol": "RVNUSDT",
                "price": "0.02664000"
            },
            {
                "id": null,
                "symbol": "HBARUSDT",
                "price": "0.28983000"
            },
            {
                "id": null,
                "symbol": "NKNUSDT",
                "price": "0.11320000"
            },
            {
                "id": null,
                "symbol": "STXUSDT",
                "price": "2.27000000"
            },
            {
                "id": null,
                "symbol": "KAVAUSDT",
                "price": "0.60370000"
            },
            {
                "id": null,
                "symbol": "ARPAUSDT",
                "price": "0.06291000"
            },
            {
                "id": null,
                "symbol": "IOTXUSDT",
                "price": "0.05665000"
            },
            {
                "id": null,
                "symbol": "RLCUSDT",
                "price": "2.26400000"
            },
            {
                "id": null,
                "symbol": "CTXCUSDT",
                "price": "0.65720000"
            },
            {
                "id": null,
                "symbol": "BCHUSDT",
                "price": "517.60000000"
            },
            {
                "id": null,
                "symbol": "TROYUSDT",
                "price": "0.00422800"
            },
            {
                "id": null,
                "symbol": "VITEUSDT",
                "price": "0.01359000"
            },
            {
                "id": null,
                "symbol": "FTTUSDT",
                "price": "2.47810000"
            },
            {
                "id": null,
                "symbol": "EURUSDT",
                "price": "1.04900000"
            },
            {
                "id": null,
                "symbol": "OGNUSDT",
                "price": "0.14190000"
            },
            {
                "id": null,
                "symbol": "WRXUSDT",
                "price": "0.18640000"
            },
            {
                "id": null,
                "symbol": "LSKUSDT",
                "price": "1.25000000"
            },
            {
                "id": null,
                "symbol": "BNTUSDT",
                "price": "0.82560000"
            },
            {
                "id": null,
                "symbol": "LTOUSDT",
                "price": "0.19680000"
            },
            {
                "id": null,
                "symbol": "MBLUSDT",
                "price": "0.00410400"
            },
            {
                "id": null,
                "symbol": "COTIUSDT",
                "price": "0.15965000"
            },
            {
                "id": null,
                "symbol": "STPTUSDT",
                "price": "0.05501000"
            },
            {
                "id": null,
                "symbol": "DATAUSDT",
                "price": "0.04967000"
            },
            {
                "id": null,
                "symbol": "SOLUSDT",
                "price": "222.82000000"
            },
            {
                "id": null,
                "symbol": "CTSIUSDT",
                "price": "0.20560000"
            },
            {
                "id": null,
                "symbol": "HIVEUSDT",
                "price": "0.28950000"
            },
            {
                "id": null,
                "symbol": "CHRUSDT",
                "price": "0.29540000"
            },
            {
                "id": null,
                "symbol": "ARDRUSDT",
                "price": "0.12196000"
            },
            {
                "id": null,
                "symbol": "MDTUSDT",
                "price": "0.05595000"
            },
            {
                "id": null,
                "symbol": "STMXUSDT",
                "price": "0.00770600"
            },
            {
                "id": null,
                "symbol": "KNCUSDT",
                "price": "0.69190000"
            },
            {
                "id": null,
                "symbol": "LRCUSDT",
                "price": "0.23880000"
            },
            {
                "id": null,
                "symbol": "COMPUSDT",
                "price": "77.65000000"
            },
            {
                "id": null,
                "symbol": "SCUSDT",
                "price": "0.00705700"
            },
            {
                "id": null,
                "symbol": "ZENUSDT",
                "price": "16.44000000"
            },
            {
                "id": null,
                "symbol": "SNXUSDT",
                "price": "2.64900000"
            },
            {
                "id": null,
                "symbol": "VTHOUSDT",
                "price": "0.00321100"
            },
            {
                "id": null,
                "symbol": "DGBUSDT",
                "price": "0.01533000"
            },
            {
                "id": null,
                "symbol": "SXPUSDT",
                "price": "0.43910000"
            },
            {
                "id": null,
                "symbol": "MKRUSDT",
                "price": "1925.00000000"
            },
            {
                "id": null,
                "symbol": "DCRUSDT",
                "price": "19.25000000"
            },
            {
                "id": null,
                "symbol": "STORJUSDT",
                "price": "0.64220000"
            },
            {
                "id": null,
                "symbol": "MANAUSDT",
                "price": "0.63200000"
            },
            {
                "id": null,
                "symbol": "YFIUSDT",
                "price": "8167.00000000"
            },
            {
                "id": null,
                "symbol": "BALUSDT",
                "price": "2.96800000"
            },
            {
                "id": null,
                "symbol": "BLZUSDT",
                "price": "0.15210000"
            },
            {
                "id": null,
                "symbol": "IRISUSDT",
                "price": "0.01050000"
            },
            {
                "id": null,
                "symbol": "KMDUSDT",
                "price": "0.35240000"
            },
            {
                "id": null,
                "symbol": "JSTUSDT",
                "price": "0.03856000"
            },
            {
                "id": null,
                "symbol": "CRVUSDT",
                "price": "0.76500000"
            },
            {
                "id": null,
                "symbol": "SANDUSDT",
                "price": "0.64410000"
            },
            {
                "id": null,
                "symbol": "NMRUSDT",
                "price": "21.39000000"
            },
            {
                "id": null,
                "symbol": "DOTUSDT",
                "price": "9.09500000"
            },
            {
                "id": null,
                "symbol": "LUNAUSDT",
                "price": "0.57560000"
            },
            {
                "id": null,
                "symbol": "RSRUSDT",
                "price": "0.00947600"
            },
            {
                "id": null,
                "symbol": "PAXGUSDT",
                "price": "2636.00000000"
            },
            {
                "id": null,
                "symbol": "TRBUSDT",
                "price": "75.59000000"
            },
            {
                "id": null,
                "symbol": "SUSHIUSDT",
                "price": "1.38600000"
            },
            {
                "id": null,
                "symbol": "KSMUSDT",
                "price": "39.62000000"
            },
            {
                "id": null,
                "symbol": "EGLDUSDT",
                "price": "45.84000000"
            },
            {
                "id": null,
                "symbol": "DIAUSDT",
                "price": "0.86620000"
            },
            {
                "id": null,
                "symbol": "RUNEUSDT",
                "price": "5.99800000"
            },
            {
                "id": null,
                "symbol": "FIOUSDT",
                "price": "0.04600000"
            },
            {
                "id": null,
                "symbol": "UMAUSDT",
                "price": "3.36400000"
            },
            {
                "id": null,
                "symbol": "BELUSDT",
                "price": "0.74240000"
            },
            {
                "id": null,
                "symbol": "WINGUSDT",
                "price": "6.58100000"
            },
            {
                "id": null,
                "symbol": "UNIUSDT",
                "price": "13.82000000"
            },
            {
                "id": null,
                "symbol": "OXTUSDT",
                "price": "0.12110000"
            },
            {
                "id": null,
                "symbol": "SUNUSDT",
                "price": "0.02323000"
            },
            {
                "id": null,
                "symbol": "AVAXUSDT",
                "price": "48.39000000"
            },
            {
                "id": null,
                "symbol": "FLMUSDT",
                "price": "0.08910000"
            },
            {
                "id": null,
                "symbol": "UTKUSDT",
                "price": "0.05385000"
            },
            {
                "id": null,
                "symbol": "XVSUSDT",
                "price": "9.81000000"
            },
            {
                "id": null,
                "symbol": "ALPHAUSDT",
                "price": "0.11270000"
            },
            {
                "id": null,
                "symbol": "AAVEUSDT",
                "price": "234.59000000"
            },
            {
                "id": null,
                "symbol": "NEARUSDT",
                "price": "6.70900000"
            },
            {
                "id": null,
                "symbol": "FILUSDT",
                "price": "7.23700000"
            },
            {
                "id": null,
                "symbol": "INJUSDT",
                "price": "29.83000000"
            },
            {
                "id": null,
                "symbol": "AUDIOUSDT",
                "price": "0.18340000"
            },
            {
                "id": null,
                "symbol": "CTKUSDT",
                "price": "0.94340000"
            },
            {
                "id": null,
                "symbol": "AKROUSDT",
                "price": "0.00475700"
            },
            {
                "id": null,
                "symbol": "AXSUSDT",
                "price": "8.78600000"
            },
            {
                "id": null,
                "symbol": "HARDUSDT",
                "price": "0.16550000"
            },
            {
                "id": null,
                "symbol": "STRAXUSDT",
                "price": "0.07225000"
            },
            {
                "id": null,
                "symbol": "ROSEUSDT",
                "price": "0.11650000"
            },
            {
                "id": null,
                "symbol": "AVAUSDT",
                "price": "0.67210000"
            },
            {
                "id": null,
                "symbol": "SKLUSDT",
                "price": "0.07467000"
            },
            {
                "id": null,
                "symbol": "GRTUSDT",
                "price": "0.27890000"
            },
            {
                "id": null,
                "symbol": "JUVUSDT",
                "price": "1.81600000"
            },
            {
                "id": null,
                "symbol": "PSGUSDT",
                "price": "2.96500000"
            },
            {
                "id": null,
                "symbol": "1INCHUSDT",
                "price": "0.47810000"
            },
            {
                "id": null,
                "symbol": "OGUSDT",
                "price": "5.50700000"
            },
            {
                "id": null,
                "symbol": "ATMUSDT",
                "price": "2.20600000"
            },
            {
                "id": null,
                "symbol": "ASRUSDT",
                "price": "2.17000000"
            },
            {
                "id": null,
                "symbol": "CELOUSDT",
                "price": "0.98430000"
            },
            {
                "id": null,
                "symbol": "RIFUSDT",
                "price": "0.13300000"
            },
            {
                "id": null,
                "symbol": "TRUUSDT",
                "price": "0.12010000"
            },
            {
                "id": null,
                "symbol": "CKBUSDT",
                "price": "0.01669900"
            },
            {
                "id": null,
                "symbol": "TWTUSDT",
                "price": "1.26590000"
            },
            {
                "id": null,
                "symbol": "FIROUSDT",
                "price": "1.68600000"
            },
            {
                "id": null,
                "symbol": "LITUSDT",
                "price": "0.98100000"
            },
            {
                "id": null,
                "symbol": "SFPUSDT",
                "price": "0.79490000"
            },
            {
                "id": null,
                "symbol": "DODOUSDT",
                "price": "0.16260000"
            },
            {
                "id": null,
                "symbol": "CAKEUSDT",
                "price": "3.07600000"
            },
            {
                "id": null,
                "symbol": "ACMUSDT",
                "price": "1.80600000"
            },
            {
                "id": null,
                "symbol": "BADGERUSDT",
                "price": "3.91200000"
            },
            {
                "id": null,
                "symbol": "FISUSDT",
                "price": "0.39790000"
            },
            {
                "id": null,
                "symbol": "OMUSDT",
                "price": "3.59230000"
            },
            {
                "id": null,
                "symbol": "PONDUSDT",
                "price": "0.01928000"
            },
            {
                "id": null,
                "symbol": "DEGOUSDT",
                "price": "3.22000000"
            },
            {
                "id": null,
                "symbol": "ALICEUSDT",
                "price": "1.56400000"
            },
            {
                "id": null,
                "symbol": "LINAUSDT",
                "price": "0.00619500"
            },
            {
                "id": null,
                "symbol": "PERPUSDT",
                "price": "0.96190000"
            },
            {
                "id": null,
                "symbol": "SUPERUSDT",
                "price": "1.40970000"
            },
            {
                "id": null,
                "symbol": "CFXUSDT",
                "price": "0.22080000"
            },
            {
                "id": null,
                "symbol": "TKOUSDT",
                "price": "0.40660000"
            },
            {
                "id": null,
                "symbol": "PUNDIXUSDT",
                "price": "0.58210000"
            },
            {
                "id": null,
                "symbol": "TLMUSDT",
                "price": "0.01462000"
            },
            {
                "id": null,
                "symbol": "BARUSDT",
                "price": "2.24400000"
            },
            {
                "id": null,
                "symbol": "FORTHUSDT",
                "price": "4.31600000"
            },
            {
                "id": null,
                "symbol": "BAKEUSDT",
                "price": "0.34240000"
            },
            {
                "id": null,
                "symbol": "BURGERUSDT",
                "price": "0.50510000"
            },
            {
                "id": null,
                "symbol": "SLPUSDT",
                "price": "0.00401300"
            },
            {
                "id": null,
                "symbol": "SHIBUSDT",
                "price": "0.00002922"
            },
            {
                "id": null,
                "symbol": "ICPUSDT",
                "price": "13.14900000"
            },
            {
                "id": null,
                "symbol": "ARUSDT",
                "price": "24.23000000"
            },
            {
                "id": null,
                "symbol": "MASKUSDT",
                "price": "3.69100000"
            },
            {
                "id": null,
                "symbol": "LPTUSDT",
                "price": "15.52100000"
            },
            {
                "id": null,
                "symbol": "XVGUSDT",
                "price": "0.01046500"
            },
            {
                "id": null,
                "symbol": "ATAUSDT",
                "price": "0.12460000"
            },
            {
                "id": null,
                "symbol": "GTCUSDT",
                "price": "1.18200000"
            },
            {
                "id": null,
                "symbol": "ERNUSDT",
                "price": "2.83600000"
            },
            {
                "id": null,
                "symbol": "PHAUSDT",
                "price": "0.16280000"
            },
            {
                "id": null,
                "symbol": "MLNUSDT",
                "price": "22.85000000"
            },
            {
                "id": null,
                "symbol": "DEXEUSDT",
                "price": "9.59700000"
            },
            {
                "id": null,
                "symbol": "C98USDT",
                "price": "0.21620000"
            },
            {
                "id": null,
                "symbol": "CLVUSDT",
                "price": "0.07932000"
            },
            {
                "id": null,
                "symbol": "QNTUSDT",
                "price": "134.00000000"
            },
            {
                "id": null,
                "symbol": "FLOWUSDT",
                "price": "1.02800000"
            },
            {
                "id": null,
                "symbol": "MINAUSDT",
                "price": "0.81160000"
            },
            {
                "id": null,
                "symbol": "RAYUSDT",
                "price": "4.87600000"
            },
            {
                "id": null,
                "symbol": "FARMUSDT",
                "price": "61.48000000"
            },
            {
                "id": null,
                "symbol": "ALPACAUSDT",
                "price": "0.24060000"
            },
            {
                "id": null,
                "symbol": "QUICKUSDT",
                "price": "0.05376000"
            },
            {
                "id": null,
                "symbol": "MBOXUSDT",
                "price": "0.26230000"
            },
            {
                "id": null,
                "symbol": "REQUSDT",
                "price": "0.13270000"
            },
            {
                "id": null,
                "symbol": "GHSTUSDT",
                "price": "1.27600000"
            },
            {
                "id": null,
                "symbol": "WAXPUSDT",
                "price": "0.05497000"
            },
            {
                "id": null,
                "symbol": "GNOUSDT",
                "price": "268.80000000"
            },
            {
                "id": null,
                "symbol": "XECUSDT",
                "price": "0.00004943"
            },
            {
                "id": null,
                "symbol": "ELFUSDT",
                "price": "0.55780000"
            },
            {
                "id": null,
                "symbol": "DYDXUSDT",
                "price": "1.70130000"
            },
            {
                "id": null,
                "symbol": "IDEXUSDT",
                "price": "0.05046000"
            },
            {
                "id": null,
                "symbol": "VIDTUSDT",
                "price": "0.04228000"
            },
            {
                "id": null,
                "symbol": "USDPUSDT",
                "price": "0.99990000"
            },
            {
                "id": null,
                "symbol": "GALAUSDT",
                "price": "0.04307000"
            },
            {
                "id": null,
                "symbol": "ILVUSDT",
                "price": "57.82000000"
            },
            {
                "id": null,
                "symbol": "YGGUSDT",
                "price": "0.69680000"
            },
            {
                "id": null,
                "symbol": "SYSUSDT",
                "price": "0.15520000"
            },
            {
                "id": null,
                "symbol": "DFUSDT",
                "price": "0.04097000"
            },
            {
                "id": null,
                "symbol": "FIDAUSDT",
                "price": "0.32560000"
            },
            {
                "id": null,
                "symbol": "AGLDUSDT",
                "price": "1.45500000"
            },
            {
                "id": null,
                "symbol": "RADUSDT",
                "price": "1.51700000"
            },
            {
                "id": null,
                "symbol": "BETAUSDT",
                "price": "0.04940000"
            },
            {
                "id": null,
                "symbol": "RAREUSDT",
                "price": "0.15210000"
            },
            {
                "id": null,
                "symbol": "LAZIOUSDT",
                "price": "1.74700000"
            },
            {
                "id": null,
                "symbol": "CHESSUSDT",
                "price": "0.21780000"
            },
            {
                "id": null,
                "symbol": "ADXUSDT",
                "price": "0.21200000"
            },
            {
                "id": null,
                "symbol": "AUCTIONUSDT",
                "price": "18.54000000"
            },
            {
                "id": null,
                "symbol": "DARUSDT",
                "price": "0.19138000"
            },
            {
                "id": null,
                "symbol": "BNXUSDT",
                "price": "0.62500000"
            },
            {
                "id": null,
                "symbol": "MOVRUSDT",
                "price": "15.94900000"
            },
            {
                "id": null,
                "symbol": "CITYUSDT",
                "price": "2.15300000"
            },
            {
                "id": null,
                "symbol": "ENSUSDT",
                "price": "41.91000000"
            },
            {
                "id": null,
                "symbol": "QIUSDT",
                "price": "0.02249000"
            },
            {
                "id": null,
                "symbol": "PORTOUSDT",
                "price": "1.87200000"
            },
            {
                "id": null,
                "symbol": "POWRUSDT",
                "price": "0.31930000"
            },
            {
                "id": null,
                "symbol": "JASMYUSDT",
                "price": "0.02980000"
            },
            {
                "id": null,
                "symbol": "AMPUSDT",
                "price": "0.00706000"
            },
            {
                "id": null,
                "symbol": "PYRUSDT",
                "price": "3.91500000"
            },
            {
                "id": null,
                "symbol": "ALCXUSDT",
                "price": "21.46000000"
            },
            {
                "id": null,
                "symbol": "SANTOSUSDT",
                "price": "4.60900000"
            },
            {
                "id": null,
                "symbol": "BICOUSDT",
                "price": "0.37190000"
            },
            {
                "id": null,
                "symbol": "FLUXUSDT",
                "price": "0.74420000"
            },
            {
                "id": null,
                "symbol": "FXSUSDT",
                "price": "3.41800000"
            },
            {
                "id": null,
                "symbol": "VOXELUSDT",
                "price": "0.24110000"
            },
            {
                "id": null,
                "symbol": "HIGHUSDT",
                "price": "1.82900000"
            },
            {
                "id": null,
                "symbol": "CVXUSDT",
                "price": "5.20000000"
            },
            {
                "id": null,
                "symbol": "PEOPLEUSDT",
                "price": "0.06391000"
            },
            {
                "id": null,
                "symbol": "SPELLUSDT",
                "price": "0.00094930"
            },
            {
                "id": null,
                "symbol": "JOEUSDT",
                "price": "0.56170000"
            },
            {
                "id": null,
                "symbol": "ACHUSDT",
                "price": "0.02973000"
            },
            {
                "id": null,
                "symbol": "IMXUSDT",
                "price": "1.94700000"
            },
            {
                "id": null,
                "symbol": "GLMRUSDT",
                "price": "0.31340000"
            },
            {
                "id": null,
                "symbol": "LOKAUSDT",
                "price": "0.26230000"
            },
            {
                "id": null,
                "symbol": "SCRTUSDT",
                "price": "0.70860000"
            },
            {
                "id": null,
                "symbol": "API3USDT",
                "price": "2.25700000"
            },
            {
                "id": null,
                "symbol": "BTTCUSDT",
                "price": "0.00000138"
            },
            {
                "id": null,
                "symbol": "ACAUSDT",
                "price": "0.09620000"
            },
            {
                "id": null,
                "symbol": "XNOUSDT",
                "price": "1.54000000"
            },
            {
                "id": null,
                "symbol": "WOOUSDT",
                "price": "0.31950000"
            },
            {
                "id": null,
                "symbol": "ALPINEUSDT",
                "price": "1.53700000"
            },
            {
                "id": null,
                "symbol": "TUSDT",
                "price": "0.03253000"
            },
            {
                "id": null,
                "symbol": "ASTRUSDT",
                "price": "0.07830000"
            },
            {
                "id": null,
                "symbol": "GMTUSDT",
                "price": "0.21910000"
            },
            {
                "id": null,
                "symbol": "KDAUSDT",
                "price": "1.11280000"
            },
            {
                "id": null,
                "symbol": "APEUSDT",
                "price": "1.51800000"
            },
            {
                "id": null,
                "symbol": "BSWUSDT",
                "price": "0.08220000"
            },
            {
                "id": null,
                "symbol": "BIFIUSDT",
                "price": "339.40000000"
            },
            {
                "id": null,
                "symbol": "STEEMUSDT",
                "price": "0.27390000"
            },
            {
                "id": null,
                "symbol": "NEXOUSDT",
                "price": "1.41500000"
            },
            {
                "id": null,
                "symbol": "REIUSDT",
                "price": "0.07182000"
            },
            {
                "id": null,
                "symbol": "LDOUSDT",
                "price": "1.76400000"
            },
            {
                "id": null,
                "symbol": "OPUSDT",
                "price": "2.41000000"
            },
            {
                "id": null,
                "symbol": "LEVERUSDT",
                "price": "0.00244400"
            },
            {
                "id": null,
                "symbol": "STGUSDT",
                "price": "0.39210000"
            },
            {
                "id": null,
                "symbol": "LUNCUSDT",
                "price": "0.00013753"
            },
            {
                "id": null,
                "symbol": "GMXUSDT",
                "price": "31.10000000"
            },
            {
                "id": null,
                "symbol": "POLYXUSDT",
                "price": "0.36150000"
            },
            {
                "id": null,
                "symbol": "APTUSDT",
                "price": "12.81000000"
            },
            {
                "id": null,
                "symbol": "OSMOUSDT",
                "price": "0.59060000"
            },
            {
                "id": null,
                "symbol": "HFTUSDT",
                "price": "0.25340000"
            },
            {
                "id": null,
                "symbol": "PHBUSDT",
                "price": "2.19200000"
            },
            {
                "id": null,
                "symbol": "HOOKUSDT",
                "price": "0.59550000"
            },
            {
                "id": null,
                "symbol": "MAGICUSDT",
                "price": "0.56060000"
            },
            {
                "id": null,
                "symbol": "HIFIUSDT",
                "price": "0.69930000"
            },
            {
                "id": null,
                "symbol": "RPLUSDT",
                "price": "13.59000000"
            },
            {
                "id": null,
                "symbol": "PROSUSDT",
                "price": "0.67980000"
            },
            {
                "id": null,
                "symbol": "GNSUSDT",
                "price": "2.50300000"
            },
            {
                "id": null,
                "symbol": "SYNUSDT",
                "price": "0.69270000"
            },
            {
                "id": null,
                "symbol": "VIBUSDT",
                "price": "0.08316000"
            },
            {
                "id": null,
                "symbol": "SSVUSDT",
                "price": "31.61000000"
            },
            {
                "id": null,
                "symbol": "LQTYUSDT",
                "price": "1.53300000"
            },
            {
                "id": null,
                "symbol": "AMBUSDT",
                "price": "0.00864000"
            },
            {
                "id": null,
                "symbol": "USTCUSDT",
                "price": "0.02592000"
            },
            {
                "id": null,
                "symbol": "GASUSDT",
                "price": "6.03400000"
            },
            {
                "id": null,
                "symbol": "GLMUSDT",
                "price": "0.47050000"
            },
            {
                "id": null,
                "symbol": "PROMUSDT",
                "price": "6.46700000"
            },
            {
                "id": null,
                "symbol": "QKCUSDT",
                "price": "0.01237100"
            },
            {
                "id": null,
                "symbol": "UFTUSDT",
                "price": "0.31820000"
            },
            {
                "id": null,
                "symbol": "IDUSDT",
                "price": "0.56560000"
            },
            {
                "id": null,
                "symbol": "ARBUSDT",
                "price": "0.96140000"
            },
            {
                "id": null,
                "symbol": "OAXUSDT",
                "price": "0.08460000"
            },
            {
                "id": null,
                "symbol": "RDNTUSDT",
                "price": "0.08610000"
            },
            {
                "id": null,
                "symbol": "WBTCUSDT",
                "price": "95473.23000000"
            },
            {
                "id": null,
                "symbol": "EDUUSDT",
                "price": "0.63680000"
            },
            {
                "id": null,
                "symbol": "SUIUSDT",
                "price": "3.24180000"
            },
            {
                "id": null,
                "symbol": "AERGOUSDT",
                "price": "0.14280000"
            },
            {
                "id": null,
                "symbol": "PEPEUSDT",
                "price": "0.00002018"
            },
            {
                "id": null,
                "symbol": "FLOKIUSDT",
                "price": "0.00022397"
            },
            {
                "id": null,
                "symbol": "ASTUSDT",
                "price": "0.10430000"
            },
            {
                "id": null,
                "symbol": "SNTUSDT",
                "price": "0.04800000"
            },
            {
                "id": null,
                "symbol": "COMBOUSDT",
                "price": "0.53590000"
            },
            {
                "id": null,
                "symbol": "MAVUSDT",
                "price": "0.28860000"
            },
            {
                "id": null,
                "symbol": "PENDLEUSDT",
                "price": "5.58900000"
            },
            {
                "id": null,
                "symbol": "ARKMUSDT",
                "price": "2.18700000"
            },
            {
                "id": null,
                "symbol": "WBETHUSDT",
                "price": "3805.47000000"
            },
            {
                "id": null,
                "symbol": "WLDUSDT",
                "price": "3.15900000"
            },
            {
                "id": null,
                "symbol": "FDUSDUSDT",
                "price": "0.99820000"
            },
            {
                "id": null,
                "symbol": "SEIUSDT",
                "price": "0.61470000"
            },
            {
                "id": null,
                "symbol": "CYBERUSDT",
                "price": "4.67700000"
            },
            {
                "id": null,
                "symbol": "ARKUSDT",
                "price": "0.69410000"
            },
            {
                "id": null,
                "symbol": "CREAMUSDT",
                "price": "20.21000000"
            },
            {
                "id": null,
                "symbol": "GFTUSDT",
                "price": "0.00460000"
            },
            {
                "id": null,
                "symbol": "IQUSDT",
                "price": "0.00854900"
            },
            {
                "id": null,
                "symbol": "NTRNUSDT",
                "price": "0.52640000"
            },
            {
                "id": null,
                "symbol": "TIAUSDT",
                "price": "7.28000000"
            },
            {
                "id": null,
                "symbol": "MEMEUSDT",
                "price": "0.01533000"
            },
            {
                "id": null,
                "symbol": "ORDIUSDT",
                "price": "39.16000000"
            },
            {
                "id": null,
                "symbol": "BEAMXUSDT",
                "price": "0.02642000"
            },
            {
                "id": null,
                "symbol": "PIVXUSDT",
                "price": "0.28210000"
            },
            {
                "id": null,
                "symbol": "VICUSDT",
                "price": "0.48320000"
            },
            {
                "id": null,
                "symbol": "BLURUSDT",
                "price": "0.38170000"
            },
            {
                "id": null,
                "symbol": "VANRYUSDT",
                "price": "0.14950000"
            },
            {
                "id": null,
                "symbol": "AEURUSDT",
                "price": "1.04850000"
            },
            {
                "id": null,
                "symbol": "JTOUSDT",
                "price": "3.42900000"
            },
            {
                "id": null,
                "symbol": "1000SATSUSDT",
                "price": "0.00026440"
            },
            {
                "id": null,
                "symbol": "BONKUSDT",
                "price": "0.00004205"
            },
            {
                "id": null,
                "symbol": "ACEUSDT",
                "price": "3.12200000"
            },
            {
                "id": null,
                "symbol": "NFPUSDT",
                "price": "0.34570000"
            },
            {
                "id": null,
                "symbol": "AIUSDT",
                "price": "0.70200000"
            },
            {
                "id": null,
                "symbol": "XAIUSDT",
                "price": "0.36640000"
            },
            {
                "id": null,
                "symbol": "MANTAUSDT",
                "price": "1.16500000"
            },
            {
                "id": null,
                "symbol": "ALTUSDT",
                "price": "0.15553000"
            },
            {
                "id": null,
                "symbol": "JUPUSDT",
                "price": "1.14910000"
            },
            {
                "id": null,
                "symbol": "PYTHUSDT",
                "price": "0.48040000"
            },
            {
                "id": null,
                "symbol": "RONINUSDT",
                "price": "2.18600000"
            },
            {
                "id": null,
                "symbol": "DYMUSDT",
                "price": "2.20900000"
            },
            {
                "id": null,
                "symbol": "PIXELUSDT",
                "price": "0.24670000"
            },
            {
                "id": null,
                "symbol": "STRKUSDT",
                "price": "0.67910000"
            },
            {
                "id": null,
                "symbol": "PORTALUSDT",
                "price": "0.43830000"
            },
            {
                "id": null,
                "symbol": "PDAUSDT",
                "price": "0.05373000"
            },
            {
                "id": null,
                "symbol": "AXLUSDT",
                "price": "0.98710000"
            },
            {
                "id": null,
                "symbol": "WIFUSDT",
                "price": "3.05000000"
            },
            {
                "id": null,
                "symbol": "METISUSDT",
                "price": "60.00000000"
            },
            {
                "id": null,
                "symbol": "AEVOUSDT",
                "price": "0.50730000"
            },
            {
                "id": null,
                "symbol": "BOMEUSDT",
                "price": "0.00888000"
            },
            {
                "id": null,
                "symbol": "ETHFIUSDT",
                "price": "2.53900000"
            },
            {
                "id": null,
                "symbol": "ENAUSDT",
                "price": "0.80640000"
            },
            {
                "id": null,
                "symbol": "WUSDT",
                "price": "0.32960000"
            },
            {
                "id": null,
                "symbol": "TNSRUSDT",
                "price": "0.67090000"
            },
            {
                "id": null,
                "symbol": "SAGAUSDT",
                "price": "2.23880000"
            },
            {
                "id": null,
                "symbol": "TAOUSDT",
                "price": "585.80000000"
            },
            {
                "id": null,
                "symbol": "OMNIUSDT",
                "price": "12.03000000"
            },
            {
                "id": null,
                "symbol": "REZUSDT",
                "price": "0.05541000"
            },
            {
                "id": null,
                "symbol": "BBUSDT",
                "price": "0.38810000"
            },
            {
                "id": null,
                "symbol": "NOTUSDT",
                "price": "0.00840400"
            },
            {
                "id": null,
                "symbol": "IOUSDT",
                "price": "3.13700000"
            },
            {
                "id": null,
                "symbol": "ZKUSDT",
                "price": "0.21860000"
            },
            {
                "id": null,
                "symbol": "LISTAUSDT",
                "price": "0.52000000"
            },
            {
                "id": null,
                "symbol": "ZROUSDT",
                "price": "6.23800000"
            },
            {
                "id": null,
                "symbol": "GUSDT",
                "price": "0.03753000"
            },
            {
                "id": null,
                "symbol": "BANANAUSDT",
                "price": "57.70000000"
            },
            {
                "id": null,
                "symbol": "RENDERUSDT",
                "price": "8.32300000"
            },
            {
                "id": null,
                "symbol": "TONUSDT",
                "price": "6.50800000"
            },
            {
                "id": null,
                "symbol": "DOGSUSDT",
                "price": "0.00070310"
            },
            {
                "id": null,
                "symbol": "EURIUSDT",
                "price": "1.04850000"
            },
            {
                "id": null,
                "symbol": "SLFUSDT",
                "price": "0.49820000"
            },
            {
                "id": null,
                "symbol": "POLUSDT",
                "price": "0.62650000"
            },
            {
                "id": null,
                "symbol": "NEIROUSDT",
                "price": "0.00179304"
            },
            {
                "id": null,
                "symbol": "TURBOUSDT",
                "price": "0.00717000"
            },
            {
                "id": null,
                "symbol": "1MBABYDOGEUSDT",
                "price": "0.00232760"
            },
            {
                "id": null,
                "symbol": "CATIUSDT",
                "price": "0.57800000"
            },
            {
                "id": null,
                "symbol": "HMSTRUSDT",
                "price": "0.00394600"
            },
            {
                "id": null,
                "symbol": "EIGENUSDT",
                "price": "3.66300000"
            },
            {
                "id": null,
                "symbol": "SCRUSDT",
                "price": "0.90300000"
            },
            {
                "id": null,
                "symbol": "BNSOLUSDT",
                "price": "226.70000000"
            },
            {
                "id": null,
                "symbol": "LUMIAUSDT",
                "price": "1.72100000"
            },
            {
                "id": null,
                "symbol": "KAIAUSDT",
                "price": "0.38090000"
            },
            {
                "id": null,
                "symbol": "COWUSDT",
                "price": "0.39660000"
            },
            {
                "id": null,
                "symbol": "CETUSUSDT",
                "price": "0.33860000"
            }
        ]
        //await fetchAllCurrencies();

        return this.currencies;
    }
}

export default CurrencyModel;
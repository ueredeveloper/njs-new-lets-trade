import fetchAllCurrencies from '../services/fetch-all-currencies.js';

const CurrencyModel = {
    currencies: [],
    getAllCurrencies: async function () {
        /*if (!this.currencies) {
            this.currencies = await fetchAllCurrencies();
        }*/
 
        return this.currencies = [
            {
                "id": null,
                "symbol": "BTCUSDT",
                "price": "95768.01000000"
            },
            {
                "id": null,
                "symbol": "ETHUSDT",
                "price": "3705.44000000"
            },
            {
                "id": null,
                "symbol": "BNBUSDT",
                "price": "774.99000000"
            },
            {
                "id": null,
                "symbol": "NEOUSDT",
                "price": "22.94000000"
            },
            {
                "id": null,
                "symbol": "LTCUSDT",
                "price": "127.73000000"
            },
            {
                "id": null,
                "symbol": "QTUMUSDT",
                "price": "5.14000000"
            },
            {
                "id": null,
                "symbol": "ADAUSDT",
                "price": "1.20920000"
            },
            {
                "id": null,
                "symbol": "XRPUSDT",
                "price": "2.56030000"
            },
            {
                "id": null,
                "symbol": "EOSUSDT",
                "price": "1.36630000"
            },
            {
                "id": null,
                "symbol": "TUSDUSDT",
                "price": "1.00420000"
            },
            {
                "id": null,
                "symbol": "IOTAUSDT",
                "price": "0.52330000"
            },
            {
                "id": null,
                "symbol": "XLMUSDT",
                "price": "0.50850000"
            },
            {
                "id": null,
                "symbol": "ONTUSDT",
                "price": "0.37290000"
            },
            {
                "id": null,
                "symbol": "TRXUSDT",
                "price": "0.37630000"
            },
            {
                "id": null,
                "symbol": "ETCUSDT",
                "price": "36.06000000"
            },
            {
                "id": null,
                "symbol": "ICXUSDT",
                "price": "0.29080000"
            },
            {
                "id": null,
                "symbol": "NULSUSDT",
                "price": "0.55550000"
            },
            {
                "id": null,
                "symbol": "VETUSDT",
                "price": "0.06952000"
            },
            {
                "id": null,
                "symbol": "USDCUSDT",
                "price": "0.99940000"
            },
            {
                "id": null,
                "symbol": "LINKUSDT",
                "price": "24.47000000"
            },
            {
                "id": null,
                "symbol": "ONGUSDT",
                "price": "0.50280000"
            },
            {
                "id": null,
                "symbol": "HOTUSDT",
                "price": "0.00374100"
            },
            {
                "id": null,
                "symbol": "ZILUSDT",
                "price": "0.03444000"
            },
            {
                "id": null,
                "symbol": "ZRXUSDT",
                "price": "0.66890000"
            },
            {
                "id": null,
                "symbol": "FETUSDT",
                "price": "1.92400000"
            },
            {
                "id": null,
                "symbol": "BATUSDT",
                "price": "0.36120000"
            },
            {
                "id": null,
                "symbol": "ZECUSDT",
                "price": "72.38000000"
            },
            {
                "id": null,
                "symbol": "IOSTUSDT",
                "price": "0.01136600"
            },
            {
                "id": null,
                "symbol": "CELRUSDT",
                "price": "0.02572000"
            },
            {
                "id": null,
                "symbol": "DASHUSDT",
                "price": "60.27000000"
            },
            {
                "id": null,
                "symbol": "THETAUSDT",
                "price": "3.02700000"
            },
            {
                "id": null,
                "symbol": "ENJUSDT",
                "price": "0.37960000"
            },
            {
                "id": null,
                "symbol": "ATOMUSDT",
                "price": "10.53800000"
            },
            {
                "id": null,
                "symbol": "TFUELUSDT",
                "price": "0.09314000"
            },
            {
                "id": null,
                "symbol": "ONEUSDT",
                "price": "0.03197000"
            },
            {
                "id": null,
                "symbol": "FTMUSDT",
                "price": "1.25900000"
            },
            {
                "id": null,
                "symbol": "ALGOUSDT",
                "price": "0.51070000"
            },
            {
                "id": null,
                "symbol": "DOGEUSDT",
                "price": "0.41240000"
            },
            {
                "id": null,
                "symbol": "DUSKUSDT",
                "price": "0.31990000"
            },
            {
                "id": null,
                "symbol": "ANKRUSDT",
                "price": "0.05104000"
            },
            {
                "id": null,
                "symbol": "WINUSDT",
                "price": "0.00016337"
            },
            {
                "id": null,
                "symbol": "COSUSDT",
                "price": "0.01352600"
            },
            {
                "id": null,
                "symbol": "MTLUSDT",
                "price": "1.71700000"
            },
            {
                "id": null,
                "symbol": "DENTUSDT",
                "price": "0.00190400"
            },
            {
                "id": null,
                "symbol": "KEYUSDT",
                "price": "0.00220100"
            },
            {
                "id": null,
                "symbol": "WANUSDT",
                "price": "0.31070000"
            },
            {
                "id": null,
                "symbol": "FUNUSDT",
                "price": "0.00605800"
            },
            {
                "id": null,
                "symbol": "CVCUSDT",
                "price": "0.19070000"
            },
            {
                "id": null,
                "symbol": "CHZUSDT",
                "price": "0.13570000"
            },
            {
                "id": null,
                "symbol": "BANDUSDT",
                "price": "2.23600000"
            },
            {
                "id": null,
                "symbol": "XTZUSDT",
                "price": "1.73600000"
            },
            {
                "id": null,
                "symbol": "RENUSDT",
                "price": "0.04858000"
            },
            {
                "id": null,
                "symbol": "RVNUSDT",
                "price": "0.03379000"
            },
            {
                "id": null,
                "symbol": "HBARUSDT",
                "price": "0.31529000"
            },
            {
                "id": null,
                "symbol": "NKNUSDT",
                "price": "0.13670000"
            },
            {
                "id": null,
                "symbol": "STXUSDT",
                "price": "2.63300000"
            },
            {
                "id": null,
                "symbol": "KAVAUSDT",
                "price": "0.72580000"
            },
            {
                "id": null,
                "symbol": "ARPAUSDT",
                "price": "0.07304000"
            },
            {
                "id": null,
                "symbol": "IOTXUSDT",
                "price": "0.06327000"
            },
            {
                "id": null,
                "symbol": "RLCUSDT",
                "price": "2.64700000"
            },
            {
                "id": null,
                "symbol": "CTXCUSDT",
                "price": "0.65860000"
            },
            {
                "id": null,
                "symbol": "BCHUSDT",
                "price": "563.90000000"
            },
            {
                "id": null,
                "symbol": "TROYUSDT",
                "price": "0.00447700"
            },
            {
                "id": null,
                "symbol": "VITEUSDT",
                "price": "0.01552000"
            },
            {
                "id": null,
                "symbol": "FTTUSDT",
                "price": "2.71120000"
            },
            {
                "id": null,
                "symbol": "EURUSDT",
                "price": "1.04830000"
            },
            {
                "id": null,
                "symbol": "OGNUSDT",
                "price": "0.16620000"
            },
            {
                "id": null,
                "symbol": "WRXUSDT",
                "price": "0.23680000"
            },
            {
                "id": null,
                "symbol": "LSKUSDT",
                "price": "1.46100000"
            },
            {
                "id": null,
                "symbol": "BNTUSDT",
                "price": "0.91780000"
            },
            {
                "id": null,
                "symbol": "LTOUSDT",
                "price": "0.23110000"
            },
            {
                "id": null,
                "symbol": "MBLUSDT",
                "price": "0.00434600"
            },
            {
                "id": null,
                "symbol": "COTIUSDT",
                "price": "0.17376000"
            },
            {
                "id": null,
                "symbol": "STPTUSDT",
                "price": "0.06130000"
            },
            {
                "id": null,
                "symbol": "DATAUSDT",
                "price": "0.05899000"
            },
            {
                "id": null,
                "symbol": "SOLUSDT",
                "price": "232.32000000"
            },
            {
                "id": null,
                "symbol": "CTSIUSDT",
                "price": "0.24310000"
            },
            {
                "id": null,
                "symbol": "HIVEUSDT",
                "price": "0.32270000"
            },
            {
                "id": null,
                "symbol": "CHRUSDT",
                "price": "0.34920000"
            },
            {
                "id": null,
                "symbol": "ARDRUSDT",
                "price": "0.12854000"
            },
            {
                "id": null,
                "symbol": "MDTUSDT",
                "price": "0.06220000"
            },
            {
                "id": null,
                "symbol": "STMXUSDT",
                "price": "0.00891200"
            },
            {
                "id": null,
                "symbol": "KNCUSDT",
                "price": "0.88480000"
            },
            {
                "id": null,
                "symbol": "LRCUSDT",
                "price": "0.31090000"
            },
            {
                "id": null,
                "symbol": "COMPUSDT",
                "price": "108.51000000"
            },
            {
                "id": null,
                "symbol": "SCUSDT",
                "price": "0.00817000"
            },
            {
                "id": null,
                "symbol": "ZENUSDT",
                "price": "17.20000000"
            },
            {
                "id": null,
                "symbol": "SNXUSDT",
                "price": "3.16400000"
            },
            {
                "id": null,
                "symbol": "VTHOUSDT",
                "price": "0.00409200"
            },
            {
                "id": null,
                "symbol": "DGBUSDT",
                "price": "0.01880000"
            },
            {
                "id": null,
                "symbol": "SXPUSDT",
                "price": "0.47380000"
            },
            {
                "id": null,
                "symbol": "MKRUSDT",
                "price": "2301.00000000"
            },
            {
                "id": null,
                "symbol": "DCRUSDT",
                "price": "21.29000000"
            },
            {
                "id": null,
                "symbol": "STORJUSDT",
                "price": "0.71820000"
            },
            {
                "id": null,
                "symbol": "MANAUSDT",
                "price": "0.79780000"
            },
            {
                "id": null,
                "symbol": "YFIUSDT",
                "price": "9406.00000000"
            },
            {
                "id": null,
                "symbol": "BALUSDT",
                "price": "3.47100000"
            },
            {
                "id": null,
                "symbol": "BLZUSDT",
                "price": "0.18510000"
            },
            {
                "id": null,
                "symbol": "IRISUSDT",
                "price": "0.00931000"
            },
            {
                "id": null,
                "symbol": "KMDUSDT",
                "price": "0.38690000"
            },
            {
                "id": null,
                "symbol": "JSTUSDT",
                "price": "0.05910000"
            },
            {
                "id": null,
                "symbol": "CRVUSDT",
                "price": "1.13650000"
            },
            {
                "id": null,
                "symbol": "SANDUSDT",
                "price": "0.96530000"
            },
            {
                "id": null,
                "symbol": "NMRUSDT",
                "price": "24.38000000"
            },
            {
                "id": null,
                "symbol": "DOTUSDT",
                "price": "11.28700000"
            },
            {
                "id": null,
                "symbol": "LUNAUSDT",
                "price": "0.73780000"
            },
            {
                "id": null,
                "symbol": "RSRUSDT",
                "price": "0.01904000"
            },
            {
                "id": null,
                "symbol": "PAXGUSDT",
                "price": "2641.00000000"
            },
            {
                "id": null,
                "symbol": "TRBUSDT",
                "price": "87.85000000"
            },
            {
                "id": null,
                "symbol": "SUSHIUSDT",
                "price": "1.51500000"
            },
            {
                "id": null,
                "symbol": "KSMUSDT",
                "price": "48.27000000"
            },
            {
                "id": null,
                "symbol": "EGLDUSDT",
                "price": "55.37000000"
            },
            {
                "id": null,
                "symbol": "DIAUSDT",
                "price": "1.00880000"
            },
            {
                "id": null,
                "symbol": "RUNEUSDT",
                "price": "7.06500000"
            },
            {
                "id": null,
                "symbol": "FIOUSDT",
                "price": "0.05105000"
            },
            {
                "id": null,
                "symbol": "UMAUSDT",
                "price": "3.86100000"
            },
            {
                "id": null,
                "symbol": "BELUSDT",
                "price": "0.88250000"
            },
            {
                "id": null,
                "symbol": "WINGUSDT",
                "price": "7.29500000"
            },
            {
                "id": null,
                "symbol": "UNIUSDT",
                "price": "15.64400000"
            },
            {
                "id": null,
                "symbol": "OXTUSDT",
                "price": "0.14150000"
            },
            {
                "id": null,
                "symbol": "SUNUSDT",
                "price": "0.03360000"
            },
            {
                "id": null,
                "symbol": "AVAXUSDT",
                "price": "54.81000000"
            },
            {
                "id": null,
                "symbol": "FLMUSDT",
                "price": "0.10580000"
            },
            {
                "id": null,
                "symbol": "UTKUSDT",
                "price": "0.06703000"
            },
            {
                "id": null,
                "symbol": "XVSUSDT",
                "price": "12.30000000"
            },
            {
                "id": null,
                "symbol": "ALPHAUSDT",
                "price": "0.12800000"
            },
            {
                "id": null,
                "symbol": "AAVEUSDT",
                "price": "251.98000000"
            },
            {
                "id": null,
                "symbol": "NEARUSDT",
                "price": "7.55100000"
            },
            {
                "id": null,
                "symbol": "FILUSDT",
                "price": "8.26500000"
            },
            {
                "id": null,
                "symbol": "INJUSDT",
                "price": "33.07000000"
            },
            {
                "id": null,
                "symbol": "AUDIOUSDT",
                "price": "0.23150000"
            },
            {
                "id": null,
                "symbol": "CTKUSDT",
                "price": "1.01620000"
            },
            {
                "id": null,
                "symbol": "AKROUSDT",
                "price": "0.00577100"
            },
            {
                "id": null,
                "symbol": "AXSUSDT",
                "price": "9.99900000"
            },
            {
                "id": null,
                "symbol": "HARDUSDT",
                "price": "0.18210000"
            },
            {
                "id": null,
                "symbol": "STRAXUSDT",
                "price": "0.08163000"
            },
            {
                "id": null,
                "symbol": "ROSEUSDT",
                "price": "0.13370000"
            },
            {
                "id": null,
                "symbol": "AVAUSDT",
                "price": "0.78760000"
            },
            {
                "id": null,
                "symbol": "SKLUSDT",
                "price": "0.08240000"
            },
            {
                "id": null,
                "symbol": "GRTUSDT",
                "price": "0.32710000"
            },
            {
                "id": null,
                "symbol": "JUVUSDT",
                "price": "1.98500000"
            },
            {
                "id": null,
                "symbol": "PSGUSDT",
                "price": "3.14200000"
            },
            {
                "id": null,
                "symbol": "1INCHUSDT",
                "price": "0.53590000"
            },
            {
                "id": null,
                "symbol": "OGUSDT",
                "price": "5.99300000"
            },
            {
                "id": null,
                "symbol": "ATMUSDT",
                "price": "2.43500000"
            },
            {
                "id": null,
                "symbol": "ASRUSDT",
                "price": "2.40500000"
            },
            {
                "id": null,
                "symbol": "CELOUSDT",
                "price": "1.10850000"
            },
            {
                "id": null,
                "symbol": "RIFUSDT",
                "price": "0.15250000"
            },
            {
                "id": null,
                "symbol": "TRUUSDT",
                "price": "0.15070000"
            },
            {
                "id": null,
                "symbol": "CKBUSDT",
                "price": "0.01849800"
            },
            {
                "id": null,
                "symbol": "TWTUSDT",
                "price": "1.54850000"
            },
            {
                "id": null,
                "symbol": "FIROUSDT",
                "price": "1.83000000"
            },
            {
                "id": null,
                "symbol": "LITUSDT",
                "price": "1.19500000"
            },
            {
                "id": null,
                "symbol": "SFPUSDT",
                "price": "0.88140000"
            },
            {
                "id": null,
                "symbol": "DODOUSDT",
                "price": "0.22080000"
            },
            {
                "id": null,
                "symbol": "CAKEUSDT",
                "price": "4.11700000"
            },
            {
                "id": null,
                "symbol": "ACMUSDT",
                "price": "1.99500000"
            },
            {
                "id": null,
                "symbol": "BADGERUSDT",
                "price": "4.50600000"
            },
            {
                "id": null,
                "symbol": "FISUSDT",
                "price": "0.47440000"
            },
            {
                "id": null,
                "symbol": "OMUSDT",
                "price": "3.78550000"
            },
            {
                "id": null,
                "symbol": "PONDUSDT",
                "price": "0.02155000"
            },
            {
                "id": null,
                "symbol": "DEGOUSDT",
                "price": "3.58400000"
            },
            {
                "id": null,
                "symbol": "ALICEUSDT",
                "price": "1.86300000"
            },
            {
                "id": null,
                "symbol": "LINAUSDT",
                "price": "0.00770700"
            },
            {
                "id": null,
                "symbol": "PERPUSDT",
                "price": "1.11820000"
            },
            {
                "id": null,
                "symbol": "SUPERUSDT",
                "price": "1.66630000"
            },
            {
                "id": null,
                "symbol": "CFXUSDT",
                "price": "0.25680000"
            },
            {
                "id": null,
                "symbol": "TKOUSDT",
                "price": "0.50610000"
            },
            {
                "id": null,
                "symbol": "PUNDIXUSDT",
                "price": "0.63460000"
            },
            {
                "id": null,
                "symbol": "TLMUSDT",
                "price": "0.01804000"
            },
            {
                "id": null,
                "symbol": "BARUSDT",
                "price": "2.42600000"
            },
            {
                "id": null,
                "symbol": "FORTHUSDT",
                "price": "4.62200000"
            },
            {
                "id": null,
                "symbol": "BAKEUSDT",
                "price": "0.43250000"
            },
            {
                "id": null,
                "symbol": "BURGERUSDT",
                "price": "0.65490000"
            },
            {
                "id": null,
                "symbol": "SLPUSDT",
                "price": "0.00552400"
            },
            {
                "id": null,
                "symbol": "SHIBUSDT",
                "price": "0.00002997"
            },
            {
                "id": null,
                "symbol": "ICPUSDT",
                "price": "14.97100000"
            },
            {
                "id": null,
                "symbol": "ARUSDT",
                "price": "27.21000000"
            },
            {
                "id": null,
                "symbol": "MASKUSDT",
                "price": "4.20400000"
            },
            {
                "id": null,
                "symbol": "LPTUSDT",
                "price": "17.25300000"
            },
            {
                "id": null,
                "symbol": "XVGUSDT",
                "price": "0.01905800"
            },
            {
                "id": null,
                "symbol": "ATAUSDT",
                "price": "0.14800000"
            },
            {
                "id": null,
                "symbol": "GTCUSDT",
                "price": "1.33900000"
            },
            {
                "id": null,
                "symbol": "ERNUSDT",
                "price": "3.40000000"
            },
            {
                "id": null,
                "symbol": "PHAUSDT",
                "price": "0.18670000"
            },
            {
                "id": null,
                "symbol": "MLNUSDT",
                "price": "23.14000000"
            },
            {
                "id": null,
                "symbol": "DEXEUSDT",
                "price": "10.77100000"
            },
            {
                "id": null,
                "symbol": "C98USDT",
                "price": "0.27190000"
            },
            {
                "id": null,
                "symbol": "CLVUSDT",
                "price": "0.08067000"
            },
            {
                "id": null,
                "symbol": "QNTUSDT",
                "price": "158.00000000"
            },
            {
                "id": null,
                "symbol": "FLOWUSDT",
                "price": "1.24000000"
            },
            {
                "id": null,
                "symbol": "MINAUSDT",
                "price": "0.93210000"
            },
            {
                "id": null,
                "symbol": "RAYUSDT",
                "price": "5.10800000"
            },
            {
                "id": null,
                "symbol": "FARMUSDT",
                "price": "60.87000000"
            },
            {
                "id": null,
                "symbol": "ALPACAUSDT",
                "price": "0.28600000"
            },
            {
                "id": null,
                "symbol": "QUICKUSDT",
                "price": "0.06364000"
            },
            {
                "id": null,
                "symbol": "MBOXUSDT",
                "price": "0.32390000"
            },
            {
                "id": null,
                "symbol": "REQUSDT",
                "price": "0.14540000"
            },
            {
                "id": null,
                "symbol": "GHSTUSDT",
                "price": "1.34900000"
            },
            {
                "id": null,
                "symbol": "WAXPUSDT",
                "price": "0.06747000"
            },
            {
                "id": null,
                "symbol": "GNOUSDT",
                "price": "280.40000000"
            },
            {
                "id": null,
                "symbol": "XECUSDT",
                "price": "0.00005562"
            },
            {
                "id": null,
                "symbol": "ELFUSDT",
                "price": "0.60760000"
            },
            {
                "id": null,
                "symbol": "DYDXUSDT",
                "price": "1.92290000"
            },
            {
                "id": null,
                "symbol": "IDEXUSDT",
                "price": "0.06179000"
            },
            {
                "id": null,
                "symbol": "VIDTUSDT",
                "price": "0.04746000"
            },
            {
                "id": null,
                "symbol": "USDPUSDT",
                "price": "1.00110000"
            },
            {
                "id": null,
                "symbol": "GALAUSDT",
                "price": "0.05724000"
            },
            {
                "id": null,
                "symbol": "ILVUSDT",
                "price": "66.52000000"
            },
            {
                "id": null,
                "symbol": "YGGUSDT",
                "price": "0.82900000"
            },
            {
                "id": null,
                "symbol": "SYSUSDT",
                "price": "0.18330000"
            },
            {
                "id": null,
                "symbol": "DFUSDT",
                "price": "0.04589000"
            },
            {
                "id": null,
                "symbol": "FIDAUSDT",
                "price": "0.36540000"
            },
            {
                "id": null,
                "symbol": "AGLDUSDT",
                "price": "1.46100000"
            },
            {
                "id": null,
                "symbol": "RADUSDT",
                "price": "1.77600000"
            },
            {
                "id": null,
                "symbol": "BETAUSDT",
                "price": "0.05685000"
            },
            {
                "id": null,
                "symbol": "RAREUSDT",
                "price": "0.17150000"
            },
            {
                "id": null,
                "symbol": "LAZIOUSDT",
                "price": "1.91000000"
            },
            {
                "id": null,
                "symbol": "CHESSUSDT",
                "price": "0.25920000"
            },
            {
                "id": null,
                "symbol": "ADXUSDT",
                "price": "0.24360000"
            },
            {
                "id": null,
                "symbol": "AUCTIONUSDT",
                "price": "20.58000000"
            },
            {
                "id": null,
                "symbol": "DARUSDT",
                "price": "0.23598000"
            },
            {
                "id": null,
                "symbol": "BNXUSDT",
                "price": "0.74400000"
            },
            {
                "id": null,
                "symbol": "MOVRUSDT",
                "price": "20.13100000"
            },
            {
                "id": null,
                "symbol": "CITYUSDT",
                "price": "2.37100000"
            },
            {
                "id": null,
                "symbol": "ENSUSDT",
                "price": "42.09000000"
            },
            {
                "id": null,
                "symbol": "QIUSDT",
                "price": "0.02495000"
            },
            {
                "id": null,
                "symbol": "PORTOUSDT",
                "price": "2.06700000"
            },
            {
                "id": null,
                "symbol": "POWRUSDT",
                "price": "0.35640000"
            },
            {
                "id": null,
                "symbol": "JASMYUSDT",
                "price": "0.04112000"
            },
            {
                "id": null,
                "symbol": "AMPUSDT",
                "price": "0.01139100"
            },
            {
                "id": null,
                "symbol": "PYRUSDT",
                "price": "4.40800000"
            },
            {
                "id": null,
                "symbol": "ALCXUSDT",
                "price": "24.78000000"
            },
            {
                "id": null,
                "symbol": "SANTOSUSDT",
                "price": "4.92600000"
            },
            {
                "id": null,
                "symbol": "BICOUSDT",
                "price": "0.44400000"
            },
            {
                "id": null,
                "symbol": "FLUXUSDT",
                "price": "0.88350000"
            },
            {
                "id": null,
                "symbol": "FXSUSDT",
                "price": "4.72400000"
            },
            {
                "id": null,
                "symbol": "VOXELUSDT",
                "price": "0.27020000"
            },
            {
                "id": null,
                "symbol": "HIGHUSDT",
                "price": "2.23800000"
            },
            {
                "id": null,
                "symbol": "CVXUSDT",
                "price": "7.15900000"
            },
            {
                "id": null,
                "symbol": "PEOPLEUSDT",
                "price": "0.07096000"
            },
            {
                "id": null,
                "symbol": "SPELLUSDT",
                "price": "0.00115050"
            },
            {
                "id": null,
                "symbol": "JOEUSDT",
                "price": "0.64150000"
            },
            {
                "id": null,
                "symbol": "ACHUSDT",
                "price": "0.03665000"
            },
            {
                "id": null,
                "symbol": "IMXUSDT",
                "price": "2.21400000"
            },
            {
                "id": null,
                "symbol": "GLMRUSDT",
                "price": "0.40160000"
            },
            {
                "id": null,
                "symbol": "LOKAUSDT",
                "price": "0.29860000"
            },
            {
                "id": null,
                "symbol": "SCRTUSDT",
                "price": "0.73260000"
            },
            {
                "id": null,
                "symbol": "API3USDT",
                "price": "2.62700000"
            },
            {
                "id": null,
                "symbol": "BTTCUSDT",
                "price": "0.00000170"
            },
            {
                "id": null,
                "symbol": "ACAUSDT",
                "price": "0.11170000"
            },
            {
                "id": null,
                "symbol": "XNOUSDT",
                "price": "2.01200000"
            },
            {
                "id": null,
                "symbol": "WOOUSDT",
                "price": "0.36290000"
            },
            {
                "id": null,
                "symbol": "ALPINEUSDT",
                "price": "1.68400000"
            },
            {
                "id": null,
                "symbol": "TUSDT",
                "price": "0.03876000"
            },
            {
                "id": null,
                "symbol": "ASTRUSDT",
                "price": "0.09340000"
            },
            {
                "id": null,
                "symbol": "GMTUSDT",
                "price": "0.25890000"
            },
            {
                "id": null,
                "symbol": "KDAUSDT",
                "price": "1.62110000"
            },
            {
                "id": null,
                "symbol": "APEUSDT",
                "price": "1.97600000"
            },
            {
                "id": null,
                "symbol": "BSWUSDT",
                "price": "0.10230000"
            },
            {
                "id": null,
                "symbol": "BIFIUSDT",
                "price": "376.70000000"
            },
            {
                "id": null,
                "symbol": "STEEMUSDT",
                "price": "0.30950000"
            },
            {
                "id": null,
                "symbol": "NEXOUSDT",
                "price": "1.50000000"
            },
            {
                "id": null,
                "symbol": "REIUSDT",
                "price": "0.08440000"
            },
            {
                "id": null,
                "symbol": "LDOUSDT",
                "price": "2.08000000"
            },
            {
                "id": null,
                "symbol": "OPUSDT",
                "price": "2.63100000"
            },
            {
                "id": null,
                "symbol": "LEVERUSDT",
                "price": "0.00288500"
            },
            {
                "id": null,
                "symbol": "STGUSDT",
                "price": "0.43580000"
            },
            {
                "id": null,
                "symbol": "LUNCUSDT",
                "price": "0.00016955"
            },
            {
                "id": null,
                "symbol": "GMXUSDT",
                "price": "38.64000000"
            },
            {
                "id": null,
                "symbol": "POLYXUSDT",
                "price": "0.42510000"
            },
            {
                "id": null,
                "symbol": "APTUSDT",
                "price": "14.63000000"
            },
            {
                "id": null,
                "symbol": "OSMOUSDT",
                "price": "0.70500000"
            },
            {
                "id": null,
                "symbol": "HFTUSDT",
                "price": "0.29250000"
            },
            {
                "id": null,
                "symbol": "PHBUSDT",
                "price": "2.41700000"
            },
            {
                "id": null,
                "symbol": "HOOKUSDT",
                "price": "0.70330000"
            },
            {
                "id": null,
                "symbol": "MAGICUSDT",
                "price": "0.66330000"
            },
            {
                "id": null,
                "symbol": "HIFIUSDT",
                "price": "0.81440000"
            },
            {
                "id": null,
                "symbol": "RPLUSDT",
                "price": "18.88000000"
            },
            {
                "id": null,
                "symbol": "PROSUSDT",
                "price": "0.71320000"
            },
            {
                "id": null,
                "symbol": "GNSUSDT",
                "price": "2.76500000"
            },
            {
                "id": null,
                "symbol": "SYNUSDT",
                "price": "0.85790000"
            },
            {
                "id": null,
                "symbol": "VIBUSDT",
                "price": "0.09330000"
            },
            {
                "id": null,
                "symbol": "SSVUSDT",
                "price": "32.94000000"
            },
            {
                "id": null,
                "symbol": "LQTYUSDT",
                "price": "1.83600000"
            },
            {
                "id": null,
                "symbol": "AMBUSDT",
                "price": "0.01046000"
            },
            {
                "id": null,
                "symbol": "USTCUSDT",
                "price": "0.03003000"
            },
            {
                "id": null,
                "symbol": "GASUSDT",
                "price": "7.02800000"
            },
            {
                "id": null,
                "symbol": "GLMUSDT",
                "price": "0.51970000"
            },
            {
                "id": null,
                "symbol": "PROMUSDT",
                "price": "7.42100000"
            },
            {
                "id": null,
                "symbol": "QKCUSDT",
                "price": "0.01332500"
            },
            {
                "id": null,
                "symbol": "UFTUSDT",
                "price": "0.36520000"
            },
            {
                "id": null,
                "symbol": "IDUSDT",
                "price": "0.65470000"
            },
            {
                "id": null,
                "symbol": "ARBUSDT",
                "price": "1.10400000"
            },
            {
                "id": null,
                "symbol": "OAXUSDT",
                "price": "0.07730000"
            },
            {
                "id": null,
                "symbol": "RDNTUSDT",
                "price": "0.10380000"
            },
            {
                "id": null,
                "symbol": "WBTCUSDT",
                "price": "95472.05000000"
            },
            {
                "id": null,
                "symbol": "EDUUSDT",
                "price": "0.75960000"
            },
            {
                "id": null,
                "symbol": "SUIUSDT",
                "price": "3.68110000"
            },
            {
                "id": null,
                "symbol": "AERGOUSDT",
                "price": "0.15960000"
            },
            {
                "id": null,
                "symbol": "PEPEUSDT",
                "price": "0.00002093"
            },
            {
                "id": null,
                "symbol": "FLOKIUSDT",
                "price": "0.00023084"
            },
            {
                "id": null,
                "symbol": "ASTUSDT",
                "price": "0.12160000"
            },
            {
                "id": null,
                "symbol": "SNTUSDT",
                "price": "0.06912000"
            },
            {
                "id": null,
                "symbol": "COMBOUSDT",
                "price": "0.63130000"
            },
            {
                "id": null,
                "symbol": "MAVUSDT",
                "price": "0.30820000"
            },
            {
                "id": null,
                "symbol": "PENDLEUSDT",
                "price": "6.66200000"
            },
            {
                "id": null,
                "symbol": "ARKMUSDT",
                "price": "2.41000000"
            },
            {
                "id": null,
                "symbol": "WBETHUSDT",
                "price": "3910.63000000"
            },
            {
                "id": null,
                "symbol": "WLDUSDT",
                "price": "3.32000000"
            },
            {
                "id": null,
                "symbol": "FDUSDUSDT",
                "price": "0.99770000"
            },
            {
                "id": null,
                "symbol": "SEIUSDT",
                "price": "0.70680000"
            },
            {
                "id": null,
                "symbol": "CYBERUSDT",
                "price": "5.40000000"
            },
            {
                "id": null,
                "symbol": "ARKUSDT",
                "price": "0.76910000"
            },
            {
                "id": null,
                "symbol": "CREAMUSDT",
                "price": "21.18000000"
            },
            {
                "id": null,
                "symbol": "GFTUSDT",
                "price": "0.00196000"
            },
            {
                "id": null,
                "symbol": "IQUSDT",
                "price": "0.00906700"
            },
            {
                "id": null,
                "symbol": "NTRNUSDT",
                "price": "0.64020000"
            },
            {
                "id": null,
                "symbol": "TIAUSDT",
                "price": "8.53100000"
            },
            {
                "id": null,
                "symbol": "MEMEUSDT",
                "price": "0.01719000"
            },
            {
                "id": null,
                "symbol": "ORDIUSDT",
                "price": "48.71000000"
            },
            {
                "id": null,
                "symbol": "BEAMXUSDT",
                "price": "0.03243000"
            },
            {
                "id": null,
                "symbol": "PIVXUSDT",
                "price": "0.35500000"
            },
            {
                "id": null,
                "symbol": "VICUSDT",
                "price": "0.52910000"
            },
            {
                "id": null,
                "symbol": "BLURUSDT",
                "price": "0.42750000"
            },
            {
                "id": null,
                "symbol": "VANRYUSDT",
                "price": "0.17240000"
            },
            {
                "id": null,
                "symbol": "AEURUSDT",
                "price": "1.04820000"
            },
            {
                "id": null,
                "symbol": "JTOUSDT",
                "price": "3.66900000"
            },
            {
                "id": null,
                "symbol": "1000SATSUSDT",
                "price": "0.00032200"
            },
            {
                "id": null,
                "symbol": "BONKUSDT",
                "price": "0.00004280"
            },
            {
                "id": null,
                "symbol": "ACEUSDT",
                "price": "3.52200000"
            },
            {
                "id": null,
                "symbol": "NFPUSDT",
                "price": "0.39570000"
            },
            {
                "id": null,
                "symbol": "AIUSDT",
                "price": "0.77670000"
            },
            {
                "id": null,
                "symbol": "XAIUSDT",
                "price": "0.40490000"
            },
            {
                "id": null,
                "symbol": "MANTAUSDT",
                "price": "1.29400000"
            },
            {
                "id": null,
                "symbol": "ALTUSDT",
                "price": "0.19211000"
            },
            {
                "id": null,
                "symbol": "JUPUSDT",
                "price": "1.29110000"
            },
            {
                "id": null,
                "symbol": "PYTHUSDT",
                "price": "0.54090000"
            },
            {
                "id": null,
                "symbol": "RONINUSDT",
                "price": "2.36600000"
            },
            {
                "id": null,
                "symbol": "DYMUSDT",
                "price": "2.58400000"
            },
            {
                "id": null,
                "symbol": "PIXELUSDT",
                "price": "0.28500000"
            },
            {
                "id": null,
                "symbol": "STRKUSDT",
                "price": "0.74040000"
            },
            {
                "id": null,
                "symbol": "PORTALUSDT",
                "price": "0.51630000"
            },
            {
                "id": null,
                "symbol": "PDAUSDT",
                "price": "0.06178000"
            },
            {
                "id": null,
                "symbol": "AXLUSDT",
                "price": "1.10310000"
            },
            {
                "id": null,
                "symbol": "WIFUSDT",
                "price": "3.32900000"
            },
            {
                "id": null,
                "symbol": "METISUSDT",
                "price": "66.13000000"
            },
            {
                "id": null,
                "symbol": "AEVOUSDT",
                "price": "0.57380000"
            },
            {
                "id": null,
                "symbol": "BOMEUSDT",
                "price": "0.00987400"
            },
            {
                "id": null,
                "symbol": "ETHFIUSDT",
                "price": "2.68400000"
            },
            {
                "id": null,
                "symbol": "ENAUSDT",
                "price": "0.92150000"
            },
            {
                "id": null,
                "symbol": "WUSDT",
                "price": "0.37360000"
            },
            {
                "id": null,
                "symbol": "TNSRUSDT",
                "price": "0.71000000"
            },
            {
                "id": null,
                "symbol": "SAGAUSDT",
                "price": "2.71300000"
            },
            {
                "id": null,
                "symbol": "TAOUSDT",
                "price": "690.40000000"
            },
            {
                "id": null,
                "symbol": "OMNIUSDT",
                "price": "14.30000000"
            },
            {
                "id": null,
                "symbol": "REZUSDT",
                "price": "0.06197000"
            },
            {
                "id": null,
                "symbol": "BBUSDT",
                "price": "0.45700000"
            },
            {
                "id": null,
                "symbol": "NOTUSDT",
                "price": "0.00956000"
            },
            {
                "id": null,
                "symbol": "IOUSDT",
                "price": "3.42100000"
            },
            {
                "id": null,
                "symbol": "ZKUSDT",
                "price": "0.23470000"
            },
            {
                "id": null,
                "symbol": "LISTAUSDT",
                "price": "0.62700000"
            },
            {
                "id": null,
                "symbol": "ZROUSDT",
                "price": "6.42200000"
            },
            {
                "id": null,
                "symbol": "GUSDT",
                "price": "0.04263000"
            },
            {
                "id": null,
                "symbol": "BANANAUSDT",
                "price": "61.25000000"
            },
            {
                "id": null,
                "symbol": "RENDERUSDT",
                "price": "8.87000000"
            },
            {
                "id": null,
                "symbol": "TONUSDT",
                "price": "7.10800000"
            },
            {
                "id": null,
                "symbol": "DOGSUSDT",
                "price": "0.00078000"
            },
            {
                "id": null,
                "symbol": "EURIUSDT",
                "price": "1.04840000"
            },
            {
                "id": null,
                "symbol": "SLFUSDT",
                "price": "0.52470000"
            },
            {
                "id": null,
                "symbol": "POLUSDT",
                "price": "0.72070000"
            },
            {
                "id": null,
                "symbol": "NEIROUSDT",
                "price": "0.00173653"
            },
            {
                "id": null,
                "symbol": "TURBOUSDT",
                "price": "0.00777900"
            },
            {
                "id": null,
                "symbol": "1MBABYDOGEUSDT",
                "price": "0.00239130"
            },
            {
                "id": null,
                "symbol": "CATIUSDT",
                "price": "0.61310000"
            },
            {
                "id": null,
                "symbol": "HMSTRUSDT",
                "price": "0.00442400"
            },
            {
                "id": null,
                "symbol": "EIGENUSDT",
                "price": "3.84100000"
            },
            {
                "id": null,
                "symbol": "SCRUSDT",
                "price": "0.96700000"
            },
            {
                "id": null,
                "symbol": "BNSOLUSDT",
                "price": "236.50000000"
            },
            {
                "id": null,
                "symbol": "LUMIAUSDT",
                "price": "1.97500000"
            },
            {
                "id": null,
                "symbol": "KAIAUSDT",
                "price": "0.35810000"
            },
            {
                "id": null,
                "symbol": "COWUSDT",
                "price": "0.47500000"
            },
            {
                "id": null,
                "symbol": "CETUSUSDT",
                "price": "0.39660000"
            }
        ]
    },
    // Se precisar atualizar as moedas
    refreshCurrencies: async function () {
        this.currencies = await fetchAllCurrencies();
        return this.currencies;
    },

    setCandlesticksAndIndicators (currencies){
        this.currencies = currencies;
    }

};

export default CurrencyModel;

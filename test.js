var assert      = require('assert');
var UAParser    = require('./ua-parser');
var parser      = new UAParser();
var browsers    = [
    {
        desc    : 'Arora',
        ua      : 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de-CH) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.2',
        expect  : 
        {
            name    : 'Arora',
            version : '0.2'
        }
    },
    {
        desc    : 'Avant',
        ua      : 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; GTB5; Avant Browser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)',
        expect  : 
        {
            name    : 'Avant Browser',
            version : undefined
        }
    },
    {
        desc    : 'Baidu',
        ua      : 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; baidubrowser 1.x)',
        expect  : 
        {
            name    : 'baidubrowser',
            version : '1.x'
        }
    },
    {
        desc    : 'Bolt',
        ua      : 'Mozilla/5.0 (X11; 78; CentOS; US-en) AppleWebKit/527+ (KHTML, like Gecko) Bolt/0.862 Version/3.0 Safari/523.15',
        expect  : 
        {
            name    : 'Bolt',
            version : '0.862'
        }
    },
    {
        desc    : 'Camino',
        ua      : 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.4; en; rv:1.9.0.19) Gecko/2011091218 Camino/2.0.9 (like Firefox/3.0.19)',
        expect  : 
        {
            name    : 'Camino',
            version : '2.0.9'
        }
    },
    {
        desc    : 'Chimera',
        ua      : 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; pl-PL; rv:1.0.1) Gecko/20021111 Chimera/0.6',
        expect  : 
        {
            name    : 'Chimera',
            version : '0.6'
        }
    },
    {
        desc    : 'Chrome',
        ua      : 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6',
        expect  : 
        {
            name    : 'Chrome',
            version : '20.0.1090.0'
        }
    },
    {
        desc    : 'Chrome on iOS',
        ua      : 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',
        expect  : 
        {
            name    : 'Chrome',
            version : '19.0.1084.60'
        }
    },
    {
        desc    : 'Chromium',
        ua      : 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.7 (KHTML, like Gecko) Ubuntu/11.10 Chromium/16.0.912.21 Chrome/16.0.912.21 Safari/535.7',
        expect  : 
        {
            name    : 'Chromium',
            version : '16.0.912.21'
        }
    },
    {
        desc    : 'Chrome on Android',
        ua      : 'Mozilla/5.0 (Linux; U; Android-4.0.3; en-us; Galaxy Nexus Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Mobile Safari/535.7',
        expect  : 
        {
            name    : 'Chrome',
            version : '16.0.912.75'
        }
    },
    {
        desc    : 'Dillo',
        ua      : 'Dillo/2.2',
        expect  : 
        {
            name    : 'Dillo',
            version : '2.2'
        }
    },
    {
        desc    : 'Dolphin',
        ua      : 'Mozilla/5.0 (SCH-F859/F859DG12;U;NUCLEUS/2.1;Profile/MIDP-2.1 Configuration/CLDC-1.1;480*800;CTC/2.0) Dolfin/2.0',
        expect  : 
        {
            name    : 'Dolphin',
            version : '2.0'
        }
    },
    {
        desc    : 'Doris',
        ua      : 'Doris/1.15 [en] (Symbian)',
        expect  : 
        {
            name    : 'Doris',
            version : '1.15'
        }
    },
    {
        desc    : 'Epiphany',
        ua      : 'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.7) Gecko/20040628 Epiphany/1.2.6',
        expect  : 
        {
            name    : 'Epiphany',
            version : '1.2.6'
        }
    },
    {
        desc    : 'Firebird',
        ua      : 'Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.5) Gecko/20031007 Firebird/0.7',
        expect  : 
        {
            name    : 'Firebird',
            version : '0.7'
        }
    },
    {
        desc    : 'Firefox',
        ua      : 'Mozilla/5.0 (Windows NT 6.1; rv:15.0) Gecko/20120716 Firefox/15.0a2',
        expect  : 
        {
            name    : 'Firefox',
            version : '15.0a2'
        }
    },
    {
        desc    : 'Fennec',
        ua      : 'Mozilla/5.0 (X11; U; Linux armv61; en-US; rv:1.9.1b2pre) Gecko/20081015 Fennec/1.0a1',
        expect  : 
        {
            name    : 'Fennec',
            version : '1.0a1'
        }
    },
    {
        desc    : 'Flock',
        ua      : 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008100716 Firefox/3.0.3 Flock/2.0',
        expect  : 
        {
            name    : 'Flock',
            version : '2.0'
        }
    },
    {
        desc    : 'GoBrowser',
        ua      : 'Nokia5700XpressMusic/GoBrowser/1.6.91',
        expect  : 
        {
            name    : 'GoBrowser',
            version : '1.6.91'
        }
    },
    {
        desc    : 'IceApe',
        ua      : 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.19) Gecko/20110817 Iceape/2.0.14',
        expect  : 
        {
            name    : 'Iceape',
            version : '2.0.14'
        }
    },
    {
        desc    : 'IceCat',
        ua      : 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092921 IceCat/3.0.3-g1',
        expect  : 
        {
            name    : 'IceCat',
            version : '3.0.3-g1'
        }
    },
    {
        desc    : 'Iceweasel',
        ua      : 'Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.0.16) Gecko/2009121610 Iceweasel/3.0.6 (Debian-3.0.6-3)',
        expect  : 
        {
            name    : 'Iceweasel',
            version : '3.0.6'
        }
    },
    {
        desc    : 'iCab',
        ua      : 'iCab/2.9.5 (Macintosh; U; PPC; Mac OS X)',
        expect  : 
        {
            name    : 'iCab',
            version : '2.9.5'
        }
    },
    {
        desc    : 'IEMobile',
        ua      : 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.1 Standard',
        expect  : 
        {
            name    : 'IEMobile',
            version : '7.11'
        }
    },
    {
        desc    : 'K-Meleon',
        ua      : 'Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.5) Gecko/20031016 K-Meleon/0.8.2',
        expect  : 
        {
            name    : 'K-Meleon',
            version : '0.8.2'
        }
    },
    {
        desc    : 'Kindle Browser',
        ua      : 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.5 (screen 600x800; rotate)',
        expect  : 
        {
            name    : 'Kindle',
            version : '2.5'
        }
    }, 
    {
        desc    : 'Konqueror',
        ua      : 'Mozilla/5.0 (compatible; Konqueror/3.5; Linux; X11; x86_64) KHTML/3.5.6 (like Gecko) (Kubuntu)',
        expect  : 
        {
            name    : 'Konqueror',
            version : '3.5'
        }
    },
    {
        desc    : 'Lunascape',
        ua      : 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.2) Gecko/20090804 Firefox/3.5.2 Lunascape/5.1.4.5',
        expect  : 
        {
            name    : 'Lunascape',
            version : '5.1.4.5'
        }
    },
    {
        desc    : 'Lynx',
        ua      : 'Lynx/2.8.5dev.16 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/0.9.6b',
        expect  : 
        {
            name    : 'Lynx',
            version : '2.8.5dev.16'
        }
    },
    {
        desc    : 'Maemo Browser',
        ua      : 'Mozilla/5.0 (X11; U; Linux armv7l; ru-RU; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900',
        expect  : 
        {
            name    : 'Maemo Browser',
            version : '1.7.4.8'
        }
    },
    {
        desc    : 'Maxthon',
        ua      : 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; SV1; Maxthon; .NET CLR 1.1.4322)',
        expect  : 
        {
            name    : 'Maxthon',
            version : undefined
        }
    },
    {
        desc    : 'Midori',
        ua      : 'Midori/0.2.2 (X11; Linux i686; U; en-us) WebKit/531.2+',
        expect  : 
        {
            name    : 'Midori',
            version : '0.2.2'
        }
    },
    {
        desc    : 'Minimo',
        ua      : 'Mozilla/5.0 (X11; U; Linux armv6l; rv 1.8.1.5pre) Gecko/20070619 Minimo/0.020',
        expect  : 
        {
            name    : 'Minimo',
            version : '0.020'
        }
    },
    {
        desc    : 'Mobile Safari',
        ua      : 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7',
        expect  : 
        {
            name    : 'Mobile Safari',
            version : '4.0.5'
        }
    },
    {
        desc    : 'Mosaic',
        ua      : 'NCSA_Mosaic/2.6 (X11; SunOS 4.1.3 sun4m)',
        expect  : 
        {
            name    : 'Mosaic',
            version : '2.6'
        }
    },
    {
        desc    : 'Mozilla',
        ua      : 'Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.7) Gecko/20070606',
        expect  : 
        {
            name    : 'Mozilla',
            version : '5.0'
        }
    },
    {
        desc    : 'MSIE',
        ua      : 'Mozilla/4.0 (compatible; MSIE 5.0b1; Mac_PowerPC)',
        expect  : 
        {
            name    : 'IE',
            version : '5.0b1'
        }
    },
    {
        desc    : 'NetFront',
        ua      : 'Mozilla/4.0 (PDA; Windows CE/1.0.1) NetFront/3.0',
        expect  : 
        {
            name    : 'NetFront',
            version : '3.0'
        }
    },
    {
        desc    : 'Netscape on Windows ME',
        ua      : 'Mozilla/5.0 (Windows; U; Win 9x 4.90; en-US; rv:1.8.1.8pre) Gecko/20071015 Firefox/2.0.0.7 Navigator/9.0',
        expect  : 
        {
            name    : 'Netscape',
            version : '9.0'
        }
    },
    {
        desc    : 'Netscape on Windows 2000',
        ua      : 'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.5) Gecko/20050519 Netscape/8.0.1',
        expect  : 
        {
            name    : 'Netscape',
            version : '8.0.1'
        }
    },
    {
        desc    : 'Nokia Browser',
        ua      : 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/025.007; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.37 Mobile Safari/533.4 3gpp-gba',
        expect  : 
        {
            name    : 'NokiaBrowser',
            version : '7.3.1.37'
        }
    },
    {
        desc    : 'OmniWeb',
        ua      : 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US) AppleWebKit/85 (KHTML, like Gecko) OmniWeb/v558.48',
        expect  : 
        {
            name    : 'OmniWeb',
            version : '558.48'
        }
    },
    {
        desc    : 'Opera > 9.80',
        ua      : 'Opera/9.80 (X11; Linux x86_64; U; Linux Mint; en) Presto/2.2.15 Version/10.10',
        expect  : 
        {
            name    : 'Opera',
            version : '10.10'
        }
    },
    {
        desc    : 'Opera < 9.80 on Windows',
        ua      : 'Mozilla/4.0 (compatible; MSIE 5.0; Windows 95) Opera 6.01 [en]',
        expect  : 
        {
            name    : 'Opera',
            version : '6.01'
        }
    },
    {
        desc    : 'Opera < 9.80 on OSX',
        ua      : 'Opera/8.5 (Macintosh; PPC Mac OS X; U; en)',
        expect  : 
        {
            name    : 'Opera',
            version : '8.5'
        }
    },
    {
        desc    : 'Opera Mobile',
        ua      : 'Opera/9.80 (Android 2.3.5; Linux; Opera Mobi/ADR-1111101157; U; de) Presto/2.9.201 Version/11.50',
        expect  : 
        {
            name    : 'Opera Mobi',
            version : '11.50'
        }
    },
    {
        desc    : 'Opera Mini',
        ua      : 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25',
        expect  : 
        {
            name    : 'Opera Mini',
            version : '5.1.21214'
        }
    },
    {
        desc    : 'Opera Tablet',
        ua      : 'Opera/9.80 (Windows NT 6.1; Opera Tablet/15165; U; en) Presto/2.8.149 Version/11.1',
        expect  : 
        {
            name    : 'Opera Tablet',
            version : '11.1'
        }
    },
    {
        desc    : 'Phoenix',
        ua      : 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.2b) Gecko/20021029 Phoenix/0.4',
        expect  : 
        {
            name    : 'Phoenix',
            version : '0.4'
        }
    },
    {
        desc    : 'Polaris',
        ua      : 'LG-LX600 Polaris/6.0 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1',
        expect  : 
        {
            name    : 'Polaris',
            version : '6.0'
        }
    },
    {
        desc    : 'RockMelt',
        ua      : 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) RockMelt/0.8.36.78 Chrome/7.0.517.44 Safari/534.7',
        expect  : 
        {
            name    : 'RockMelt',
            version : '0.8.36.78'
        }
    },
    {
        desc    : 'Safari < 3.0',
        ua      : 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; sv-se) AppleWebKit/419 (KHTML, like Gecko) Safari/419.3',
        expect  : 
        {
            name    : 'Safari',
            version : '2.0.4'
        }
    },
    {
        desc    : 'SeaMonkey',
        ua      : 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1b4pre) Gecko/20090405 SeaMonkey/2.0b1pre',
        expect  : 
        {
            name    : 'SeaMonkey',
            version : '2.0b1pre'
        }
    },
    {
        desc    : 'Silk Browser',
        ua      : 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-84)',
        expect  : 
        {
            name    : 'Silk',
            version : '1.1.0-84'
        }
    },
    {
        desc    : 'Skyfire',
        ua      : 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Safari/530.17 Skyfire/2.0',
        expect  : 
        {
            name    : 'Skyfire',
            version : '2.0'
        }
    },
    {
        desc    : 'SlimBrowser',
        ua      : 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SlimBrowser)',
        expect  : 
        {
            name    : 'SlimBrowser',
            version : undefined
        }
    },
    {
        desc    : 'Swiftfox',
        ua      : 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1) Gecko/20061024 Firefox/2.0 (Swiftfox)',
        expect  : 
        {
            name    : 'Swiftfox',
            version : undefined
        }
    },
    {
        desc    : 'Tizen Browser',
        ua      : 'Mozilla/5.0 (Linux; U; Tizen/1.0 like Android; en-us; AppleWebKit/534.46 (KHTML, like Gecko) Tizen Browser/1.0 Mobile',
        expect  : 
        {
            name    : 'Tizen Browser',
            version : '1.0'
        }
    },
    {
        desc    : 'UC Browser on Samsung',
        ua      : 'Mozilla/5.0 (Java; U; Pt-br; samsung-gt-s5620) UCBrowser8.2.1.144/69/352/UCWEB Mobile UNTRUSTED/1.0',
        expect  : 
        {
            name    : 'UCBrowser',
            version : '8.2.1.144'
        }
    },
    {
        desc    : 'UC Browser on Nokia',
        ua      : 'Mozilla/5.0 (S60V3; U; en-in; NokiaN73)/UC Browser8.4.0.159/28/351/UCWEB Mobile',
        expect  : 
        {
            name    : 'UC Browser',
            version : '8.4.0.159'
        }
    },
    {
        desc    : 'Yandex',
        ua      : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.5 (KHTML, like Gecko) YaBrowser/1.0.1084.5402 Chrome/19.0.1084.5402 Safari/536.5',
        expect  : 
        {
            name    : 'Yandex',
            version : '1.0.1084.5402'
        }
    }];

var engines = [
    {
        desc    : 'Gecko',
        ua      : 'Mozilla/5.0 (X11; Linux x86_64; rv:2.0b9pre) Gecko/20110111 Firefox/4.0b9pre',
        expect  :
        {
            name    : 'Gecko',
            version : '2.0b9pre'
        }
    },
    {
        desc    : 'KHTML',
        ua      : 'Mozilla/5.0 (compatible; Konqueror/4.5; FreeBSD) KHTML/4.5.4 (like Gecko)',
        expect  :
        {
            name    : 'KHTML',
            version : '4.5.4'
        }
    },
    {
        desc    : 'NetFront',
        ua      : 'Mozilla/4.0 (PDA; Windows CE/1.0.1) NetFront/3.0',
        expect  :
        {
            name    : 'NetFront',
            version : '3.0'
        }
    },
    {
        desc    : 'Presto',
        ua      : 'Opera/9.80 (Windows NT 6.1; Opera Tablet/15165; U; en) Presto/2.8.149 Version/11.1',
        expect  :
        {
            name    : 'Presto',
            version : '2.8.149'
        }
    },
    {
        desc    : 'Tasman',
        ua      : 'Mozilla/4.0 (compatible; MSIE 6.0; PPC Mac OS X 10.4.7; Tasman 1.0)',
        expect  :
        {
            name    : 'Tasman',
            version : '1.0'
        }
    },
    {
        desc    : 'Trident',
        ua      : 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)',
        expect  :
        {
            name    : 'Trident',
            version : '6.0'
        }
    },
    {
        desc    : 'WebKit',
        ua      : 'Mozilla/5.0 (Windows; U; Windows NT 6.1; sv-SE) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4',
        expect  :
        {
            name    : 'WebKit',
            version : '533.19.4'
        }
}];
    
describe('getBrowser', function () {    
    
    for (var i in browsers) {
    
        describe('[' + browsers[i].desc + ']', function () {
            describe('"' + browsers[i].ua + '"', function () {
            
                var expect = browsers[i].expect;
                var result = parser.setUA(browsers[i].ua).getBrowser();
                
                it('should return browser name: ' + expect.name, function () {
                    assert.equal(result.name, expect.name);
                });
                
                it('should return browser version: ' + expect.version, function () {
                    assert.equal(result.version, expect.version);
                });
            });
        });
    }
});

describe('getEngine', function () {    
    
    for (var i in engines) {
    
        describe('[' + engines[i].desc + ']', function () {
            describe('"' + engines[i].ua + '"', function () {
            
                var expect = engines[i].expect;
                var result = parser.setUA(engines[i].ua).getEngine();
                
                it('should return engine name: ' + expect.name, function () {
                    assert.equal(result.name, expect.name);
                });
                
                it('should return engine version: ' + expect.version, function () {
                    assert.equal(result.version, expect.version);
                });
            });
        });
    }
});
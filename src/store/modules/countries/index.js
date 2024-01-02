import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      countries: [
        {
          id: '1',
          name: 'Rusya',
          info: "Rusya veya resmî adıyla Rusya Federasyonu, Kuzey Avrasya'da bulunan, federal yarı başkanlık tipi cumhuriyetle yönetilen bir ülkedir. Kuzeybatıdan güneydoğuya Rusya; Norveç, Finlandiya, Estonya, Letonya, Litvanya, Polonya (ikisi birden Kaliningrad Oblastı ile), Belarus, Ukrayna, Gürcistan, Azerbaycan, Kazakistan, Çin, Moğolistan ve Kuzey Kore ile komşudur. Deniz sınırı olarak Ohotsk Denizi ile Japonya, Bering Boğazı ile bir ABD eyaleti olan Alaska ve Karadeniz ile Türkiye ile de komşudur. 17.098.246 km², ilhak edilen bölgelerle beraber 17.234.135 km²'lik[9] yüzölçümü ile Dünya'nın en geniş ülkesidir[10] ve Dünya yaşam alanının sekizde birini kapsar. Rusya aynı zamanda 2021 yılı itibarıyla 145,9 milyon nüfusu[11] ile dünyanın en kalabalık dokuzuncu ülkesidir. Kuzey Asya'nın tamamına ve Doğu Avrupa'nın büyük bir kısmına uzanan Rusya, dokuz saat dilimine yayılır ve üzerinde çok çeşitli çevre ve yer şekilleri bulunur.",
          establishment: '25 Aralık 1991',
          population: '143,4 milyon',
          region: 'Asya',
          flag: 'https://i.hizliresim.com/mx52ssg.png',
          presidentId: '1',
        },
        {
          id: '2',
          name: 'Ukrayna',
          info: "Ukrayna, Doğu Avrupa'da bir ülke. 603.549 km² yüzölçümüyle tamamı Avrupa'da olan en büyük ülkedir. Doğuda ve kuzeydoğuda Rusya, kuzeyde Belarus, batıda Polonya ve Slovakya güneybatıda Macaristan, Romanya ve Moldova'nın komşusudur. Ayrıca güneyde Karadeniz ve Azak Denizi'ne kıyısı bulunmaktadır. odern Ukrayna toprakları MÖ 32.000 yılından beri yerleşim yeri olmuştur. Orta Çağ döneminde Ukraynalı kimliğinin temelini oluşturan güçlü Kiev Knezliği'nin kurulmasıyla birlikte Doğu Slav kültürünün önemli bir merkezi haline geldi. 13. yüzyılda Kiev Knezliği'nin çeşitli prensliklere bölünmesi ve Moğol istilasının sebep olduğu yıkımın sonucu olarak bölgesel birlik çöktü ve bölge Polonya-Litvanya Birliği, Avusturya-Macaristan ve Osmanlı imparatorlukları, Rusya Çarlığı gibi çeşitli güçler arasında mücadelelere sahne olmuş, yönetilmiş ve bölünmüştür. 17. ve 18. yüzyıllarda Kazak Hetmanlığı kuruldu ve zenginleşti ancak hetmanlık toprakları sonunda Polonya ve Rus İmparatorluğu arasında bölündü. Rus Devrimi'nin ardından, Ukrayna'nın kendi kaderini tayin hakkı mücadelesi doğrultusunda Ukrayna ulusal hareketi ortaya çıktı ve 23 Haziran 1917'de uluslararası alanda tanınan Ukrayna Halk Cumhuriyeti kuruldu. İkinci Dünya Savaşı'ndan sonra, Ukrayna'nın batı kısmı Ukrayna Sovyet Sosyalist Cumhuriyeti ile birleşti ve tüm ülke Sovyetler Birliği'nin bir parçası oldu. Ukrayna, Sovyetler Birliği'nin dağılmasının ardından 1991 yılında bağımsızlığını kazandı.",
          establishment: '24 Ağustos 1991',
          population: '43,79 milyon',
          region: 'Doğu Avrupa',
          flag: 'https://i.hizliresim.com/m2me7hk.png',
          presidentId: '2',
        },
        {
          id: '3',
          name: 'İsrail',
          info: "İsrail veya resmî adıyla İsrail Devleti, Batı Asya'da Akdeniz'in güneydoğu kıyısında ve Kızıldeniz'in kuzey kıyısında yer alan ülkedir. 14 Mayıs 1948'de, David-Ben Gurion öncülüğünde Tel-Aviv'de toplanan Yahudi Millî Konseyi kuruluşunu ilan etmiştir. Kuzeyinde Lübnan, kuzeydoğusunda Suriye, doğusunda Ürdün, güneybatısında Mısır ve hem batı hem de doğusunda sırasıyla Filistin toprakları olan Gazze Şeridi ve Batı Şeria ile komşudur. Görece küçük yüzölçümü içerisinde coğrafi olarak çeşitli farklılıklar görülmektedir. Ülkede ekonominin ve teknolojinin merkezi Tel Aviv iken idari merkez ve ilan edilmiş başkent Kudüs'tür; ancak devletin Kudüs üzerindeki egemenliği tam olarak tanınmamaktadır.",
          establishment: '14 Mayıs 1948',
          population: '9,364 milyon',
          region: 'Orta Doğu',
          flag: 'https://i.hizliresim.com/2pozzdu.png',
          presidentId: '3',
        },
        {
          id: '4',
          name: 'Filistin',
          info: "Filistin veya resmî adıyla Filistin Devleti, Orta Doğu'da ve Batı Asya'da, Akdeniz kıyısındaki tarihî Kenan Bölgesi'nde bulunan ve Batı Şeria (İsrail-Ürdün sınırında) ile Gazze Şeridi'nde (İsrail-Mısır sınırında) belirtilen bölgelerde de facto olarak hüküm süren bir Arap devletidir. Devletin başkenti de jure şekilde Kudüs olarak belirlense de İsrail işgalinden dolayı merkezi Ramallah'ta yani Batı Şeria'da bulunmaktadır. Filistin toprakları 1948'den önce Mısır ve Ürdün tarafından işgal edilirken 1967'deki Altı Gün Savaşı'ndan sonra ise İsrail tarafından işgal edilmiştir. Şubat 2020 itibarıyla 5.051.493 nüfusla dünyada en çok nüfusa sahip 121. devlet olmuştur.",
          establishment: '15 Kasım 1988',
          population: '4,923 milyon',
          region: 'Orta Doğu',
          flag: 'https://i.hizliresim.com/o8cnvsn.png',
          presidentId: '4',
        },
      ],
      presidents: [
        {
          id: '1',
          first_name: 'Vladimir',
          last_name: 'Putin',
          age: 71,
          info: "Vladimir Vladimiroviç Putin Rusya Federasyonu'nun günümüzdeki devlet başkanı olan Rus politikacı ve eski istihbarat görevlisidir. Putin, 1999–2000 yılları arasında başbakanlık, 2000–2008 yılları arasında başkanlık, 2008–2012 yılları arasında tekrar başbakanlık görevini üstlenmiştir. Başbakanlığı döneminde, iktidar partisi Birleşik Rusya'nın genel başkanlığı görevini üstlenmiştir.",
          image: 'https://i.hizliresim.com/p4y0q53.png',
        },
        {
          id: '2',
          first_name: 'Volodimir',
          last_name: 'Zelenski',
          age: 45,
          info: "Volodymyr Zelensky, 25 Ocak 1978 tarihinde Ukrayna'nın Krivoi Rog şehrinde doğan Ukraynalı bir politikacı, aktör ve televizyon yapımcısıdır. Zelensky, Kiev Ulusal Ekonomi Üniversitesi'nden hukuk eğitimi almıştır. Ancak, kariyerine başlangıçta komedi ve televizyon yapımcılığı alanında yapmıştır. Zelensky'nin en tanınmış eseri, 'Servant of the People' adlı televizyon dizisidir. Bu dizi, Ukrayna'da popülerlik kazanmış ve Zelensky'nin baş karakteri olan bir öğretmenin devlet başkanı olmasını konu almaktadır. Dizi, Zelensky'nin gerçek hayatta siyasete atılmasının temelini oluşturmuştur. ",
          image: 'https://i.hizliresim.com/t11pux9.png',
        },
        {
          id: '3',
          first_name: 'Yitzak',
          last_name: 'Hertzog',
          age: 63,
          info: "Yitzhak Herzog, İsrailli bir siyasetçi ve hukukçu olarak bilinir. 22 Eylül 1960 tarihinde İsrail'de dünyaya geldi. Herzog, İsrail İşçi Partisi'nde önemli pozisyonlarda bulunmuş bir isimdir. 2013-2018 yılları arasında İsrail İşçi Partisi'nin liderliğini yapmıştır. Ayrıca, 2013-2015 yılları arasında Knesset (İsrail Parlamentosu) üyesi olarak görev yaptı. Herzog aynı zamanda diplomatik alanda da deneyime sahiptir. İsrail'in Birleşmiş Milletler'e (BM) daimi temsilcisi olarak görev yapmış ve İsrail-Suriye barış görüşmelerinde başkanlık etmiştir. Daha sonraki dönemde, 2021 itibarıyla Yitzhak Herzog, İsrail devlet başkanlığına seçilmiştir. Bu göreve gelmesiyle birlikte, İsrail devlet başkanı olarak ülkenin sembolik bir lideri haline gelmiştir.",
          image: 'https://i.hizliresim.com/71r62w8.png',
        },
        {
          id: '4',
          first_name: 'Mahmud',
          last_name: 'Abbas',
          age: 63,
          info: "Mahmud Abbas, tam adıyla Mahmud Abbas (Abu Mazen), 26 Mart 1935 tarihinde Filistin'in Safed şehrinde doğan bir Filistinli siyasetçidir. Abbas, Filistin Kurtuluş Örgütü (FKÖ) üyesi ve Filistin Devlet Başkanı olarak bilinir. Abbas'ın siyasi kariyeri, FKÖ'nün kurucu lideri Yaser Arafat'la olan ilişkisiyle başladı. Arafat'ın ölümünden sonra, 2005 yılında Filistin Devlet Başkanlığı'na seçildi. Bu görevde, Filistin halkının haklarını savunmak ve bağımsız bir Filistin devletinin kurulması için mücadele etmek amacıyla çeşitli uluslararası platformlarda aktif rol aldı. Mahmud Abbas, Filistin ve İsrail arasında barış görüşmelerinin önemli bir figürü olmuştur. Ancak, sürekli devam eden sorunlar ve zorluklar, Filistin halkının bağımsız bir devlete kavuşma sürecini karmaşık hale getirmiştir.",
          image: 'https://i.hizliresim.com/p1xtvjl.png',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

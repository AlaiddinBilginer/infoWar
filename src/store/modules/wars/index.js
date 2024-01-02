import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      wars: [
        {
          id: '1',
          name: 'Rusya-Ukrayna Savaşı',
          starting_date: '20 Şubat 2014',
          is_it_over: false,
          info: "Rusya-Ukrayna savaşı, 2014 yılında Kırım'ın ilhakı ile başlayan ve Doğu Ukrayna'da devam eden bir çatışma olarak öne çıkıyor. Rusya'nın Kırım'ı ilhak etmesi, uluslararası toplumda büyük tepkilere yol açtı. Doğu Ukrayna'da, Rus destekli ayrılıkçı gruplar tarafından başlatılan çatışma, bölgedeki etnik ve politik dinamikleri derinleştirdi. Savaş, uluslararası arenada bir dizi yaptırım ve diplomatik girişimle eşlik ederken, bölgedeki insani kriz de ciddi boyutlara ulaştı. Savaşın devam etmesi, Rusya-Ukrayna ilişkilerini ve bölgesel istikrarı önemli ölçüde etkilemeye devam ediyor.",
          img: 'https://i.hizliresim.com/7908lkf.png',
        },
        {
          id: '2',
          name: 'İsrail-Filistin Savaşı',
          starting_date: '14 Mayıs 1948',
          is_it_over: false,
          info: 'İsrail-Filistin çatışması, Filistin ile İsrail Silahlı Kuvvetleri arasında Filistin topraklarında devam eden silahlı çatışmadır.',
          img: 'https://i.hizliresim.com/qjeld5c.png',
        },
        {
          id: '3',
          name: 'Körfez Savaşı',
          starting_date: '2 Ağustos 1990',
          is_it_over: true,
          info: "Harekât, 17 Ocak 1991'de Irak güçlerini Kuveyt'ten çıkartmak için yapılan hava bombardımanıyla başladı.",
          img: 'https://i.hizliresim.com/egxjyg4.png',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

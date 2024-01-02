<template>
  <div>
    <section id="showcase">
      <div class="content">
        <h2>Savaş İstatistikleri</h2>
        <p>
          Info War, coğrafi konumu nedeniyle Türkiye'nin çevresindeki bölgelerde
          meydana gelmiş savaşları istatistiksel verilerle kullanıcılara
          sunarak, tarihsel bir perspektiften olayları anlama ve değerlendirme
          olanağı sağlamayı amaçlamaktadır.
        </p>
        <div class="input-control">
          <input type="text" placeholder="Savaş Ara" />
          <button class="search-btn">Ara</button>
        </div>
      </div>
    </section>
    <section id="map">
      <div class="title">
        <h2>Harita Üzerinden İncele</h2>
        <div class="line"></div>
        <p>
          Harita üzerinden son 30 yılda Türkiye'nin çevresinde yaşanmış olan
          savaşları incele!
        </p>
      </div>
      <div class="world-map">
        <img src="../../img/worldmap.png" alt="World Map Image" />
        <div class="turkiye">
          <span>Türkiye</span>
        </div>
        <div class="pin irak">
          <span>Irak Savaşı</span>
        </div>
        <div class="pin azerbeycan-ermenistan">
          <span>Azerbeycan-Ermenistan Savaşı</span>
        </div>
        <div class="pin suriye-ic-savasi">
          <span>Suriye İç Savaşı</span>
        </div>
        <div class="pin abazya">
          <span>Abazya Savaşı</span>
        </div>
        <div class="pin rusya-cecen">
          <span>Rusya-Çeçen Savaşı</span>
        </div>
        <div class="pin ukrayna-rusya">
          <router-link to="/savaslar/1"
            ><span>Rusya-Ukrayna Savaşı</span></router-link
          >
        </div>
        <div class="pin israil-lubnan">
          <span>İsrail-Lübnan Savaşı</span>
        </div>
        <div class="pin gazze-savasi">
          <span>Gazze Savaşı</span>
        </div>
        <div class="pin donbass">
          <span>Donbass Savaşı</span>
        </div>
        <div class="pin libya-ic-savas">
          <span>Libya İç Savaşı</span>
        </div>
        <div class="pin misir-ic-savasi">
          <span>Mısır İç Savaşı</span>
        </div>
        <div class="pin korfez">
          <span>Körfez Savaşı</span>
        </div>
        <div class="pin afganistan-savasi">
          <span>Afganistan Savaşı</span>
        </div>
        <div class="pin bosna-savasi">
          <span>Bosna Savaşı</span>
        </div>
        <div class="pin kosova-savasi">
          <span>Kosova Savaşı</span>
        </div>
        <div class="pin dogu-turkistan">
          <span>Doğu Türkistan Savaşı</span>
        </div>
      </div>
    </section>
    <!-- <section>
      <div>
        <h2>Amaç</h2>
        <p>
          Bu proje, son 30 yılda Türkiye'nin çevresinde gerçekleşen savaşların
          ölüm istatistiklerini yaş ve statüye göre ayrarak kullanıcıya sunmayı
          amaçlamaktadır. Kullanıcılar, seçtikleri savaşın taraflarının ölüm
          sayılarına dair detaylı istatistikleri ve grafikleri inceleyerek
          anlayış geliştirebileceklerdir. Bu şekilde, savaşların etkilerini daha
          geniş bir perspektiften değerlendirmelerine yardımcı olacak bir bilgi
          kaynağı sağlanmaktadır
        </p>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
#showcase {
  background: url("../../img/showcase.png") no-repeat center center/cover;
  height: calc(99.5vh - 5rem);
  padding: 0 5rem;
}

#showcase .content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#showcase .content h2 {
  font-size: 4rem;
  margin-bottom: 0.5rem;
}

#showcase .content p {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
}

.input-control {
  display: flex;
  align-items: center;
}

input {
  height: 2rem;
  background-color: transparent;
  background: url("../../img/icon/search.svg") no-repeat;
  background-position: 10px 10px;
  padding: 1rem 1rem 1rem 40px;
  /* padding-left: 40px; */
  margin-right: 2%;
  font-size: 1.2rem;
  color: #fff;
  border: none;
  border-bottom: 2px solid var(--secondary-color);
}

input:focus {
  outline: none;
}

button {
  display: block;
  padding: 0.5rem 1.5rem;
  background-color: var(--secondary-color);
  color: #fff;
  cursor: pointer;
  border: none;
  transition: all 0.4s ease-out;
  font-size: 1.1rem;
}

button:hover {
  background-color: #fff;
  color: var(--secondary-color);
}

/* World Map */
.world-map {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
}

.world-map img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10%;
  border: 3px solid var(--secondary-color);
}

.title {
  text-align: center;
  color: #fff;
  margin: 2rem 0;
  padding: 0 1rem;
}

.title h2 {
  font-size: 2rem;
}

.title p {
  max-width: 1000px;
  margin: 1rem auto;
  line-height: 27px;
  font-size: 1.2rem;
}

.pin {
  background: var(--light-color);
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
}

.pin::before {
  content: "";
  background: var(--secondary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: pulse 1.3s ease-in-out infinite;
}

.pin span {
  display: inline-block;
  white-space: nowrap;
  position: absolute;
  left: 1rem;
  top: 30%;
  transform: translateY(-50%);
  background: rgba(227, 205, 8, 0.858);
  color: black;
  border-radius: 4rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease-in-out;
}

.pin span:hover {
  background: #fff;
  color: var(--secondary-color);
  cursor: pointer;
}

.turkiye {
  display: inline-block;
  white-space: nowrap;
  position: absolute;
  left: 1rem;
  top: 30%;
  transform: translateY(-50%);
  background: var(--secondary-color);
  color: #fff;
  border-radius: 4rem;
  padding: 0.2rem 0.5rem;
  font-size: 1.3rem;
  transition: all 0.3s ease-in-out;
  top: 51%;
  left: 45%;
}

.irak {
  top: 56.5%;
  left: 56%;
}

.azerbeycan-ermenistan {
  top: 48%;
  left: 58%;
}

.suriye-ic-savasi {
  top: 55.5%;
  left: 52%;
}

.suriye-ic-savasi span {
  left: -7.5rem;
}

.abazya {
  top: 43%;
  left: 55%;
}

.rusya-cecen {
  top: 38%;
  left: 58%;
}

.ukrayna-rusya {
  top: 29%;
  left: 45%;
}

.israil-lubnan {
  top: 60%;
  left: 49%;
}

.israil-lubnan span {
  left: -9.5rem;
}

.gazze-savasi {
  top: 66%;
  left: 47%;
}

.donbass {
  top: 33.5%;
  left: 50%;
}

.libya-ic-savas {
  top: 73%;
  left: 33%;
}

.misir-ic-savasi {
  top: 67%;
  left: 43%;
}

.misir-ic-savasi span {
  left: -7.2rem;
}

.korfez {
  top: 65%;
  left: 58%;
}

.afganistan-savasi {
  top: 57%;
  left: 75%;
}

.bosna-savasi {
  top: 40%;
  left: 33%;
}

.kosova-savasi {
  top: 45%;
  left: 37%;
}

.dogu-turkistan {
  top: 68%;
  left: 80%;
}

@keyframes pulse {
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.5);
  }
}

@media screen and (max-width: 600px) {
  .world-map {
    font-size: 13px;
  }
}

@media screen and (max-width: 500px) {
  #showcase .content h2 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
  }
  #showcase .content p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  input {
    padding: 1rem 0 1rem 40px;
    margin-right: 1%;
    font-size: 1.1rem;
  }

  button {
    padding: 0.5rem 1rem;
  }
}
</style>
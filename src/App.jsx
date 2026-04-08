import './App.css'
import 'kintaro-ui/src/root.css';
import {
  KintaroTitle1, KintaroTitle3,
  KintaroButton2, KintaroButtonAccent3,
  KintaroDescription, KintaroModal,
  KintaroDivider1
} from 'kintaro-ui/src';

import overlay from '/2.png'
import ProfileImg from '/0005.jpg'
import Video1 from '/py-tools.webm'

import { useState } from 'react';

function App() {

  const [modalVisible1, setModalVisible1] = useState(false);

  return (
    <div className="kw-cv">

      <div className="mainntcv">

        <div className="cv-boxxs  ">

          <div className="box-xhead">
            <KintaroTitle1 title={"📄Özgeçmiş (CV)"} />
          </div>

          <KintaroDivider1 />

          <div className="bxox-mainns " >

            <img src={ProfileImg} alt="" className="imageeprfl" />

            <div className="dsadssdddsad-main">
              <KintaroTitle3 title={"İsim: Mustafa TAŞAL"} color={'var(--kintaro-text-color-2)'} />
              <KintaroTitle3 title={"Yaş: 18"} color={'var(--kintaro-text-color-2)'} />
              <KintaroTitle3 title={"E-posta: mustafatasal4242@gmail.com"} color={'var(--kintaro-text-color-2)'} />
              <KintaroTitle3 title={"Adres: Türkiye/Konya"} color={'var(--kintaro-text-color-2)'} />
            </div>

          </div>

        </div>

        <div className="cv-boxxs">

          <div className="box-xhead">
            <KintaroTitle1 title={"❓Hakkımda"} />
          </div>

          <div className="bxox-mainns">
            <div className="dsadssdddsad-main">
              <KintaroDescription text={'Bilgisayar ve yazılım dünyasına küçük yaşlardan beri büyük bir ilgim var. Özellikle son 4 yıldır kendi başıma web siteleri ve uygulamalar geliştirerek bu alanda kendimi sürekli geliştirdim. Henüz kariyerimin başındayım ama teknik olarak sağlam bir altyapıya sahibim. Ayrıca fotoğraf ve video düzenleme gibi görsel konularla da ilgileniyor ve bu alanda üretim yapmayı seviyorum.'} />
            </div>
          </div>

        </div>

        <div className="cv-boxxs">

          <div className="box-xhead">
            <KintaroTitle1 title={"🎓 Eğitim"} />
          </div>

          <div className="bxox-mainns">

            <div className="dsadssdddsad-main">
              <KintaroTitle3 title={"📘 Anadolu Üniversitesi – Açıköğretim Fakültesi Bilgisayar Programcılığı"} color={'var(--kintaro-text-color-2)'} />
              <KintaroTitle3 title={"🏫 Konya Mesleki ve Teknik Anadolu Lisesi – Bilişim Teknolojileri Alanı"} color={'var(--kintaro-text-color-2)'} />
              <KintaroTitle3 title={"🏫 Mareşal Mustafa Kemal Ortaokulu"} color={'var(--kintaro-text-color-2)'} />
              <KintaroTitle3 title={"🏫 Barbaros İlkokulu"} color={'var(--kintaro-text-color-2)'} />
            </div>

          </div>

        </div>

        <div className="cv-boxxs">

          <div className="box-xhead">
            <KintaroTitle1 title={"👨‍💻 Deneyim"} />
          </div>

          <div className="bxox-mainns">

            <div className="dsadssdddsad-main">
              <KintaroTitle3 title={"BT Teknoloji Web Tasarım (btteknoloji.com)"} color={'var(--kintaro-text-color-2)'} />
              <KintaroTitle3 title={"Post Ajans (postajans.com.tr)"} color={'var(--kintaro-text-color-2)'} />
            </div>

          </div>

        </div>

        <div className="cv-boxxs">

          <div className="box-xhead">
            <KintaroTitle1 title={"💻 Yazılım Teknolojileri"} />
          </div>

          <div className="bxox-mainns">

            <div className="dsadssdddsad-main-verdsd">
              <KintaroButton2 title={'HTML'} />
              <KintaroButton2 title={'CSS'} />
              <KintaroButton2 title={'JavaScript'} />
              <KintaroButton2 title={'React.js'} />
              <KintaroButton2 title={'Node.js'} />
              <KintaroButton2 title={'PHP'} />
              <KintaroButton2 title={'ASP.NET'} />
              <KintaroButton2 title={'C#'} />
              <KintaroButton2 title={'MySQL'} />
              <KintaroButton2 title={'Python'} />
            </div>

          </div>

        </div>

        <div className="cv-boxxs">

          <div className="box-xhead">
            <KintaroTitle1 title={"🎬 Tasarım"} />
          </div>

          <div className="bxox-mainns">

            <div className="dsadssdddsad-main-verdsd">
              <KintaroButton2 title={'Davinci Resolve'} />
              <KintaroButton2 title={'Adobe After Effects'} />
              <KintaroButton2 title={'CapCut'} />
              <KintaroButton2 title={'Photoshop (Temel seviye)'} />
            </div>

          </div>

        </div>


        <div className="cv-boxxs">

          <div className="box-xhead">
            <KintaroTitle1 title={"📂 Son Yaptığım Projeler"} />
          </div>

          <div className="bxox-mainns">

            <div className="dsadssdddsad-main">

              <KintaroButtonAccent3
                title={"Son 2 gündür yapmaya çalıştığım React bileşen kütüphanem"}
                onClick={() => window.open("https://xkintaro.github.io/kintaro-ui-preview/", "_blank")}
              />

              <KintaroButtonAccent3
                title={"Python ile geliştirdiğim ve her gün ihtiyaç duyduğum masaüstü uygulamam"}
                onClick={() => setModalVisible1(true)}
              />

              <KintaroButtonAccent3
                title={"12. sınıf arkadaşım için PHP ile hazırladığım proje ödevi"}
                onClick={() => window.open("https://github.com/xkintaro/php-mysql-website/", "_blank")}
              />

            </div>

          </div>

        </div>


        <KintaroModal
          isOpen={modalVisible1}
          onClose={() => setModalVisible1(false)}
          title={"Kintaro Modal"}
        >

          <video className="kintaro-video-player" controls  >
            <source src={Video1} type="video/mp4" />
          </video>


        </KintaroModal>

        <img src={overlay} className="overlayy" />


      </div>

    </div>
  )
}

export default App

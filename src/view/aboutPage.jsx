import { NavbarCompanent } from "../companents/navbar";

function AboutPage() {
    return (<>
        <NavbarCompanent />

        <div className="w-full h-[300px]" style={{ backgroundPosition: "center center", backgroundImage: "url('https://cdn.dsmcdn.com/web/corporatepage/allteamsm.jpg')" }}>


        </div>

        <div class="max-w-screen-md mx-auto p-6">
            <header class="text-center mb-8">
                <h1 class="text-3xl font-bold">TrendBurada</h1>
                <p class="text-gray-600">İleri düzey alışveriş deneyimi için Hepsiburada ve Trendyol'un birleşimi.</p>
            </header>
            <section>
                <h2 class="text-2xl font-semibold mb-4">Hakkımızda</h2>
                <p class="mb-4">
                    Merhaba! Biz, <b>TrendBurada</b> olarak, e-ticaret dünyasının lider isimlerinden Hepsiburada ve Trendyol'un birleşiminden doğmuş bir üniversite projesiyiz.
                    Amacımız, online alışveriş deneyimini daha yenilikçi, etkileşimli ve kişiselleştirilmiş hale getirerek, kullanıcılarımıza benzersiz bir alışveriş atmosferi sunmaktır.
                </p>
                <p class="mb-4">
                    Hepsiburada'nın geniş ürün yelpazesi ve güvenilir altyapısı ile Trendyol'un trendleri takip eden, dinamik yaklaşımını bir araya getiriyoruz.
                    Bu birleşim, alışveriş tutkunları için her zevke hitap eden geniş bir ürün yelpazesi sunmamıza olanak tanıyor. Elektronikten giyime, ev dekorasyonundan kozmetiğe kadar her kategoride, en yeni trendleri ve kaliteli ürünleri sizlere sunuyoruz.
                </p>
                <p class="mb-4">
                    Takımımız, e-ticaret dünyasındaki yenilikleri takip eden, öğrenmeye ve gelişmeye açık bir grup tutkulu öğrenciden oluşmaktadır.
                    İleri düzey teknoloji kullanımı, müşteri memnuniyeti odaklı hizmet anlayışı ve sürdürülebilir ticaret ilkeleriyle, trendburada olarak sektörde fark yaratmayı hedefliyoruz.
                </p>
                <p class="mb-4">
                    Siz de bu heyecan verici yolculuğumuza katılarak, trendleri keşfetmeye ve alışveriş deneyimini daha özel hale getirmeye davetlisiniz.
                </p>
                <p class="mb-4">
                    Beraber alışveriş yapmanın keyfini çıkaralım!
                </p>
                <p class="mb-0">Saygılarımla,<br />trendburada Ekibi</p>
            </section>
        </div>
    </>);
}

export default AboutPage;
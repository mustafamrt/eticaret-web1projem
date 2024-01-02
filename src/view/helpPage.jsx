import { NavbarCompanent } from "../companents/navbar";

function HelpPage() {
    return (<>
        <NavbarCompanent />


        <div class="max-w-screen-md mx-auto p-6">
            <header class="text-center mb-8">
                <h1 class="text-3xl font-bold">trendburada</h1>
                <p class="text-gray-600">Sorularınız için buradayız!</p>
            </header>
            <section>
                <h2 class="text-2xl font-semibold mb-4">Yardım ve Destek</h2>
                <p class="mb-4">
                    trendburada olarak, sizin için en iyi alışveriş deneyimini sunmak adına buradayız. Yardıma ihtiyacınız olduğunda aşağıdaki bilgileri kullanabilir veya bize doğrudan ulaşabilirsiniz.
                </p>
                <h3 class="text-xl font-semibold mb-2">Sıkça Sorulan Sorular (SSS)</h3>
                <p class="mb-4">
                    İşte en sık karşılaşılan soruların cevapları:
                </p>
                <div class="mb-4">
                    <h3 class="text-xl font-semibold mb-2">1. Hesap Oluşturma</h3>
                    <p>Cevap: Hesap oluşturmak için ana sayfa üzerinden "Hesap Oluştur" seçeneğini kullanabilir ve gerekli bilgileri doldurarak kayıt işlemini tamamlayabilirsiniz.</p>
                </div>
                <div class="mb-4">
                    <h3 class="text-xl font-semibold mb-2">2. Sipariş Takibi</h3>
                    <p>Cevap: Siparişlerinizi "Hesabım" sayfasından takip edebilirsiniz. Ayrıca, size gönderilen sipariş onay e-postasındaki bağlantıyı kullanarak da takip edebilirsiniz.</p>
                </div>
                <div class="mb-4">
                    <h3 class="text-xl font-semibold mb-2">3. Ürün İade Süreci</h3>
                    <p>Cevap: Ürün iade işlemleri için "Hesabım" sayfasındaki "İadelerim" bölümünü kullanabilir veya müşteri hizmetleri ile iletişime geçebilirsiniz.</p>
                </div>
                <p class="mb-4">
                    Daha fazla sorunuz varsa veya yardıma ihtiyacınız olduğunda bize <a href="#iletisim" class="text-blue-500">iletişim</a> bilgilerimizden ulaşabilirsiniz.
                </p>
            </section>
            <section id="iletisim" class="mt-8">
                <h2 class="text-2xl font-semibold mb-4">İletişim Bilgileri</h2>
                <p class="mb-4">
                    Bize ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz:
                </p>
                <ul class="list-disc pl-6">
                    <li>📧 Email: <a href="mailto:destek@trendburada.com" class="text-blue-500">destek@trendburada.com</a></li>
                    <li>📞 Telefon: <a href="tel:+123456789" class="text-blue-500">+123 456 789</a></li>
                </ul>
                <p class="mb-4">
                    Müşteri hizmetleri temsilcilerimiz haftanın her günü 9:00 - 18:00 saatleri arasında size yardımcı olmaktan memnuniyet duyar.
                </p>
                <h3 class="text-xl font-semibold mb-2">Canlı Destek</h3>
                <p class="mb-4">
                    Anında yardım almak için <a href="#canli-destek" class="text-blue-500">canlı destek</a> bölümünü kullanabilirsiniz.
                </p>
            </section>
        </div>

    </>);
}

export default HelpPage;
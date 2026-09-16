import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  BatteryCharging,
  BellRing,
  CarFront,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Gauge,
  LockKeyhole,
  Menu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  ThermometerSun,
  Users,
  Wifi,
  X,
  Zap,
} from "lucide-react";

const storageImage = `${import.meta.env.BASE_URL}hero-product.webp`;

const featureCards = [
  {
    icon: ThermometerSun,
    title: "قياس لحظي للحرارة",
    text: "راقب حرارة المقصورة بدقة، واحصل على تنبيه قبل أن تصبح السيارة غير آمنة.",
    tone: "orange",
  },
  {
    icon: BellRing,
    title: "تنبيه فوري للهاتف",
    text: "إشعار ذكي يصلك أينما كنت عند ارتفاع الحرارة أو رصد حركة غير متوقعة.",
    tone: "pink",
  },
  {
    icon: Wifi,
    title: "اتصال مستقر",
    text: "اتصال لاسلكي سريع بين الجهاز وتطبيقك لتبقى الصورة واضحة طوال الوقت.",
    tone: "violet",
  },
  {
    icon: BatteryCharging,
    title: "بطارية تدوم طويلاً",
    text: "مصمم ليعمل بهدوء وكفاءة مع استهلاك منخفض للطاقة في كل رحلة.",
    tone: "cyan",
  },
];

const steps = [
  { number: "01", title: "ثبّت الجهاز", text: "ضعه في مكان مناسب داخل السيارة خلال دقائق، دون أدوات معقدة." },
  { number: "02", title: "اربط هاتفك", text: "نزّل التطبيق واربط الجهاز بحسابك بخطوات بسيطة وآمنة." },
  { number: "03", title: "اطمئن دائماً", text: "استقبل التنبيهات المهمة واتخذ الإجراء المناسب في الوقت المناسب." },
];

const faqs = [
  { q: "هل يحتاج الجهاز إلى تركيب معقد؟", a: "لا. التصميم جاهز للاستخدام ويمكن تثبيته داخل السيارة خلال دقائق، مع إعداد واضح عبر التطبيق." },
  { q: "كيف تصلني التنبيهات؟", a: "بعد ربط الجهاز بهاتفك، تصلك إشعارات فورية عند تجاوز درجة الحرارة المحددة أو رصد حالة تستدعي الانتباه." },
  { q: "هل يعمل مع جميع السيارات؟", a: "الجهاز مناسب لمعظم السيارات، ويُفضّل وضعه في مكان مفتوح داخل المقصورة لضمان قراءة دقيقة." },
  { q: "هل بياناتي آمنة؟", a: "نعم، نستخدم اتصالاً آمناً ونحافظ على بياناتك ضمن تجربة خاصة بك، مع إمكانية التحكم في الإشعارات من التطبيق." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell" dir="rtl">
      <div className="announcement">
        <div className="container announcement-inner">
          <span className="announcement-pulse" />
          <span>راحة بالك تبدأ بخطوة واحدة — شحن مجاني لفترة محدودة</span>
          <button onClick={() => scrollTo("order")} className="announcement-link">اطلب الآن <ArrowLeft size={14} /></button>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo("top")} aria-label="العودة إلى الرئيسية">
            <span className="brand-mark"><ShieldCheck size={22} strokeWidth={2.4} /></span>
            <span><strong>لا تتركني</strong><small>أمان سيارتك يبدأ هنا</small></span>
          </button>
          <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <button onClick={() => scrollTo("features")}>المزايا</button>
            <button onClick={() => scrollTo("how-it-works")}>كيف يعمل</button>
            <button onClick={() => scrollTo("faq")}>الأسئلة الشائعة</button>
            <button className="nav-cta mobile-cta" onClick={() => scrollTo("order")}>اطلب جهازك <ArrowLeft size={16} /></button>
          </nav>
          <button className="nav-cta desktop-cta" onClick={() => scrollTo("order")}>اطلب جهازك <ArrowLeft size={16} /></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15} /> أمان ذكي، في الوقت الحقيقي</div>
              <h1>لأن <span>الاطمئنان</span><br />لا يجب أن ينتظر.</h1>
              <p className="hero-lead">جهاز صغير يحرس سيارتك عندما لا تكون بجانبها. راقب الحرارة، اكتشف الخطر، واستقبل التنبيه على هاتفك قبل فوات الأوان.</p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => scrollTo("order")}>احمِ سيارتك الآن <ArrowLeft size={18} /></button>
                <button className="text-button" onClick={() => scrollTo("how-it-works")}>اكتشف كيف يعمل <span>↙</span></button>
              </div>
              <div className="trust-row">
                <div className="trust-avatars"><span>م</span><span>س</span><span>ن</span><span>+</span></div>
                <div><strong>+2,500 عائلة مطمئنة</strong><small>يستخدمونه كل يوم</small></div>
                <div className="trust-divider" />
                <div className="rating"><span>★★★★★</span><small>4.9 / 5</small></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="product-card">
                <div className="live-label"><span /> مراقبة مباشرة</div>
                <img src={storageImage} alt="جهاز لا تتركني لمراقبة السيارة" />
                <div className="product-caption"><span>جهاز لا تتركني</span><small>حماية ذكية بلا تعقيد</small></div>
              </div>
              <div className="status-card temp-card"><span className="status-icon orange"><ThermometerSun size={20} /></span><div><small>حرارة السيارة</small><strong>28° <em>آمنة</em></strong></div><span className="mini-check"><Check size={13} /></span></div>
              <div className="status-card alert-card"><span className="status-icon pink"><BellRing size={19} /></span><div><small>آخر تنبيه</small><strong>منذ ٣ دقائق</strong></div></div>
              <div className="floating-dot dot-a" /><div className="floating-dot dot-b" />
            </div>
          </div>
          <div className="hero-bottom-fade" />
        </section>

        <section className="metrics-section">
          <div className="container metrics-grid">
            <div className="metric"><Gauge size={22} /><div><strong>دقة عالية</strong><span>في قياس الحرارة</span></div></div>
            <div className="metric"><Clock3 size={22} /><div><strong>24/7</strong><span>مراقبة مستمرة</span></div></div>
            <div className="metric"><LockKeyhole size={22} /><div><strong>خصوصية تامة</strong><span>بياناتك لك وحدك</span></div></div>
            <div className="metric"><Zap size={22} /><div><strong>إعداد سريع</strong><span>يعمل خلال دقائق</span></div></div>
          </div>
        </section>

        <section className="section features-section" id="features">
          <div className="container">
            <div className="section-heading split-heading"><div><span className="section-kicker">كل ما تحتاجه، في جهاز واحد</span><h2>حماية تفكر معك<br /><span>قبل أن تقلق.</span></h2></div><p>لم نصمم جهازاً آخر للسيارة. صممنا إحساساً يومياً بالراحة، يعمل بصمت ويظهر عندما تحتاجه.</p></div>
            <div className="feature-grid">{featureCards.map(({ icon: Icon, title, text, tone }, index) => <article className={`feature-card tone-${tone}`} key={title}><div className="feature-top"><span className="feature-icon"><Icon size={23} /></span><span className="feature-number">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><a href="#order" onClick={(e) => { e.preventDefault(); scrollTo("order"); }}>اعرف أكثر <ArrowLeft size={15} /></a></article>)}</div>
          </div>
        </section>

        <section className="section story-section" id="how-it-works">
          <div className="container story-grid">
            <div className="story-visual"><div className="story-ring" /><div className="story-panel"><div className="panel-header"><span><span className="green-dot" /> الجهاز متصل</span><Wifi size={18} /></div><div className="panel-temp"><span>درجة الحرارة الحالية</span><strong>28.4°</strong><small>ضمن النطاق الآمن</small></div><div className="panel-chart"><span style={{ height: "30%" }} /><span style={{ height: "47%" }} /><span style={{ height: "38%" }} /><span style={{ height: "58%" }} /><span style={{ height: "48%" }} /><span style={{ height: "74%" }} /><span style={{ height: "65%" }} /><span style={{ height: "84%" }} /><span style={{ height: "62%" }} /><span style={{ height: "76%" }} /><i /></div><div className="panel-footer"><span><CarFront size={15} /> السيارة الرئيسية</span><span>آخر تحديث: الآن</span></div></div><div className="notification-bubble"><span className="status-icon pink"><BellRing size={17} /></span><span><strong>كل شيء بخير</strong><small>لا توجد تنبيهات جديدة</small></span><CircleCheck size={18} color="#2ab673" /></div></div>
            <div className="story-copy"><span className="section-kicker">مصمم للحياة اليومية</span><h2>ثلاث خطوات.<br /><span>راحة لا تنتهي.</span></h2><p>لا تطبيق معقد، ولا أسلاك متشابكة. تجربة بسيطة تمنحك رؤية واضحة لحالة سيارتك حتى وأنت بعيد عنها.</p><div className="steps-list">{steps.map((step) => <div className="step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div></div>
          </div>
        </section>

        <section className="section family-section"><div className="container family-card"><div className="family-decor"><span /><span /><span /></div><div className="family-icon"><Users size={27} /></div><div><span className="section-kicker">حماية من تحبهم</span><h2>أمان أكثر لأطفالك.<br /><span>طمأنينة أكثر لك.</span></h2><p>عندما تكون السيارة جزءاً من روتين عائلتك، لا تترك شيئاً للصدفة.</p></div><button className="outline-button" onClick={() => scrollTo("order")}>ابدأ الحماية <ArrowLeft size={17} /></button></div></section>

        <section className="section faq-section" id="faq"><div className="container faq-grid"><div><span className="section-kicker">أسئلة في بالك؟</span><h2>كل الإجابات<br /><span>هنا.</span></h2><p>إذا لم تجد ما تبحث عنه، يسعد فريقنا مساعدتك.</p><button className="text-button" onClick={() => scrollTo("order")}>تحدث معنا <ArrowLeft size={16} /></button></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={faq.q}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{faq.q}</span><ChevronDown size={19} /></button><div className="faq-answer"><p>{faq.a}</p></div></div>)}</div></div></section>

        <section className="order-section" id="order"><div className="container order-grid"><div className="order-copy"><span className="section-kicker">خطوتك التالية</span><h2>لا تنتظر حتى<br /><span>تتمنى لو عرفت.</span></h2><p>اطلب جهازك اليوم وابدأ تجربة قيادة أكثر هدوءاً واطمئناناً.</p><div className="order-points"><span><Check size={15} /> شحن مجاني داخل المملكة</span><span><Check size={15} /> ضمان استبدال لمدة سنة</span><span><Check size={15} /> دعم عربي متواصل</span></div></div><div className="order-form-card">{submitted ? <div className="success-state"><div className="success-icon"><Check size={34} /></div><h3>تم استلام طلبك</h3><p>شكراً لثقتك. سيتواصل معك فريقنا قريباً لتأكيد التفاصيل.</p><button className="primary-button" onClick={() => setSubmitted(false)}>إرسال طلب آخر <ArrowLeft size={17} /></button></div> : <form onSubmit={handleSubmit}><div className="form-heading"><span>احجز جهازك الآن</span><small>وسنتواصل معك للتأكيد</small></div><label>الاسم الكامل<input required name="name" placeholder="مثال: محمد أحمد" /></label><label>رقم الجوال<input required name="phone" type="tel" placeholder="05X XXX XXXX" /></label><label>المدينة<select name="city" defaultValue=""><option value="" disabled>اختر مدينتك</option><option>الرياض</option><option>جدة</option><option>الدمام</option><option>أخرى</option></select></label><button type="submit" className="primary-button form-button">أرسل طلبك <ArrowLeft size={17} /></button><small className="form-note"><LockKeyhole size={13} /> بياناتك آمنة ولن تستخدم إلا للتواصل</small></form>}</div></div></section>
      </main>

      <footer className="footer"><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark"><ShieldCheck size={22} strokeWidth={2.4} /></span><span><strong>لا تتركني</strong><small>أمان سيارتك يبدأ هنا</small></span></div><p>نصنع لحظات قيادة أكثر اطمئناناً.</p><span className="copyright">© 2026 لا تتركني. جميع الحقوق محفوظة.</span></div></footer>
    </div>
  );
}

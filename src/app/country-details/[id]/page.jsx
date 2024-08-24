import Header from "../../../components/header/page";
import Footer from "../../../components/footer/page";
import countryDetails from '../../../data/countries.json'; // تأكد من المسار الصحيح للملف
import "./philippines.css"
const CountryDetails = ({ params }) => {
  const { id } = params;

  // العثور على تفاصيل الدولة من البيانات
  const country = countryDetails.find(c => c.id === parseInt(id));

  if (!country) {
    // إذا لم يتم العثور على تفاصيل الدولة، يمكنك استخدام `notFound` من next/navigation
    notFound();
  }

  return (
    <section style={{ height: "100vh" }}>
      <Header />
      <div className='flex' style={{ gap: "2rem", flexDirection: "column" }}>
        <div className='bac'>
          <div className='text-bac'>
            <h2>{country.name}</h2>
            <p>{country.description}</p>
            <p>جميع الأسعار بالريال السعودي</p>
          </div>
          <div>
            <img src={country.image} alt={country.name} />
          </div>
        </div>
        <div className='flex sss' style={{ gap: "2rem", width: "80%", margin: "auto" }}>
          <div className='img-class-bg'>
            <div>
              <img src="/image/0812202414421966ba1f4bc88ab (1).svg" alt="" />
            </div>
            <span>100</span>
          </div>
          <div className='img-class-bg'>
            <div>
              <img src="/image/0812202414422066ba1f4ce9dc4.svg" alt="" />
            </div>
            <span>300</span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

// هذه الدالة يتم استخدامها للحصول على المعلمات من URL
export async function generateMetadata({ params }) {
  const { id } = params;
  const country = countryDetails.find(c => c.id === parseInt(id));

  if (!country) {
    return { title: 'Country not found' };
  }

  return {
    title: country.name,
    description: country.description,
  };
}

export default CountryDetails;

import AppointmentSection from "./AppointmentCTA";
import Banner from "./Banner";
import Carousel from "./Caraousel";
import CoursesSection from "./Courses";
import ServicesSection from "./Services";
import TestimonialSection from "./Testemonials";

function HomePage() {
  return (
    <>
      <div>
        <Carousel />
        <Banner />
        <ServicesSection />
        <CoursesSection />
        <AppointmentSection />
        <TestimonialSection />
      </div>
    </>
  );
}

export default HomePage;

import Navbar from '@/components/Navigation/Navbar';
import ContactHeader from '@/components/Contact/ContactHeader';
import ContactContent from '@/components/Contact/ContactContent';
import TimingInfo from '@/components/FeatureTab/TimingInfo';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHeader />
      <ContactContent />

      <TimingInfo />
    </>
  );
}

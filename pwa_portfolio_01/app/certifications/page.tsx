import Navbar from "../components/Navbar";
import Certifications from "../components/Certifications/Certifications";

export default function CertificationsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Certifications isPage={true} />
    </main>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Calendar, Award, ExternalLink, FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialLink?: string;
  thumbnail?: string;
  file?: string;
}

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "AI & Automation Workshop",
      issuer: "SENTEC Society",
      issueDate: "2024",
      thumbnail: "/images/Certificates/AI-and-Automation-SENTEC.jpg",
      file: "/images/Certificates/AI-and-Automation-SENTEC.jpg",
    },
    {
      id: 2,
      title: "HCIA Data Communication",
      issuer: "Huawei ICT Academy (NEDUET)",
      issueDate: "2024",
      thumbnail: "/images/Certificates/HCIA-DataCom.png",
      file: "/images/Certificates/HCIA-DataCom.png",
    },
    {
      id: 3,
      title: "HCIA Data Communication (NED HAINA)",
      issuer: "Huawei ICT Academy",
      issueDate: "2024",
      thumbnail: "/images/Certificates/NED HAINA - HCIA DATACOMP.jpeg",
      file: "/images/Certificates/NED HAINA - HCIA DATACOMP.jpeg",
    },
    {
      id: 4,
      title: "Building Blog using MERN Stack",
      issuer: "Udemy",
      issueDate: "2024",
      file: "/images/Certificates/udemy-blog using MERN stack.pdf",
    },
    {
      id: 5,
      title: "Learn HTML / Become HTML Hero",
      issuer: "Udemy",
      issueDate: "2024",
      file: "/images/Certificates/udemy-HTML.pdf",
    },
    {
      id: 6,
      title: "Innovative Thinking: Inquiry-Based Approach",
      issuer: "Udemy (Apex Hatcher)",
      issueDate: "2024",
      file: "/images/Certificates/Udemy-ITP-Inquiry based approach.pdf",
    },
    {
      id: 7,
      title: "MS Word: Beginner to Expert",
      issuer: "Udemy",
      issueDate: "2024",
      file: "/images/Certificates/Udemy-MS Word.pdf",
    },
    {
      id: 8,
      title: "Essential Microsoft PowerPoint Course for Everyone",
      issuer: "Udemy",
      issueDate: "2024",
      file: "/images/Certificates/MS-Power-Point-Udemy.pdf",
    },
    {
      id: 9,
      title: "Digital Marketing",
      issuer: "Udemy",
      issueDate: "2024",
      thumbnail: "/images/Certificates/Digital-Marketing.png",
      file: "/images/Certificates/Digital-Marketing.png",
    },
    {
      id: 10,
      title: "WhatsApp Marketing",
      issuer: "Udemy",
      issueDate: "2024",
      file: "/images/Certificates/udemy-Whatsapp Marketing.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Validating expertise in cloud computing, data science, and software development
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? certificates : certificates.slice(0, 6)).map((certificate, index) => (
            <div
              key={certificate.id}
              className={`bg-light-gray rounded-xl p-6 transition-all duration-700 hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => {
                if (certificate.thumbnail) {
                  setSelectedCertificate(certificate);
                } else {
                  window.open(certificate.file, '_blank');
                }
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {certificate.issuer}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-text-gray">
                    <Calendar className="w-3 h-3" />
                    {certificate.issueDate}
                  </div>
                </div>
                {certificate.thumbnail ? (
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                ) : (
                  <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                )}
              </div>

              {certificate.credentialLink && (
                <a
                  href={certificate.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-300"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* More Certificates Button */}
        {!showAll && certificates.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              More Certificates
            </button>
          </div>
        )}

        {/* Certificate Modal */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedCertificate?.title}</DialogTitle>
            </DialogHeader>
            {selectedCertificate && (
              <div className="flex justify-center">
                <img
                  src={selectedCertificate.thumbnail}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certificates;

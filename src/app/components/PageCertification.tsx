import { Certifications } from "@/config/site";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
interface PageCertificationsProps {
  page: number;
}
const PageCertifications: React.FC<PageCertificationsProps> = ({ page }) => {
  const startIndex = (page - 1) * 2;
  const currentCerts = Certifications.slice(startIndex, startIndex + 2);

  if (currentCerts.length === 0) return null;

  return (
    <div className="w-full h-full p-10 px-14 font-serif text-left overflow-y-auto bg-cover">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300">
        Certifications
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {currentCerts.map((cert, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex gap-4 items-start">
              <Image
                src={cert.image}
                alt={cert.title}
                width={200}
                height={200}
                className="object-contain w-50 h-50"
              />
              <div>
                <h3 className="text-lg font-bold text-blue-900">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-700 italic">
                  {cert.description}
                </p>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-800 space-y-1">
                  {cert.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:underline text-sm"
                >
                  <ExternalLink size={16} /> View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageCertifications;

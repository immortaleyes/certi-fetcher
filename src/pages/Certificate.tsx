
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { findStudentById } from "@/data/students";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Certificate = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const [studentName, setStudentName] = useState<string | null>(null);

  useEffect(() => {
    const studentId = searchParams.get("studentId");

    if (!studentId) {
      setError("Invalid certificate link. Missing student ID.");
      setLoading(false);
      return;
    }

    const student = findStudentById(studentId);
    if (!student) {
      setError("No certificate found for the provided student ID.");
      setLoading(false);
      return;
    }

    setCertificateUrl(student.certificateUrl);
    setStudentName(student.name);
    setLoading(false);
  }, [searchParams]);

  const handleDownload = () => {
    if (certificateUrl) {
      window.open(certificateUrl, "_blank");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg">Loading certificate...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">OJT Program Certificate</h1>
        
        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
            <p className="text-red-700">{error}</p>
            <p className="mt-4 text-sm text-gray-600">
              Please go back to the main page and try again with the correct student ID.
            </p>
            <Button className="mt-4 w-full" onClick={() => window.location.href = "/"}>
              Go to Homepage
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
              <p className="text-green-700">
                Hello, <span className="font-medium">{studentName}</span>! Your certificate is ready for download.
              </p>
            </div>
            
            <Button
              onClick={handleDownload}
              className="w-full bg-green-600 hover:bg-green-700"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" /> Download Certificate
            </Button>
            
            <p className="mt-6 text-sm text-gray-500">
              This is your personal certificate download link. Please save it for future reference.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;

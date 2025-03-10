
import { Button } from "@/components/ui/button";
import CertificateForm from "@/components/CertificateForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">OJT Program Certificate</h1>
          <p className="text-gray-600">
            e-Disha Consultancy Online Training Program <br />
            <span className="font-medium">Feb 24 - Mar 8, 2025</span>
          </p>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Download Your Certificate</h2>
          <p className="text-gray-600 mb-6">
            Please enter your name and student ID to download your certificate.
          </p>
          
          <CertificateForm />
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>If you face any issues, please contact support at edisha.279@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

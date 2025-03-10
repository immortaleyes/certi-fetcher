
import { useState } from "react";
import { findStudent } from "@/data/students";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/components/ui/use-toast";
import { User, UserRound, Download } from "lucide-react";

const CertificateForm = () => {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState<ReturnType<typeof findStudent>>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!name || !studentId) {
      setError("Please enter both name and student ID");
      return;
    }

    const foundStudent = findStudent(name, studentId);
    setStudent(foundStudent);
    setSearched(true);
    
    if (!foundStudent) {
      setError("No certificate found for the provided details. Please check your name and student ID.");
    }
  };

  const handleDownload = () => {
    if (student) {
      // In a real app, this would trigger the actual download
      // For now, we'll just show a toast message
      toast({
        title: "Certificate Download Started",
        description: `Downloading certificate for ${student.name}`,
      });
      
      // Simulate opening the certificate URL
      window.open(student.certificateUrl, "_blank");
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <UserRound className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Enter your student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Verify Details
        </Button>
      </form>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {searched && student && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-medium text-green-800 mb-2">Certificate Found!</h3>
          <p className="text-green-700 mb-4">Hello, {student.name}! Your certificate is ready for download.</p>
          <Button 
            onClick={handleDownload} 
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <Download className="mr-2 h-4 w-4" /> Download Certificate
          </Button>
        </div>
      )}
    </div>
  );
};

export default CertificateForm;

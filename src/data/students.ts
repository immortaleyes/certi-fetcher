
import { Student } from "@/types/student";

// Mock data for demonstration purposes
// In a real app, this would come from a database
export const students: Student[] = [
  {
    id: "1",
    studentId: "STU001",
    email: "john.doe@example.com",
    mobile: "9876543210",
    name: "John Doe",
    certificateUrl: "https://example.com/certificates/john_doe.pdf"
  },
  {
    id: "2",
    studentId: "STU002",
    email: "jane.smith@example.com",
    mobile: "9876543211",
    name: "Jane Smith",
    certificateUrl: "https://example.com/certificates/jane_smith.pdf"
  },
  {
    id: "3",
    studentId: "STU003",
    email: "test@example.com",
    mobile: "1234567890",
    name: "Test User",
    certificateUrl: "https://example.com/certificates/test_user.pdf"
  }
];

export const findStudent = (name: string, studentId: string): Student | undefined => {
  return students.find(
    (student) => student.name.toLowerCase() === name.toLowerCase() && student.studentId === studentId
  );
};

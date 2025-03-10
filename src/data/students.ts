import { Student } from "@/types/student";

// Mock data for demonstration purposes
// In a real app, this would come from a database
export const students: Student[] = [
  {
    id: "1",
    studentId: "4788372",
    referenceNo: "EDC/OJT/2025/03/301",
    email: "john.doe@example.com",
    mobile: "9876543210",
    name: "John Doe",
    certificateUrl: "https://example.com/certificates/john_doe.pdf"
  },
  {
    id: "2",
    studentId: "4788373",
    referenceNo: "EDC/OJT/2025/03/302",
    email: "jane.smith@example.com",
    mobile: "9876543211",
    name: "Jane Smith",
    certificateUrl: "https://example.com/certificates/jane_smith.pdf"
  },
  {
    id: "3",
    studentId: "4788374",
    referenceNo: "EDC/OJT/2025/03/303",
    email: "test@example.com",
    mobile: "1234567890",
    name: "Test User",
    certificateUrl: "https://example.com/certificates/test_user.pdf"
  },
  {
    id: "4",
    studentId: "4788375",
    referenceNo: "EDC/OJT/2025/03/304",
    email: "alice.johnson@example.com",
    mobile: "9876543212",
    name: "Alice Johnson",
    certificateUrl: "https://example.com/certificates/alice_johnson.pdf"
  },
  {
    id: "5",
    studentId: "4788376",
    referenceNo: "EDC/OJT/2025/03/305",
    email: "bob.williams@example.com",
    mobile: "9876543213",
    name: "Bob Williams",
    certificateUrl: "https://example.com/certificates/bob_williams.pdf"
  },
  {
    id: "6",
    studentId: "4788377",
    referenceNo: "EDC/OJT/2025/03/306",
    email: "carol.brown@example.com",
    mobile: "9876543214",
    name: "Carol Brown",
    certificateUrl: "https://example.com/certificates/carol_brown.pdf"
  },
  {
    id: "7",
    studentId: "4788378",
    referenceNo: "EDC/OJT/2025/03/307",
    email: "david.jones@example.com",
    mobile: "9876543215",
    name: "David Jones",
    certificateUrl: "https://example.com/certificates/david_jones.pdf"
  }
];

// Simplified function to find student by studentId only
export const findStudentById = (studentId: string): Student | undefined => {
  return students.find(student => student.studentId === studentId);
};

// Find by reference number
export const findStudentByReferenceNo = (referenceNo: string): Student | undefined => {
  return students.find(student => student.referenceNo === referenceNo);
};

// Keep the original function for backward compatibility
export const findStudent = (name: string, studentId: string): Student | undefined => {
  return students.find(
    (student) => student.name.toLowerCase() === name.toLowerCase() && student.studentId === studentId
  );
};

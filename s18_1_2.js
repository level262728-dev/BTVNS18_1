console.log("\n--- BÀI 2 ---");

// 1. Tạo đối tượng student dựa trên bảng thông tin đề bài
const student = {
  id: 1,
  name: "Nguyễn Văn A",
  gender: "nam",
  age: 20,
  mark: 8
};

// 2. Khởi tạo đối tượng newStudent với thông tin tự điền
const newStudent = {
  id: 2,
  name: "Trần Thị C",
  gender: "nữ",
  age: 19,
  mark: 9.5
};

// 3. Tạo mảng students chứa cả 2 đối tượng
const students = [];
students.push(student);
students.push(newStudent);

// 4. Truy xuất các thuộc tính của "newStudent" thông qua mảng "students" (vị trí index = 1)
console.log("Thông tin newStudent truy xuất từ mảng:");
console.log("ID:", students[1].id);
console.log("Tên:", students[1].name);
console.log("Giới tính:", students[1].gender);
console.log("Tuổi:", students[1].age);
console.log("Điểm mark:", students[1].mark);
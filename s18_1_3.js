// 1. Khai báo dữ liệu học sinh từ Bài 2
const student = {
  id: 1,
  name: "Nguyễn Văn A",
  gender: "nam",
  age: 20,
  mark: 8
};

const newStudent = {
  id: 2,
  name: "Trần Thị C",
  gender: "nữ",
  age: 19,
  mark: 9.5
};

const students = [student, newStudent];

// 2. Thuật toán tìm học sinh có điểm cao nhất (Bài 3)
console.log("--- BÀI 3 ---");

let topStudent = students[0];

for (let i = 1; i < students.length; i++) {
  if (students[i].mark > topStudent.mark) {
    topStudent = students[i];
  }
}

console.log("Học sinh có điểm cao nhất là:");
console.log("ID:", topStudent.id);
console.log("Tên:", topStudent.name);
console.log("Giới tính:", topStudent.gender);
console.log("Tuổi:", topStudent.age);
console.log("Điểm:", topStudent.mark);
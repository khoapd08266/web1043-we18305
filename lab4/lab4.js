class Student{
    constructor(id, firstname, lastname, class_id, email, phone, dob) {
        this.id= id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.class_id = class_id;
        this.email = email;
        this.phone = phone;
        this.dob = dob;
    }
    //Phương thấy cho thấy lấy tên đầy đủ. (họ trước tên sau)
    getFullname(){
        return this.lastname + " " + this.firstname;
    }
    //Phương thức tính tuổi dựa trên ngày sinh được cấp.
    getageinyears(){
        const today = new Date();//tạo Date()để lưu thời gian hiện tại.
        const birthDate = new Date(this.dob);//tạo Date()mới truyền input dob của user để lưu ngày tháng năm sinh của HS
        let age = today.getFullYear() - birthDate.getFullYear();//ta lấy năm sinh của hiện tại trừ cho năm sinh để ra số tuổi hiện tại
        return age;//trả về số tuổi được tính
    }
}
//khởi tạo đối tượng và truyền tham số cần thiết vào constructor
let freshMan = new Student(
    "PD08266"
    "Nguyễn Anh Khoa"
    "Lê"
    "We18305"
    "khoalnapd08266@fpt.edu.vn"
    "0941711760"
    "2004-09-30"
);

console.log(freshMan);
console.log("fullname:" + freshMan.getFullname());
console.log("age:"+ freshMan.getAgeInYears());
console.log("age in Days:" + freshMan.getAgeInDays());
//tạo danh sách 5 sinh viên
var liststudents = [
    new Student(
        "1"
        "PD08266"
        "Nguyễn Anh Khoa"
        "Lê"
        "We18305"
        "khoalnapd08266@fpt.edu.vn"
        "0941711760"
        "2004-09-30"
    ),
    new student(
        "2"
        "PD08266"
        "Nguyễn Anh Khoa"
        "Lê"
        "We18305"
        "khoalnapd08266@fpt.edu.vn"
        "0941711760"
        "2004-09-30"
    ),
    new Student(
        "3"
        "PD08266"
        "Nguyễn Anh Khoa"
        "Lê"
        "We18305"
        "khoalnapd08266@fpt.edu.vn"
        "0941711760"
        "2004-09-30"
    ),
    new Student(
        "4"
        "PD08266"
        "Nguyễn Anh Khoa"
        "Lê"
        "We18305"
        "khoalnapd08266@fpt.edu.vn"
        "0941711760"
        "2004-09-30"
    ),
    new Student(
        "5"
        "PD08266"
        "Nguyễn Anh Khoa"
        "Lê"
        "We18305"
        "khoalnapd08266@fpt.edu.vn"
        "0941711760"
        "2004-09-30"
    ),
]; 
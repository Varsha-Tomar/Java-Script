
const course ={
    coursename: "js in english",
    price: 999,
    courseInstructor: "Hitesh"
}

//course.courseInstructor   // another syntax to access data

const {courseInstructor} = course

const {courseInstructor: instructor} =course  // after the : anything write which is called nick name all the data access through that name 
console.log(instructor)
console.log(courseInstructor);


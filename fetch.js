
var courseAPI = 'http://localhost:3000/courses'

// function start() {
//     getCourses(renderCourses);

//     handleCreateForm()

    
// }

// start()

// // function

// function getCourses(callBack){
//     fetch(courseAPI)
//         .then(function(response){
//             return response.json()
//         })
//         .then(callBack);
// }

// function createCourse(data, callBack) {
//     var options = {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     fetch(courseAPI, options)
//         .then(function(response) {
//             response.json()
//         })
//         .then(callBack)
// }

// function handleDeleteCourse(id) {
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     fetch(courseAPI + '/' + id, options)
//         .then(function(response) {
//             response.json()
//         })
//         .then(function() {
//             var courseItem = document.querySelector('.course-item-' + id)
//             if (courseItem){
//                 courseItem.remove();
//             }
//         })
// }

// function renderCourses(courses) {
//     var listCourses = document.querySelector('#list-courses')

//     var htmls = courses.map(function(course){
//         return `<li class="course-item-${course.id}">
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>
//                 <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
//             </li>
//         `;
//     });
//     var html = htmls.join('')
//     listCourses.innerHTML = html
// }

// function handleCreateForm() {
//     var createBtn = document.getElementById('create-btn')

//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"]').value
//         var description = document.querySelector('input[name="description"]').value

//         var formData = {
//             name: name,
//             description: description
//         }
//         createCourse(formData, function(){
//             getCourses(renderCourses)
//         })
//         clearForm()
//     }
// }

// function clearForm() {
//     document.querySelector('input[name="name"]').value = ''
//     document.querySelector('input[name="description"]').value = ''
// }

// function start() {
//     getCourses(renderCourses)

//     handleCreateForm()
// }

// start()

// // function

// function getCourses(callBack) {
//     fetch(courseAPI)
//         .then(function(response){
//             return response.json() ==> [....]
//         })
//         .then(callBack) 
// }

// function renderCourses(courses) {
//     var htmls = courses.map(function(course) {
//         return `
//         <li class = "course-item-${course.id}">
//             <h2>${course.name}</h2>
//             <p>${course.description}</p>
//             <button>Xóa</button>
//         </li>
//         `
//     })
//     document.querySelector('#list-courses').innerHTML = htmls.join('')
// }

// function createCourse(data, callBack) {
//     var option = {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         }
//     };
//     fetch(courseAPI, option)
//         .then(function(response) {
//             response.json();
//         })
//         .then(callBack);
// }

// function handleCreateForm() {
//     var createBtn = document.querySelector('#create-btn');

//     createBtn.onclick = function() {

//         var name = document.querySelector('input[name = "name"]').value;
//         var description = document.querySelector('input[name = "description"]').value;

//         var formData = {
//             name: name,
//             description: description
//         }

//         createCourse(formData, function() {
//             getCourses(renderCourses)
//         })
//     }
// }
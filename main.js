
/* LÀM VIỆC VỚI CHUỖI */
var fullName = 'Lê Hồng Phú'

// 1. Length
fullName.length
// 2. Find Index
fullName.indexOf('Phú', 0)

fullName.search('Phú')
// 3. Cut String
fullName.slice(8)
// 4. Replace
fullName.replace(/Phú/g, 'Fu')
// 5. Upper Case
fullName.toUpperCase()
// 6. Lower Case
fullName.toLowerCase()
// 7. Trim
fullName.trim()
// 8. Split
fullName.split(' ')
// 9. Get a character by index
fullName.charAt(2)

/* LÀM VIỆC VỚI SỐ */
var age = 20
var pi = 3.145

// to string
age.toString()
// to fixed
pi.toFixed(/* số chữ số muốn làm tròn sau dấu , */)

/*  MẢNG TRONG JAVASCRIPT - ARRAY */

var names = [
    'Phú',
    'Huyền',
    'Tân'
]
var names2 = 'Phú'

// 1. To String
//  -   names.toString()
// 2. Join
//  -   names.join(/* kí tự ngăn cách giữa các phần tử ở array */)
// 3. Pop
//  -   names.pop() // xóa phần tử cuối của mảng và trả về phần tử vừa xóa
// 4. Push
//  -   names.push(/* giá trị muốn thêm */) // chèn 1 phần tử vào cuối mảng và trả về length mới
// 5. Shift
//  -   names.shift() // giống pop nhưng xóa phần từ đầu tiên của mảng
// 6. Unshift
//  -   names.unshift(/* giá trị muốn thêm */) // giống push nhưng chèn vào đầu mảng
// 7. Splicing
//  -   names.splice(/* vị trí, số lượng phần tử muốn xóa, giá trị muốn chèn */) + trả về giá trị xóa
// 8. Concat
//  -   console.log(names.concat(names2))
// 9. Slicing
//  -   giống slice chuỗi


var courses = [
    {
        name: 'Javascript',
        coin: 460
    },
    {
        name: 'HTML',
        coin: 200
    },
    {
        name: 'CSS',
        coin: 300
    }
]



// forEach() method

Array.prototype.forEach2 = function(callBack){
    for (var index in this){
        if (this.hasOwnProperty(index)){
           callBack(this[index], index, this)
        }
    }
}


// courses.forEach2(function(course, index, array){
//     console.log(course, index, array)
// })

// filter() method

Array.prototype.filter2 = function(callBack){
    var output = []
    for (var index in this){
        if (this.hasOwnProperty(index)){
            var result = callBack(this[index], index, this)
            if (result)
                output.push(this[index])
        }
    }
    return output
}


var listCourses = courses.filter2(function(course, index, array){
    return course.coin > 200
})

// console.log(listCourses)

// some() method

Array.prototype.some2 = function(callBack){
    for (var index in this){
        if (this.hasOwnProperty(index)){
            if (callBack(this[index], index, this)){
                return true
                break;
            }
        }
    }
    return false
}


var listCourses = courses.some2(function(course, index, array){
    return course.coin > 0
})

// every() method

Array.prototype.every2 = function(callBack){
    for (var index in this){
        if (this.hasOwnProperty(index)){
            if (!callBack(this[index], index, this)){
                return false
                break;
            }
        }
    }
    return true
}


var listCourses = courses.every2(function(course, index, array){
    return course.coin >= 300
})

// console.log(listCourses)

/* Function */

var firstName = 'Phú'
function printFullName(fullName) {
    console.log(fullName)
}

// printFullName(names)

// console.log(names.includes(names2))


/* OBJECT */

var myObject = {
    name: 'Phú',
    age: 20,
    address: 'Hải Dương'
}

myObject.email = 'phuhd2k1@gmail.com'
delete myObject.email
// console.log(myObject)

// object constructor ~~ class / struct in OOP

var temp = myObject.age >= 18 ? 'Đã đủ 18 tuổi' : 'Còn non lắm'

// console.log(temp)

var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
]

var formValues = [
    {field: 'name', value: 'Phú Lê'}
]

var numbers1 = [1, 2, 3, 6]
var numbers2 = [2, 4, 6]

function findEqualValues(array1,array2){    
    return array1.filter(function(item){
            return array2.includes(item);        
    });
}

/* MATH OBJECT */

/*
- Math.PI
- Math.round() - làm tròn
- Math.abs() - trị tuyệt đối
- Math.ceil() - làm tròn lên
- Math.floor() - làm tròn xuống
- Math.random() - random
- Math.min() - min
- Math.max() - max
*/

/* DOM events */

// var inputElement = document.querySelector('input[type="text"]')

// var inputValue;

// inputElement.onchange = function(event){
//     inputValue = event.target.value
//     divElement.innerText = inputValue
// }

// var divElement = document.querySelector('.content')

// console.log(divElement.innerText)

// ---------------- //

// var inputElement = document.querySelector('input[type="checkbox"]')

// inputElement.onchange = function(event){
//     console.log(event.target.checked)
// }

// console.log(inputElement)



// var btnElement = document.querySelector('button')

// btnElement.addEventListener('click', function(e){
//     console.log(Math.floor(Math.random() * 1000))
// })

                 /* JSON */

// Stringify => Javascript type -> JSON
// Parse => JSON -> Javascript type
// var json = '["Javascript", "PHP"]'
var json = '{"name":"Phú", "age":20}'

var objectTest = JSON.parse(json)

// console.log(objectTest)

// console.log(JSON.stringify([
//     'Javascript',
//     'PHP'
// ]))

// console.log(JSON.stringify(objectTest))

/* PROMISE */

var promise = new Promise(
    function(resolve, reject){
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
    }
)


var users = [
    {
        id: 1,
        name: 'Phú'
    },
    {
        id: 2,
        name: 'Tân'
    },
    {
        id: 3,
        name: 'No Name'
    }
]
var hometowns = [
    {
        id: 1,
        user_id: 2,
        address: 'Nghệ An'
    },
    {
        id: 2,
        user_id: 1,
        address: 'Hải Dương'
    }
]

/*

function getHometowns() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(hometowns)
        }, 1000)
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            var result = users.filter(function(user){
                return userIds.includes(user.id)
            })
            resolve(result);
        }, 1000);
    })
}

getHometowns()
    .then(function(hometowns){
        var userIds = hometowns.map(function(hometown){
            return hometown.user_id
        })

        return getUsersByIds(userIds)
                .then(function(users){
                    return{
                        users: users,
                        hometowns: hometowns
                    }
                })
    })
    .then(function(data){
        
        var divElement = document.querySelector('div')

        var html = ''

        data.hometowns.forEach(function(hometown){
            var user = data.users.find(function(user){
                return user.id === hometown.user_id
            })
            html += `<li>${user.name} quê ${hometown.address}</li>` 
        })
        
        divElement.innerHTML = html
    })

*/

// function getHometowns() {
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(hometowns)
//         }, 1000)
//     })
// }

// function getUsersByIds(userIds) {
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             var result = users.filter(function(user){
//                 return userIds.includes(user.id)
//             })
//             resolve(result)
//         }, 1000)
//     })
// }


// getHometowns()
//     .then(function(hometowns){
//         var userIds = hometowns.map(function(hometown){
//             return hometown.user_id
//         })
//         return getUsersByIds(userIds)
//                 .then(function(users){
//                     return {
//                         users: users,
//                         hometowns: hometowns
//                     }
//                 })
//     })
//     .then(function(data){
//         var divElement = document.querySelector('div')

//         var html = ''

//         data.hometowns.forEach(function(hometown){
//             var user = data.users.find(function(user){
//                 return hometown.user_id === user.id
//             })
//             html += `<li>
//             ${user.name} quê ${hometown.address}</li>`
//         })

//         divElement.innerHTML = html
//     })

//

let a = [1, 2, 3]


Promise

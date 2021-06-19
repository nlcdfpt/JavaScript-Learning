// ////// Practice 1

// var users = [
//     {
//         id: 1,
//         name: 'Lisa'
//     },
//     {
//         id: 2,
//         name: 'Rose'
//     }
// ]

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Hello, What\'s your name?'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Hi, My name is Rose. What about you?'
//     },
//     {
//         id: 3,
//         user_id: 1,
//         content: 'I am Lisa. Nice to meet you'
//     },
//     {
//         id: 4,
//         user_id: 2,
//         content: 'Nice to meet you, too. Where are you from?'
//     },
//     {
//         id: 5,
//         user_id: 1,
//         content: 'I come from Seoul, Korea. And you?'
//     },
//     {
//         id: 6,
//         user_id: 2,
//         content: 'I am from Vietnam. What do you do for living?'
//     },
//     {
//         id: 7,
//         user_id: 1,
//         content: 'I am a singer, from Blackpink'
//     }
// ]

// var getComments = function () {
//     return new Promise((resolve, reject) => {
//         if (comments) {
//             resolve(comments)
//         } else {
//             reject('No comments')
//         }
//     })
// }

// var getUsersByIds = function (userIds) {
//     return new Promise((resolve) => {
//         var result = users.filter((user) => userIds.includes(user.id))

//         resolve(result)
//     })
// }


// getComments()
//     .then((comments) => {
//         var userIds = comments.map(comment => comment.user_id)

//         return getUsersByIds(userIds)
//             .then((users) => {
//                 return {
//                     users: users,
//                     comments: comments
//                 }
//             })
//     })
//     .then(data => {
//         var htmls = '';
//         data.comments.forEach(comment => {
//             var user = data.users.find((user) => user.id === comment.user_id);

//             htmls += `<li><span>${user.name}:</span> ${comment.content}</li>`
//         })
//         console.log(htmls)
//         document.querySelector('#comment-block').innerHTML = htmls
//     })


// const body = document.body
// const bodyChildNodes = body.childNodes //NodeList:array-like (implement for-each, cannot array methods), return children with all node types
// const bodyChildren = body.children //HTMLCollection:array-like (not implement for-each, cannot array methods), return children with only element type
// console.log(body)
// console.log(bodyChildNodes)
// console.log(bodyChildren)
// bodyChildNodes.forEach((bcn) => {
//     console.log(bcn)
// })
// Array.from(bodyChildren).forEach((bc) => {
//     console.log(bc)
// })
// console.log(body.firstChild)
// console.log(body.firstElementChild)
// console.log(body.lastChild)
// console.log(body.lastElementChild)

// console.log(body.firstChild === body.firstElementChild)
// console.log(body.lastChild === body.lastElementChild)

// console.log(document.documentElement === document.firstElementChild)
// console.log(document.documentElement === document)

// console.log(document.documentElement) //html, root element
// console.log(document) //root node

// //query/select element by id
// const course201Ele = document.getElementById('int201')
// console.log(course201Ele)
// const course101Ele = document.querySelector('#int101')
// console.log(course101Ele)
// const bscitCourses = document.querySelector('#int201,#int101,.programming')
// console.log(bscitCourses)
// const progCourses = document.querySelector('.programming')
// console.log(progCourses)

// //select/query a collection of elements
// //find with css selector
// const progEle = document.querySelectorAll('#int201, .programming')
// console.log(progEle) //NodeList
// const liEle1 = document.querySelectorAll('li')
// console.log(liEle1) //Nodelist
// //find with tag name
// const liEle2 = document.getElementsByTagName('li')
// console.log(liEle2) //HTMLCollection

// //find with classname
// const coursesEle = document.getElementsByClassName('courses')
// console.log(coursesEle)

// const secondDiv = document.body.children[1]
// secondDiv.querySelectorAll('div')

// console.log(secondDiv)

// const divLectElement = document.querySelector('.lecturers')
// //get <li> under div.lecturers
// const liDivLect = divLectElement.querySelectorAll('li')
// console.log(liDivLect)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// const firstDiv = document.body.firstElementChild
// console.log(firstDiv)
// const firstDivAttr = firstDiv.attributes
// console.log(firstDivAttr)

// Array.from(firstDivAttr).forEach((fda) => {
//     console.log(fda)
//     console.log(fda.value)
// })
// console.log(firstDiv.getAttribute('id')) //return value of specified attribute 'id'
// console.log(firstDiv.getAttribute('class'))
// //return value of specified attribute 'name'
// const firstAttribute = firstDivAttr[0]
// console.log(firstAttribute.ownerDocument)
// console.log(firstAttribute.ownerElement)

// firstDiv.setAttribute('owner','Pitichai')

// const createP = document.createElement('p')
// createP.setAttribute('id', 'int203')
// createP.setAttribute('class', 'courses')
// createP.textContent = 'int203'
// // firstDiv.appendChild(createP)
// const refNode=firstDiv.lastElementChild
// // firstDiv.insertBefore(createP,refNode)
// firstDiv.replaceChild(createP,refNode)

// firstDiv.removeChild(createP)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

window.alert('Do you want to exit?')
const username = window.prompt('Please enter your name', 'Ex., Somchai Rakdee') //cancel returns null, if ok return name value
console.log(username)
const userAction = window.confirm(`Good Bye, ${username}`)
console.log(userAction)
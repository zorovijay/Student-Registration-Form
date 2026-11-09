var btn = document.getElementById("btn-save")

btn.addEventListener("click", function () {

    var name = document.getElementById("name")
    var age = document.getElementById("age")
    var course = document.getElementById("course")
    var email = document.getElementById("email")
    var gender = document.querySelector('input[name="gender"]:checked')
    var mytable = document.getElementById("mytable")

    var row = document.createElement("tr")

    var nameRow = document.createElement("td")
    nameRow.textContent = name.value
    row.appendChild(nameRow)

    var ageRow = document.createElement("td")
    ageRow.textContent = age.value
    row.appendChild(ageRow)

    var courseRow = document.createElement("td")
    courseRow.textContent = course.value
    row.appendChild(courseRow)

    var genderRow = document.createElement("td")
    genderRow.textContent = gender.value
    row.appendChild(genderRow)

    var emailRow = document.createElement("td")
    emailRow.textContent = email.value
    row.appendChild(emailRow)

    var actionRow = document.createElement("td")

    var deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.style.backgroundColor = "pink"
    deleteBtn.style.cursor = "pointer"
    deleteBtn.style.borderRadius = "5px"


    deleteBtn.addEventListener("click", function () {
        row.remove()
    })

    actionRow.appendChild(deleteBtn)
    row.appendChild(actionRow)

    mytable.appendChild(row)
})

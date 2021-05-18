const endPoint = "http://localhost:3000/api/v1/mentors"

document.addEventListener('DOMContentLoaded', () => {
    //fetch and load mentors
    console.log("DOM is Loaded")
    getMentors()

    // event listner and handler for create mentor form
    const createMentorForm = document.querySelector("#create-mentor-form")
    createMentorForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getMentors() {
    fetch(endPoint)
    .then(res => res.json())
    .then(mentors => {
        mentors.data.forEach(mentor => {
            let newMentor = new Mentor(mentor, mentor.attributes)

            document.querySelector('#mentor-container').innerHTML += newMentor.renderMentorCard()
        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const titleInput = document.querySelector('#input-title').value
    const aboutInput = document.querySelector('#input-about').value
    const imageInput = document.querySelector('#input-url').value
    const departmentInput = document.querySelector('#department').value
    const departmentId = parseInt(departmentInput)
    postMentor(nameInput, titleInput, aboutInput, imageInput, departmentInput)
}
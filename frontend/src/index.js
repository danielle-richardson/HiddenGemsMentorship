const endPoint = "http://localhost:3000/api/v1/mentors"

document.addEventListener('DOMContentLoaded', () => {
    //fetch and load mentors
    console.log("DOM is Loaded");
    getMentors();
    submitForm();

    // selecting a specific profiles' delete button and attaching click event listener
    window.addEventListener("click", (e) => {
        if (e.target.className == "btn btn-sm btn-outline-secondary") {
            let deleteButton = e.target 
            let id = deleteButton.dataset.id 
            let deleteButtonSelect = document.querySelector(`[data-id="${id}" ]`);
            alert("Are you sure? Click Delete again to confirm.")

            deleteButtonSelect.addEventListener("click", (e) => {
                deleteMentor();
            })
        }
    })
})

function submitForm () {
    const createMentorForm = document.querySelector("#create-mentor-form")
    createMentorForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createFormHandler(e);
        createMentorForm.reset()
    })
}
  
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
    postFetch(nameInput, titleInput, aboutInput, imageInput, departmentId)
}

//POST FETCH
function postFetch(name, title, about, image_url, department_id) {
    // build my body object outside of my fetch
    const bodyData = {name, title, about, image_url, department_id}
  
    fetch(endPoint, {
      // POST request
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(res => res.json())
    .then(mentor => {
      const mentorData = mentor.data
      // render JSON response
      let newMentor = new Mentor(mentorData, mentorData.attributes)
      document.querySelector('#mentor-container').innerHTML += newMentor.renderMentorCard()
    })
}



function deleteMentor () {
  let mentorId = event.target.dataset.id;
  // let mentorId = this.parentElement.getAttribute('data-id')
  fetch(`${endPoint}/${mentorId}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then((json) => {
      let selectedMentor = document.querySelector(`.card[data-id="${mentorId}"]`);
      selectedMentor.remove();
      alert("Mentor Successfully Deleted!")
  })
} 
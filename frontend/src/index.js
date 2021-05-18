const endPoint = ("http://localhost:3000/api/v1/mentors")

document.addEventListener('DOMContentLoaded', () => {
    getMentors()
})

function getMentors() {
    fetch(endPoint)
        .then(res => res.json())
        .then(mentors => {
            mentors.data.forEach(mentor => {
                const mentorMarkup =
                    <div data-id=${mentor.id}>
                        <img src=${mentor.attributes.image_url} height="200" width="250">
                            <h3>${mentor.attributes.title}</h3>
                            <p>${mentor.attributes.department.name}</p>
                            <button data-id=${mentor.id}>edit</button>
                    </div>
                        <br></br>

            document.querySelector('#mentor-container').innerHTML+= mentorMarkup
            })
        })
}
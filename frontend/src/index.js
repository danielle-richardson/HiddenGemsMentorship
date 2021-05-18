const endPoint = ("http://localhost:3000/api/v1/mentors")

document.addEventListener('DOMContentLoaded', () => {
    fetch (endPoint)
    .then(response => response.json())
    .then(mentor => {
        console.log(mentor);
    })
})
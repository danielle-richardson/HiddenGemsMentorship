class Mentor {
  constructor(mentor, mentorAttributes) {
    this.id = mentor.id
    this.name = mentorAttributes.name
    this.title = mentorAttributes.title
    this.about = mentorAttributes.about
    this.image_url = mentorAttributes.image_url
    this.department = mentorAttributes.department
    Mentor.all.push(this)
    console.log(this);
  }

  renderMentorCard() {
   return ` 
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src=${this.image_url} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.about}</p>
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-muted">Department: ${this.department.name}</small>
        </div>
      </div>
     </div>
     </div>
     </div>
     </div>
    </div> ` 
  }

}

Mentor.all = [];

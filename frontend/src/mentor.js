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
   <div class="card" data-id="${this.id}"> 
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="${this.image_url}" class="card-img-top" alt="...">
        <div class="card-body" style="color: gray;">
        <h5 class="card-title">${this.name}</h5>  
        <h6 class="card-title">${this.title}</h6>
        <h6 class="card-title">${this.department.name} Department</h6>
        <small class="card-text">${this.about}</small>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" data-id="${this.id}">Delete</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  </div> ` 
  }
}

Mentor.all = [];

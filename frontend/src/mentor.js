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
        <div class="mentorlist">
          <div class="row">
            <div class="column">
              <img src=${this.image_url} style="width:100%">
              <h5>${this.title}</h5>
              <h5>Department: ${this.department.name}</h5>
              <p>${this.about}</p>
              <div class="btn-group">
                <button type="button" class="btn btn">View</button>
                <button type="button" class="btn btn">Edit</button>
              </div> 
            </div>
          <div>
        </div> <br> `
  }
}

Mentor.all = [];

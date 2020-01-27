class App {

  static init() {
    App.box = undefined

    const courses = document.getElementsByClassName('grid-item')
    for(const course of courses) {
      course.addEventListener("dragstart", App.dragstart)
      course.addEventListener("dragend", App.dragend)
    }

    const containers = document.getElementsByClassName('grid-term')

    for(const container of containers) {
      container.addEventListener("dragover", App.dragover)
      container.addEventListener("dragenter", App.dragenter)
      container.addEventListener("dragleave", App.dragleave)
      container.addEventListener("drop", App.drop)
    }
  }

  static dragstart() {
    this.className += " held"
    App.box = this

    setTimeout(()=>this.className="invisible", 0)
  }

  static dragend() {
    this.className = "grid-item"
  }

  static dragover(e) {
    e.preventDefault()
  }

  static dragenter(e) {
    e.preventDefault()
    this.className += " hovered"
  }

  static dragleave() {
    this.className = "grid-term"
  }

  static drop() {
    console.log(App.box)
    this.className = "grid-term"
    this.append(App.box)
  }

}

document.addEventListener("DOMContentLoaded", App.init)

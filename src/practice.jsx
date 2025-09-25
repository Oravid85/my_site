const lectures = ["aris", "bialik", "poliker"]
console.log(lectures[2])

lectures.push("hakerem")
console.log(lectures)

const index = lectures.findIndex((item) => item === "poliker")
console.log(index)

const editedlectures = lectures.map((item) => item + "!")
console.log(editedlectures)

const [firstName, lastName] = ["Or", "Avid"]

const { name, age } = {
  name: "Or",
  age: 40,
}
import { useState } from "react"

export function ImageCarusel() {
  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src="https://images.cdn-files-a.com/uploads/6918488/2000_65c646aa59e06.jpg"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img
            src="https://shabloolrecords.co.il/wp-content/uploads/2022/07/ARIS-SAN-BOUMPAM-DAM-DAM.jpg"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXSpgKsSWM_xkBmKqIZBpw8y6V2qWA9Kf5w&s"
            style={{ width: "100%" }}
          />
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </>
  )
}

const image1 =
  "https://images.cdn-files-a.com/uploads/6918488/2000_65c646aa59e06.jpg"
const image2 =
  "https://shabloolrecords.co.il/wp-content/uploads/2022/07/ARIS-SAN-BOUMPAM-DAM-DAM.jpg"
const image3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXSpgKsSWM_xkBmKqIZBpw8y6V2qWA9Kf5w&s"
const images = [image1, image2, image3]

const [currentImageIndex, setCurrentImageIndex] = useState(0)
const currentImage = images[currentImageIndex]
setCurrentImageIndex(currentImageIndex + 1)

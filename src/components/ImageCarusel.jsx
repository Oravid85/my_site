import { useState } from "react"

export function ImageCarusel() {
const image1 = "https://images.cdn-files-a.com/uploads/6918488/2000_65c646aa59e06.jpg"
const image2 = "https://shabloolrecords.co.il/wp-content/uploads/2022/07/ARIS-SAN-BOUMPAM-DAM-DAM.jpg"
const image3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXSpgKsSWM_xkBmKqIZBpw8y6V2qWA9Kf5w&s"
const images = [image1, image2, image3]

const [currentImageIndex, setCurrentImageIndex] = useState(0);
const currentImage = images[currentImageIndex];

  
    return (
       //כאן צריך להדיר: ההגדרה של התמונה הנוכחית בעזרת האינדקס של הUSESTATE העדכני
       //להוסיף פונקציה שמתייחסת לONCLICK כדי להחליף את התמונה    <>
     


</>
)
}
 
<button id=next> ">" </button>
<button> "<" </button>

function nextImage() {
if next.onclick === true:
    setCurrentImageIndex (currentImageIndex+1);
}
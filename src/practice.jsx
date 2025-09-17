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

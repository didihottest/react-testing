const getAllUsers = (req, res, next) => {
  const users = [
    {
      name: "Juan",
      age: 21,
      hobbies: ['Ngoding', "Tidur"]
    },
    {
      name: "Rizky",
      age: 21,
      hobbies: ['Game', "Olahraga"]
    },
    {
      name: "Ninda",
      age: 21,
      hobbies: ['Lari', "Tidur"]
    }
  ]
  res.json({
    message: "Get User Successfully",
    data: users
  })
}

module.exports = {
  getAllUsers
}
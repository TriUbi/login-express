const fs = require("fs").promises

const getUsers = async (req, res) => {
    const data = await fs.readFile("./data/users.json")
    const users = JSON.parse(data)

    if (!users || users.length <= 0) {
        return res.status(400).json("No users found")
    }

    res.status(200).json(users)
}
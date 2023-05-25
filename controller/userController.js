const getAllusers = (req, res) => {
  res.status(200).json({
    message: "All users",
  });
};

const postOneUsers = (req, res) => {
  res.status(200).json({
    message: "get one user",
  });
};

const createUsers = (req, res) => {
  res.status(201).json({
    message: "user is created",
  });
};

const updateUsers = (req, res) => {
  res.status(200).json({
    message: "user is updated",
  });
};

const deleteUsers = (req, res) => {
  res.status(200).json({
    message: "user is deleted",
  });
};

module.exports = {
  getAllusers,
  postOneUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};

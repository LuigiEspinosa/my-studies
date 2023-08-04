import { v4 as uuidV4 } from 'uuid';

let users = [
  {
    id: uuidV4(),
    name: 'Jhon',
    age: 20,
  },
  {
    id: uuidV4(),
    name: 'Amanda',
    age: 22,
  },
  {
    id: uuidV4(),
    name: 'Rick',
    age: 20,
  },
];

export const getUsers = function (req, res) {
  res.json(users);
};

export const createUser = function (req, res) {
  const { name, age } = req.body;

  users.push({
    name,
    age,
    id: uuidV4(),
  });

  res.json(users);
};

export const getUser = function (req, res) {
  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  res.json(user);
};

export const deleteUser = function (req, res) {
  const userId = req.params.id;
  const user = users.filter((user) => user.id !== userId);

  res.json(user);
};

export const updateUser = function (req, res) {
  const userId = req.params.id;
  const { age, name } = req.body;

  const user = users.map((user) => {
    if (user.id === userId) {
      return {
        id: user.id,
        name,
        age,
      };
    }

    return user;
  });

  res.json(user);
};

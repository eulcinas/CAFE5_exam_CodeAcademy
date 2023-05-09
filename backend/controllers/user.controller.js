import User from '../models/user.model.js';
import dotenv from 'dotenv';

dotenv.config();

//! Routes from cafe5_exam

// GET | returns all users from MongoDB cafe5_exam (ID, name, surname, email, age)
export const getUsers = async (_req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.log(error);
    res.json({ message: `Error retrieving users` });
  }
};

// POST | post users in MongoDB cafe5_exam (name, surname, email, age)
export const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const createNewUser = new User(newUser);
    const savedUser = await createNewUser.save();

    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error creating users' });
  }
};

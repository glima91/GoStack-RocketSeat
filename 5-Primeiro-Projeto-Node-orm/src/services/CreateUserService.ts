import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  password: string;
  email: string;
}


class CreateUserService{
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);
    //check if user email exists
    const checkUserExists = await usersRepository.findOne({
      where: { email }
    ,
    });

    //if email exists send error message
    if (checkUserExists) {
      throw new AppError("Email address already used.");
    }
    //create hash of password
    const hashedPassword = await hash(password, 8);
    //else create a new user structure
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    //persist user in database
    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
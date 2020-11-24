import { request, response, Router } from 'express';
import multer from 'multer';

import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const usersRouter = Router();

const upload = multer(uploadConfig);

// create new appointment
usersRouter.post('/', async (request, response) => { 
   
      const { name, email, password } = request.body;
      // create instance of service
      const createUser = new CreateUserService();
      // create user
      const user = await createUser.execute({
        name,
        email,
        password,
      });
      // delete password
      delete user.password;

      return response.json(user);
   
});

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar') ,async (request, response) => {
  
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  
});



export default usersRouter;
import { Router } from 'express';
import { parseISO } from 'date-fns';


import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentRepository from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// list appointments
appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();
    return response.json(appointments);
});


// create new appointment
appointmentsRouter.post('/', (request, response) => { 
    try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentRepository(
        appointmentsRepository,
        );

    const appointment = createAppointment.execute({ 
        date: parsedDate, 
        provider });

    return response.json(appointment);
        
    } catch (err) {
        return response.status(400).json({ message: err.message });
    }
});

export default appointmentsRouter;
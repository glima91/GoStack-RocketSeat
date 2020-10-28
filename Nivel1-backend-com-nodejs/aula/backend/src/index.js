const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

// informa que API vai receber dados do tipo JSON
app.use(express.json());


const projects = []

//middlewares
function logRequests(request, response, next) {
    const { method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.log(logLabel);

    return next();

}

function validateProjectId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
        return response.status(400).json({"error": "Invalid project ID."});
    }

    return next();

}






// usa middleware
app.use(logRequests);
//app.use('/projects/:id', validateProjectId);

app.get('/projects',(request,response) => {
    const { title } = request.query;

    // se 'title' nao estiver vazio executa primeira linha, senao executa a segunda
    const results = title 
        ? projects.filter(project => projects.title.includes(title))    
        : projects;

    return response.status(200).json(results);
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
    
    const project = {'id': uuid(), title, owner};

    projects.push(project)

    return response.status(201).json(project);
});

app.put('/projects/:id', validateProjectId,(request, response) => {
    const id = request.params.id;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ "error" : "Project not found!" });
    } 
        
    const project = {
        id,
        title,
        owner,
    };
    
    projects[projectIndex] = project;
    
    
    return response.status(201).json(project);
    

   
});

app.delete('/projects/:id', validateProjectId ,(request, response) => {
    var id = request.params.id;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ "error" : "Project not found!" });
    } 
    // remove elemento da lista
    projects.splice(projectIndex, 1);

    return response.status(204).send();
});


app.listen(3333,() => { console.log("Executando!!") });
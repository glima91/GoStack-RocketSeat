import React, { useState , useEffect } from 'react';

import Header from './components/Header';

import './App.css';

import api from './services/api';

import backGroundImage from './assets/backgroundimage.jpg';

function App() {

    const [projects, setProjects] = useState([]);

    //executa funcao sempre que altera determinada variavel
    useEffect(() => {
        api.get('projects').then(response => {
            console.log("Aqui!!!");
            setProjects(response.data);
        });
    }, []);

    async function handleAddproject() { 
        //setProjects([...projects,`Novo projeto ${Date.now()}`]);
        const response = await api.post('projects',{
            title : `Novo projeto ${Date.now()}`,
            owner : "Gustavo Lima"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <> 
        <Header title='estado'/>

        <img width={300} src={backGroundImage}/>

        {projects.map(project => <li key={project.id}>{project.title}</li>)}
        
        <br></br>
        <button type="button" onClick={handleAddproject}>Adicionar Projeto</button>    

        <Header title="homepage">
        <ul>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>

        </Header>
        <Header title="login"/>
        </>
    );
}

export default App;
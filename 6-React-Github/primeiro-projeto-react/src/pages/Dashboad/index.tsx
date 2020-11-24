import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/Logo.svg';
import Repository from '../Repository';
const Dashboard: React.FC = () =>{
  return (
    <>
    <img src={logoImg} alt="Github Explorer"/>
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
    <a href="teste">
      <img src="https://avatars1.githubusercontent.com/u/45151632?s=460&u=dba2ab234cef6c1789eca13de065647a6b6f45ce&v=4" 
        alt="Gustavo"/>
      <div>
        <strong>RocketSeat</strong>
        <p>Descrição do repositorio</p>
      </div>
      <FiChevronRight size={20} />
    </a>
    <a href="teste">
      <img src="https://avatars1.githubusercontent.com/u/45151632?s=460&u=dba2ab234cef6c1789eca13de065647a6b6f45ce&v=4" 
        alt="Gustavo"/>
      <div>
        <strong>RocketSeat</strong>
        <p>Descrição do repositorio</p>
      </div>
      <FiChevronRight size={20} />
    </a>
    <a href="teste">
      <img src="https://avatars1.githubusercontent.com/u/45151632?s=460&u=dba2ab234cef6c1789eca13de065647a6b6f45ce&v=4" 
        alt="Gustavo"/>
      <div>
        <strong>RocketSeat</strong>
        <p>Descrição do repositorio</p>
      </div>
      <FiChevronRight size={20} />
    </a>
    </Repositories>
    </>
    );
}


export default Dashboard;
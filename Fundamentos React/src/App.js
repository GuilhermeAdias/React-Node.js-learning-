import React from 'react';
import './App.css';
import Primeiro from './components/basico/Primeiro';
import ComParametro from './components/basico/ComParametro';
import Fragmento from './components/basico/Fragmento';
import Aleatorio from './components/basico/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basico/Familia';
import FamiliaMembro from './components/basico/FamiliaMembro';
import ListaAlunos from './components/repetição/ListaAlunos';
import ListaProdutos from './components/repetição/ListaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulário/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default () => {
    return (
        <div className='App'>
            <h1>FUNDAMENTOS REACT</h1>

            <div className='Cards'>


                <Card titulo='#13 - Megasena  ' color='#9604C8'>
                    <Mega qtde={8}></Mega>
                </Card>

                <Card titulo='#12 - Componente (Contador)  ' color='#005A16'>
                    <Contador numeroInicial={220}></Contador>
                    {/* <Contador numeroInicial={85}></Contador> */}
                </Card>

                <Card titulo='#11 - Componente Controlado  ' color=' #C70039 '>
                    <Input></Input>
                </Card>

                <Card titulo='#10 - Comunicação Indireta  ' color='#04C81F'>
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo='#9 - Comunicação Direta  ' color='#fa5300 '>
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo='#8 - Renderização Condicional ' color='#A80476'>
                  <ParOuImpar numero={216}></ParOuImpar>
                  <UsuarioInfo usuario={{nome: 'ET. Bilu'}}/>
                  <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                  <UsuarioInfo usuario={{email: 'test@test.com'}}/>
                  <UsuarioInfo usuario={{}}/>
                  <UsuarioInfo />
                </Card>

                <Card titulo='#7 - Lista de Produtos ' color='#0704A8'>
                  <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo='#6 - Repetição' color='#FFC300'>
                  <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo='#5 - Componente com FIlhos' color='#33CCCC'>
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome='Pedro'/>
                        <FamiliaMembro nome='Ana'/>
                        <FamiliaMembro nome='Alberto' />
                    </Familia>
                </Card>
                 
                <Card titulo='#4 - Desafio Aleatorio' color='#660000'>
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo='#3 - Fragmento' color='#00CC66'>
                    <Fragmento />
                </Card>

                <Card titulo='#2 - Com Parametro' color='#FFFF66'>
                    <ComParametro titulo='Situação do Aluno :' subtitulo='Pedro' nota={9.3} />
                </Card>
                
                <Card titulo='#1 - Primeiro Componente' color='#888592'>
                    <Primeiro />
                </Card>

            </div>
        </div>
    );
}
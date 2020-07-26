import React from 'react'
import './App.css'

import First from './components/basics/First'
import Second from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentsList from './components/Iteration/StudentsList'
import ProductList from './components/Iteration/ProductsList'
import OddOrEven from './components/conditional/OddOrEven'
import UserInfo from './components/conditional/UserInfo'
import DirectFather from './components/comunication/DirectFather'
import IndirectFather from './components/comunication/IndirectFather'
import Input from './components/form/Input'
// Quando usamos o export DEFAULT, é possível usar uma função anônima (sem nome)
// export default function (props) {

export default _ =>
    <div className='App'>
        <h1>React Foundations</h1>
        <div className='Cards'>
            <Card title='Controlled Component (input)'color='rgb(140, 70, 170)'>
                <Input />
            </Card>
            <Card title='Indirect Comunication'color='rgb(100, 80, 163)'>
                <IndirectFather />
            </Card>
            <Card title='Direct Comunication'color='rgb(62, 156, 163)'>
                <DirectFather />
            </Card>
            <Card title='Conditional'color='rgb(120, 150, 100)'>
                <OddOrEven number={1}></OddOrEven>
                <OddOrEven number={2}></OddOrEven>
                <br/>
                <UserInfo user={{name:'Louis'}} />
                <UserInfo user={{email:'louis@hamilton.com'}} />
                <UserInfo />
            </Card>
            <Card title='Iteration 2 - Products'color='#BA6611'>
                <ProductList></ProductList>
            </Card>
            <Card title='Iteration 1 - Students'color='#BA72AA'>
                <StudentsList></StudentsList>
            </Card>
            <Card title='With childrens component'color='#BA7260'>
                <Family lastName='Berber'>
                    <FamilyMember name='Luiz' />
                    <FamilyMember name='Pedro' />
                    <FamilyMember name='Renan' />
                </Family>
            </Card>
            <Card title='Random number'color='#EB7260'>
                <Random min={7} max={10}/>
            </Card>
            <Card title='Fragment' color='#29ABA4'>
                <Fragment />
            </Card>
            <Card title='With parameter' color='#3A9AD9'>
            <Second question='The answer to the Ultimate Question of Life, the Universe, and Everything'
                answer={42} />
            </Card>
            <Card title='First Component' color='#354458'>
            <First></First>
            </Card>
        </div>        
    </div>
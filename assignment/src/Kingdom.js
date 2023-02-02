import React from 'react';
import Cat from './class-components/Cat'
import Dog from './class-components/Dog'
import Horse from './class-components/Horse'
import Lion from './class-components/Lion'
import Tiger from './class-components/Tiger'
import Crow from './functional-components/Crow'
import Parrot from './functional-components/Parrot'
import Peacock from './functional-components/Peacock'
import Pigeon from './functional-components/Pigeon'
import Eagle from './functional-components/Eagle'


class Kingdom extends React.Component
{
    render()
    {
        return(<><h1>Animal Kingdom</h1><Cat/><Dog/><Horse/><Lion/><Tiger/><Crow/><Parrot/><Peacock/><Pigeon/><Eagle/></>)
    }
}
export default Kingdom
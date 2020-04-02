import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts'

const ListWrapper = () => (
    <ul className="istWrappper__wrapper">
        
        {twitterAccounts.map(({name, description, image, twitterLink}) => (
            <ListItem 
            name={name}
            description={description}
            image={image}
            link={twitterLink}
        />
        ))}
    </ul>
)

export default ListWrapper;
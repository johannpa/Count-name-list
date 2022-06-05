import React, {useContext} from 'react';
import { MailContext } from '../contexts/MailContext';

const LevelC = () => {
    const messages = useContext(MailContext);
  return (
    <div className='level-c'>
        <h1>Level C</h1>
        <div>
            Level A directly passed {messages.length} messages.
        </div>
    </div>
  )
}

export default LevelC;
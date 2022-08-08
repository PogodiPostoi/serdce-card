import React from 'react';

import Form from '../components/Form'
import CustomCard from '../components/CustomCard'

function CustomCardGrid() {

        const commonTextRecipient = 'Главный подозреваемый - ТЫ!'

        const [customTextRecipient, setCustomTextRecipient] = React.useState('')
        const [customText, setCustomText] = React.useState('')
        const [customTextSender, setCustomTextSender] = React.useState('')

        const onChangeCustomTextRecipient = (event) => {
                setCustomTextRecipient(event.target.value)
        }
        const onChangeCustomText = (event) => {
                setCustomText(event.target.value)
        }
        const onChangeCustomTextSender = (event) => {
                setCustomTextSender(event.target.value)
        }

        return(
                <>
                        <Form 
                                onChangeCustomTextRecipient={onChangeCustomTextRecipient}
                                onChangeCustomText={onChangeCustomText}
                                onChangeCustomTextSender={onChangeCustomTextSender}
                        />
                        <CustomCard 
                                customTextRecipient={customTextRecipient}
                                customText={customText}
                                customTextSender={customTextSender}
                        />
                </>
        );
}

export default CustomCardGrid
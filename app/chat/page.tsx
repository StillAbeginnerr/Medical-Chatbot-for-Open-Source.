'use client'

import { Mistral } from '@mistralai/mistralai';
import { useState } from 'react';

export default async function Chat()
{

// const [context, setContext] = useState('')
// const [switchModel, setSwitchModel] = useState('')

const apiKey = process.env.MISTRAL_API_KEY;
const client = new Mistral({apiKey: apiKey});

const chatResponse = await client.chat.complete({
  model: 'mistral-large-latest',
  messages: [{role: 'user', content: 'What is the India?'}],  
});

if (chatResponse.choices) {
    // Safe to access `choices`
    console.log(chatResponse.choices[0]);
} else {
    console.error('choices is undefined');
}
return (
<>
  
</>
    )
} 
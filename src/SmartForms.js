import React, { useState } from 'react';
import { SmartFormsRenderer, getResponse } from '@aehrc/smart-forms-renderer';

export default function SmartForms({patientId, authorId, questionnaire}) {
 
  const initialResponse = 
  { 
    "resourceType": "QuestionnaireResponse",
    "subject": { "reference": "Patient/" + patientId }, 
    "author": { "reference": "Practitioner/" + authorId },
    "status": "in-progress",
    "item": [
      {
        "linkId": questionnaire.item[0].linkId,
        "text": questionnaire.item[0].text,
        "item": []
      }
    ],
    "questionnaire": questionnaire.url + "|" + questionnaire.version
  }

  const [response, setResponse] = useState(initialResponse)

  return (
    <div>
      <SmartFormsRenderer 
        questionnaire={questionnaire} 
        questionnaireResponse={response} />

      <div style={{margin: '20px'}}>
        <button onClick={() => {
          const response = getResponse();

          // Do something with the questionnaire response
          setResponse(response);
        }}>Save</button>

        <div style={{margin: '20px'}}>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      </div>
    </div>  
  )
}
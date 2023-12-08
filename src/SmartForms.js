import React, { useState } from 'react';
import { SmartFormsRenderer, getResponse, useQuestionnaireResponseStore } from '@aehrc/smart-forms-renderer';

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

  const updatableResponse =
      useQuestionnaireResponseStore.use.updatableResponse();

  return (
    <div>
      <div style={{display: "flex", marginTop: '20px'}}>
        <div style={{minWidth: '750px', width: '60%'}}>
          <SmartFormsRenderer questionnaire={questionnaire} 
                              questionnaireResponse={response} />
          <div style={{margin: '20px'}}>
            <button style={{float: 'right'}} onClick={() => {
              const response = getResponse();
              // Do something with the questionnaire response
              setResponse(response);
            }}>Save</button>
          </div>
        </div>
        <div style={{width: '100px'}}>
          <pre>{JSON.stringify(updatableResponse, null, 2)}</pre>
        </div>
      </div>
    </div>  
  )
}
import React, { useState } from 'react';
import { SmartFormsRenderer, getResponse } from '@aehrc/smart-forms-renderer';

export default function SmartForms() {

  const questionnaire = {
    "resourceType": "Questionnaire",
    "id": "FallsRiskAssessment",
    "meta": {
      "versionId": "25",
      "lastUpdated": "2023-11-22T15:37:57.327+00:00",
      "source": "#D6qUU2GD0ayTCh7p",
      "profile": [
        "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-pop-exp",
        "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-render"
      ]
    },
    "contained": [
      {
        "resourceType": "ValueSet",
        "id": "YesNo",
        "name": "YesNo",
        "title": "Yes/No",
        "status": "draft",
        "description": "Concepts for Yes, No and Not applicable",
        "expansion": {
          "timestamp": "2023-09-01T11:16:50+10:00",
          "contains": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
              "code": "Y",
              "display": "Yes"
            },
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
              "code": "N",
              "display": "No"
            }
          ]
        }
      },
      {
        "resourceType": "ValueSet",
        "id": "Transfer",
        "name": "Transfer",
        "title": "Transfer",
        "status": "draft",
        "description": "Transfer",
        "expansion": {
          "timestamp": "2023-09-01T11:16:50+10:00",
          "contains": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://fhir.medirecords.com/CodeSystem/Transfer",
              "code": "0",
              "display": "Complete Independence and Modified Independence - use of aids to be independent is allowed"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 1
                }
              ],
              "system": "http://fhir.medirecords.com/CodeSystem/Transfer",
              "code": "1",
              "display": "Distant Supervision - one person easily or needs supervision for safety"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://fhir.medirecords.com/CodeSystem/Transfer",
              "code": "2",
              "display": "Close Supervision - one strong skilled helper or two staff; physically can sit"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 3
                }
              ],
              "system": "http://fhir.medirecords.com/CodeSystem/Transfer",
              "code": "3",
              "display": "Unable - no sitting balance, mechanical lift"
            }
          ]
        }
      },
      {
        "resourceType": "ValueSet",
        "id": "Mobility",
        "name": "Mobility",
        "title": "MobilityScore",
        "status": "draft",
        "description": "Mobility Score",
        "expansion": {
          "timestamp": "2023-09-01T11:16:50+10:00",
          "contains": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://fhir.medirecords.com/CodeSystem/Mobility",
              "code": "0",
              "display": "Complete Independence and Modified Independence - may use any aid, e.g. walking stick"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 1
                }
              ],
              "system": "http://fhir.medirecords.com/CodeSystem/Mobility",
              "code": "1",
              "display": "Distant Supervision - walks with help of one person (verbal or physical)"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://fhir.medirecords.com/CodeSystem/Mobility",
              "code": "2",
              "display": "Close Supervision - eyes on and hands ready at all times"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 3
                }
              ],
              "system": "http://fhir.medirecords.com/CodeSystem/Mobility",
              "code": "3",
              "display": "Immobile"
            }
          ]
        }
      }
    ],
    "url": "http://fhir.medirecords.comu/Questionnaire/FallsRiskAssessment",
    "version": "0.1.0",
    "name": "FallsRiskAssessment",
    "title": "Falls Risk Assessment",
    "status": "active",
    "subjectType": [
      "Patient"
    ],
    "date": "2023-11-22",
    "publisher": "MediRecords",
    "item": [
      {
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/variable",
            "valueExpression": {
              "name": "historyscore",
              "language": "text/fhirpath",
              "expression": "iif((item.where(linkId = 'history').children().where(answer.valueCoding.code = 'Y').exists()), 1, 0)"
            }
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/variable",
            "valueExpression": {
              "name": "mentalscore",
              "language": "text/fhirpath",
              "expression": "iif((item.where(linkId = 'mental').children().where(answer.valueCoding.code = 'Y').exists()), 1, 0)"
            }
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/variable",
            "valueExpression": {
              "name": "visionscore",
              "language": "text/fhirpath",
              "expression": "iif((item.where(linkId = 'vision').children().where(answer.valueCoding.code = 'Y').exists()), 1, 0)"
            }
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/variable",
            "valueExpression": {
              "name": "toiletingscore",
              "language": "text/fhirpath",
              "expression": "iif((item.where(linkId = 'toileting').children().where(answer.valueCoding.code = 'Y').exists()), 1, 0)"
            }
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/variable",
            "valueExpression": {
              "name": "transferscore",
              "language": "text/fhirpath",
              "expression": "item.where(linkId = 'transfer').children().where(linkId = '5').answer.valueCoding.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/ordinalValue').valueDecimal"
            }
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/variable",
            "valueExpression": {
              "name": "mobilityscore",
              "language": "text/fhirpath",
              "expression": "item.where(linkId = 'mobility').children().where(linkId = '6').answer.valueCoding.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/ordinalValue').valueDecimal"
            }
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/variable",
            "valueExpression": {
              "name": "riskscore",
              "language": "text/fhirpath",
              "expression": "%mentalscore + %historyscore + %visionscore + %toiletingscore + %transferscore + %mobilityscore"
            }
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/variable",
            "valueExpression": {
              "name": "_lowrisk",
              "language": "text/fhirpath",
              "expression": "iif(%riskscore < 2, true, false)"
            }
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/variable",
            "valueExpression": {
              "name": "_highrisk",
              "language": "text/fhirpath",
              "expression": "iif(%riskscore < 2, false, true)"
            }
          }
        ],
        "linkId": "root",
        "text": "Falls Risk Assessment",
        "type": "group",
        "item": [
          {
            "linkId": "history",
            "text": "1. History of Falls",
            "type": "group",
            "item": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "horizontal"
                  }
                ],
                "linkId": "1.1",
                "text": "Did the patient present to hospital with a fall or have they had a fall since admission?",
                "type": "choice",
                "repeats": false,
                "answerValueSet": "#YesNo"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "horizontal"
                  }
                ],
                "linkId": "1.2",
                "text": "Has the patient fallen in the last 6 months?",
                "type": "choice",
                "enableWhen": [
                  {
                    "question": "1.1",
                    "operator": "=",
                    "answerCoding": {
                      "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
                      "code": "N",
                      "display": "No"
                    }
                  }
                ],
                "repeats": false,
                "answerValueSet": "#YesNo"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",
                    "valueExpression": {
                      "language": "text/fhirpath",
                      "expression": "%historyscore"
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",
                    "valueBoolean": true
                  }
                ],
                "linkId": "historyscore",
                "text": "Score",
                "type": "integer"
              }
            ]
          },
          {
            "linkId": "mental",
            "text": "2. Mental Status",
            "type": "group",
            "item": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "horizontal"
                  }
                ],
                "linkId": "2.1",
                "text": "Is the patient confused?",
                "type": "choice",
                "answerValueSet": "#YesNo"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "horizontal"
                  }
                ],
                "linkId": "2.2",
                "text": "Is the patient disoriented?",
                "type": "choice",
                "answerValueSet": "#YesNo"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "horizontal"
                  }
                ],
                "linkId": "2.3",
                "text": "Is the patient agitated?",
                "type": "choice",
                "answerValueSet": "#YesNo"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",
                    "valueExpression": {
                      "language": "text/fhirpath",
                      "expression": "%mentalscore"
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",
                    "valueBoolean": true
                  }
                ],
                "linkId": "mentalscore",
                "text": "Score",
                "type": "integer"
              }
            ]
          },
          {
            "linkId": "vision",
            "text": "3. Vision",
            "type": "group",
            "item": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "horizontal"
                  }
                ],
                "linkId": "3.1",
                "text": "Does the patient require eyeglasses continually?",
                "type": "choice",
                "answerValueSet": "#YesNo"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "horizontal"
                  }
                ],
                "linkId": "3.2",
                "text": "Does the patient report blurred vision?",
                "type": "choice",
                "answerValueSet": "#YesNo"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "horizontal"
                  }
                ],
                "linkId": "2.3",
                "text": "Does the patient have glaucoma, cataracts or macular degeneration?",
                "type": "choice",
                "answerValueSet": "#YesNo"
              }
            ]
          },
          {
            "linkId": "toileting",
            "text": "4. Toileting",
            "type": "group",
            "item": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "horizontal"
                  }
                ],
                "linkId": "4.1",
                "text": "Are there any alterations in urination?",
                "type": "choice",
                "answerValueSet": "#YesNo"
              }
            ]
          },
          {
            "linkId": "transfer",
            "text": "5. Transfer Score",
            "type": "group",
            "item": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "vertical"
                  }
                ],
                "linkId": "5",
                "text": "Bed to chair and back",
                "type": "choice",
                "answerValueSet": "#Transfer"
              }
            ]
          },
          {
            "linkId": "mobility",
            "text": "6. Mobility Score",
            "type": "group",
            "item": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://hl7.org/fhir/questionnaire-item-control",
                          "code": "radio-button"
                        }
                      ]
                    }
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                    "valueCode": "vertical"
                  }
                ],
                "linkId": "6",
                "text": "x",
                "type": "choice",
                "answerValueSet": "#Mobility"
              }
            ]
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",
                "valueExpression": {
                  "language": "text/fhirpath",
                  "expression": "%riskscore"
                }
              }
            ],
            "linkId": "fallsscore",
            "text": "Falls Risk Score",
            "type": "integer",
            "readOnly": true
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",
                "valueExpression": {
                  "language": "text/fhirpath",
                  "expression": "%risk"
                }
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/questionnaire-item-control",
                      "code": "check-box"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                "valueCode": "horizontal"
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",
                "valueBoolean": true
              }
            ],
            "linkId": "fallsrisk",
            "text": "Risk",
            "type": "choice",
            "readOnly": true,
            "answerOption": [
              {
                "valueCoding": {
                  "system": "http://fhir.medirecords.com/CodeSystem/Risk",
                  "code": "low",
                  "display": "Low Risk (Score < 2)"
                }
              },
              {
                "valueCoding": {
                  "system": "http://fhir.medirecords.com/CodeSystem/Risk",
                  "code": "high",
                  "display": "High Risk (Score 2 or above)"
                }
              }
            ]
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",
                "valueExpression": {
                  "language": "text/fhirpath",
                  "expression": "iif(%riskscore < 2, 'Low Risk (Score < 2)', 'High Risk (Score 2 or above)')"
                }
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/questionnaire-item-control",
                      "code": "check-box"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation",
                "valueCode": "horizontal"
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",
                "valueBoolean": true
              }
            ],
            "linkId": "fallsrisk",
            "text": "Risk",
            "type": "choice",
            "readOnly": false,
            "answerOption": [
              {
                "valueString": "Low Risk (Score < 2)"
              },
              {
                "valueString": "High Risk (Score 2 or above)"
              }
            ]
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",
                "valueExpression": {
                  "language": "text/fhirpath",
                  "expression": "%_lowrisk"
                }
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",
                "valueBoolean": true
              }
            ],
            "linkId": "lowrisk",
            "text": "Low Risk (Score < 2)",
            "type": "boolean",
            "readOnly": true
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",
                "valueExpression": {
                  "language": "text/fhirpath",
                  "expression": "%_lowrisk.not()"
                }
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",
                "valueBoolean": true
              }
            ],
            "linkId": "highrisk",
            "text": "High Risk (Score 2 or above)",
            "type": "boolean",
            "readOnly": true
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",
                "valueExpression": {
                  "language": "text/fhirpath",
                  "expression": "%risk2"
                }
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",
                "valueBoolean": true
              }
            ],
            "linkId": "risk-display",
            "text": "Risk",
            "type": "string",
            "readOnly": true
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression",
                "valueExpression": {
                  "language": "text/fhirpath",
                  "expression": "%riskscore < 2"
                }
              }
            ],
            "linkId": "risk-display",
            "text": "Low Risk (Score < 2)",
            "type": "display"
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression",
                "valueExpression": {
                  "language": "text/fhirpath",
                  "expression": "%riskscore >= 2"
                }
              }
            ],
            "linkId": "risk-display",
            "text": "High Risk (Score 2 or above)",
            "type": "display"
          }
        ]
      }
    ]
  };

  const patientId = 12345;
  const authorId = 67890;

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
      <SmartFormsRenderer questionnaire={questionnaire} 
        questionnaireResponse={response ?? undefined}/>

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


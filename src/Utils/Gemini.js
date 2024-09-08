/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 * 
 * i making an quiz app so i want a object so that i can show questions to user make sure that object in this format 
    { question: "" , options:{ A:"", B:"", C:"",D:""}, ans:"",explanationInDetails:"" } with 5 questions of javascript also make sure give me only object no other text 
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    safetySettings
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  async function run(topic,questionCount) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "i making an quiz app so i want a object so that i can show questions to user make sure that object in this format \n{ question: \"\" , options:{ A:\"\", B:\"\", C:\"\",D:\"\"}, ans:\"\" } with 5 questions of javascript also make sure give me only object no other text "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```javascript\nconst questions = [\n    {\n        question: \"What is the correct syntax to declare a JavaScript variable?\",\n        options: {\n            A: \"var variableName = value;\",\n            B: \"variableName = value;\",\n            C: \"let variableName = value;\",\n            D: \"All of the above\"\n        },\n        ans: \"D\"\n    },\n    {\n        question: \"What does the 'typeof' operator return?\",\n        options: {\n            A: \"The data type of a variable\",\n            B: \"The value of a variable\",\n            C: \"The memory address of a variable\",\n            D: \"None of the above\"\n        },\n        ans: \"A\"\n    },\n    {\n        question: \"What is the purpose of the 'this' keyword in JavaScript?\",\n        options: {\n            A: \"To refer to the current object\",\n            B: \"To declare a variable\",\n            C: \"To define a function\",\n            D: \"To call a function\"\n        },\n        ans: \"A\"\n    },\n    {\n        question: \"What is the difference between '== ' and '===' in JavaScript?\",\n        options: {\n            A: \"'==' checks for equality, '===' checks for strict equality\",\n            B: \"'===' checks for equality, '==' checks for strict equality\",\n            C: \"There is no difference\",\n            D: \"They are both the same\"\n        },\n        ans: \"A\"\n    },\n    {\n        question: \"Which of the following is a valid JavaScript array?\",\n        options: {\n            A: \"[1, 2, 3]\",\n            B: \"{1, 2, 3}\",\n            C: \"1, 2, 3\",\n            D: \"None of the above\"\n        },\n        ans: \"A\"\n    }\n];\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(`i making an quiz app so i want a object so that i can show questions to user make sure that object in this format 
    { question: "" , options:{A:"", B:"", C:"",D:""}, ans:"",explanationInDetails:"" } with ${questionCount} questions of ${topic} also make sure give me only object, and Importantly don't use common questions`);
    // console.log(result.response.text());
    return result.response.text()
  }
  
  export default run;
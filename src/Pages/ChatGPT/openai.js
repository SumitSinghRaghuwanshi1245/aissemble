


// const {Configuration, OpenAIApi} = require("openai");
// const configuration = new Configuration({
//     apiKey : "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"
// })

// const openai = new OpenAIApi(configuration);

// export async function sendMsgToOpenAI(message){
//     const res = await openai.createCompletion({
//         model : "text-davinci-003",
//         prompt : message,
//         temperature : 0.7,
//         max_tokens : 256, 
//         top_p : 1,
//         frequency_penalty : 0,
//         presence_penalty : 0
//     })
//     return res.data.choices[0].text;
// }
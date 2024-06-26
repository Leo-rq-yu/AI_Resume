const ChatbotPage = () => {
//   const htmlContent = `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Chatbot Webpage</title>
//       <style>
//           body {
//               font-family: Arial, sans-serif;
//               background-color: #f4f4f4;
//               text-align: center;
//           }
  
//           #chat-container {
//               margin: auto;
//               width: 50%;
//               height: 300px;
//               overflow-y: scroll;
//               border: 1px solid #ccc;
//               padding: 10px;
//               background-color: white;
//           }
  
//           button {
//               margin: 10px;
//               padding: 10px 20px;
//               font-size: 16px;
//               cursor: pointer;
//           }
//       </style>
//   </head>
//   <body>
//       <div id="chat-container"></div>
//       <button onclick="startVoiceChat()">开始语音聊天</button>
//       <button onclick="restartVoiceChat()">重新开始语音聊天</button>
  
//       <script>
//           var questions_and_answers = [
//               {"question": "首先，可以告诉我你的中文姓名吗？", "answer": ""},
//               {"question": "好的，请问你的年龄是多少？", "answer": ""},
//               {"question": "接下来，你目前所在的城市是哪里？", "answer": ""},
//               {"question": "了解，接下来，请提供你的电话号码。", "answer": ""},
// //   <!--            {"question": "了解，接下来，请提供你的电子邮件地址。", "answer": ""},-->
// //   <!--            {"question": "了解，接下来，请提供你的微信号。", "answer": ""},-->
// //   <!--            {"question": "请问你的毕业院校是哪里？", "answer": ""},-->
// //   <!--            {"question": "请问你的毕业时间是哪一年？", "answer": ""},-->
// //   <!--            {"question": "请问你的专业是什么？", "answer": ""},-->
// //   <!--            {"question": "请问你的学历是什么？", "answer": ""},-->
// //   <!--            {"question": "请问你的成绩与专业排名是多少？", "answer": ""},-->
// //   <!--            {"question": "请问你的核心课程有哪些？", "answer": ""},-->
// //   <!--            {"question": "请问你的工作经历是什么？", "answer": ""},-->
// //   <!--            {"question": "请问你的项目经历是什么？", "answer": ""},-->
// //   <!--            {"question": "请问你的专业技能是什么？", "answer": ""}-->
//           ];
//           var currentQuestionIndex = 0;
  
//           function startVoiceChat() {
//               if (currentQuestionIndex < questions_and_answers.length) {
//                   var question = questions_and_answers[currentQuestionIndex].question;
//                   document.getElementById('chat-container').innerHTML += '<p>Question: ' + question + '</p>';
  
//                   var recognition = new webkitSpeechRecognition(); // for Chrome
//                   recognition.lang = 'zh-CN';
  
//                   recognition.onresult = function(event) {
//                       var userResponse = event.results[0][0].transcript;
//                       questions_and_answers[currentQuestionIndex].answer = userResponse;
//                       document.getElementById('chat-container').innerHTML += '<p>Your Answer: ' + userResponse + '</p>';
  
//                       if (currentQuestionIndex < questions_and_answers.length - 1) {
//                           currentQuestionIndex++;
//                           startVoiceChat();
//                       } else {
//                           showResults();
//                           disableVoiceChat();
//                       }
//                   };
  
//                   recognition.start();
//               }
//           }
  
//           function showResults() {
//               document.getElementById('chat-container').innerHTML += '<p>Results: ' + JSON.stringify(questions_and_answers) + '</p>';
//           }
  
//           function restartVoiceChat() {
//               currentQuestionIndex = 0;
//               questions_and_answers.forEach(function(qa) { qa.answer = ""; });
//               document.getElementById('chat-container').innerHTML = '';
//               enableVoiceChat();
//               startVoiceChat();
//           }
  
//           function enableVoiceChat() {
//               document.querySelector('button[onclick="startVoiceChat"]').disabled = false;
//           }
  
//           function disableVoiceChat() {
//               document.querySelector('button[onclick="startVoiceChat"]').disabled = true;
//           }
//       </script>
//   </body>
//   </html>`;

//   return <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
return <iframe src="http://localhost:3000/chatbot.html" width="100%" height="100%"></iframe>
};

export default ChatbotPage;
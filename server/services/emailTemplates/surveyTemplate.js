const keys=require('../../config/keys');

module.exports = (survey) =>{
  return `
   <html>
   <body>
   <div style="text-align:center;">
   <h3>I'd like ur input!</h3>
    <p>Please ans:</p>
    <p>${survey.body}</p>
    <div>
    <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
    </div>
    <div>
    <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
    </div>
   </div>
   </body>
   </html>
  `;
};
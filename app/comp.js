allmcq = [
    {
      id: "1",
      question: "clean home",
      options: ["person",
                "mope",
                "water",
                "all"],
      correctAns:"all",
    },
  ];
  function updateUiList() {      
    for (let mcq of allmcq) {
      const event = MakeQuestionList(mcq);
      const app =document.querySelector("#app")
      app.appendChild(event)
    }
  }

{/* <div class="container">
        <h1>Quiz</h1>
        <div id="question">
            <p>What is the capital of France?</p>
        </div>
        <form id="options">
            <label>
                <input type="radio" name="answer" value="Paris"> Paris
            </label>
            <label>
                <input type="radio" name="answer" value="London"> London
            </label>
            <label>
                <input type="radio" name="answer" value="Berlin"> Berlin
            </label>
            <label>
                <input type="radio" name="answer" value="Madrid"> Madrid
            </label>
            <input type="submit" name="" id="">
        </form>
        <div id="result"></div>
    </div> */}


  function MakeQuestionList(mcq) {
      
      const div = document.createElement("div");
      div.setAttribute("id", `question-${mcq["id"]}`);
        
      const questionDiv = document.createElement("div")
      questionDiv.setAttribute("class", "question")

      const questionParagraph = document.createElement("p");
      questionParagraph.textContent = mcq["question"];
      questionDiv.appendChild(questionParagraph);

      const form =document.createElement("form")
      form.setAttribute("id","options")
    
      for(let i=0; i<mcq.options.length;i++){
        const label = document.createElement("label")

        const inputRadio = document.createElement("input")
        inputRadio.setAttribute("type", "radio")
        inputRadio.setAttribute("name", `answer-${mcq["id"]}`)
        inputRadio.value= mcq.options[i];

        label.appendChild(inputRadio);
        label.appendChild(document.createTextNode( mcq.options[i]));
         form.appendChild(label);
      }

      const resultdiv = document.createElement("div")
      resultdiv.setAttribute("id", "result")

      div.appendChild(questionDiv);
      div.appendChild(form);
      div.appendChild(resultdiv);

      return div;
}

updateUiList();
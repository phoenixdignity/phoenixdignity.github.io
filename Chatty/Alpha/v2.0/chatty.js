//A Function to run the chatbot
function chatty(choose, CalledFromSearch) {
    if (CalledFromSearch == true) {
        choose = document.getElementById("option-typer").value.toLowerCase();
        choose = choose.split(' ').reduce((a,c)=>(a.push(autoCorrect(c)),a),[]).join(' ')
    }
    if (choose === 'Utli') {
        append(new TextClass('Utilitys').createClientSide())
        append(new OptionClass(["Form's Link", "Policy PDF", "About Me"], ["chatty('FL')", "chatty('PDF')", "chatty('About_me')"]));
    } else if (choose === 'About_me') {
        append(new TextClass(`\nHello there, I am chatty! The purpose of my life is to make your life easier.
My creator found it a bit hard to navigate through fsapps so he made me.
Now you can get all the basic school information like the teachers' timetable, or the canteen menu or  the bus routes just by asking me.
I am happy to help you - don't get lost in the myriad of fsapps, use me instead!&#128515;
`).createBotSide());
        run()
    } else if (choose === 'FL' || choose === "form's link") {
        append(new TextClass("Form's Link").createClientSide())
        append(new OptionClass(["Exigency reporting form", "Dressing Feedback to Individual", "PYP School Counselor Intervention Form", "Event Feedback form", "Field Trip / Outstation Event Requisition Form", "Event Requisition/Students Calendar Entry Form 2019-20"], ["window.open('https://bit.ly/2TRb5qG');run()", "window.open('https://bit.ly/37wh2NC');run()", "window.open('https://bit.ly/36nKyUp');run()", "window.open('https://bit.ly/3awMWMd');run()", "window.open('https://bit.ly/2Gcm2LB');run()", "window.open('http://bit.ly/3c8YMNi');run()"]));
    } else if (choose === 'PDF' || choose === 'pdf') {
        generatePDF();
    } else if (choose === 'date' || choose === "time" || choose === 'day') {
        append(new TextClass('Date And Time').createClientSide())
        append(new TextClass(new Date()).createBotSide());
        run();
    } else if (choose === 'CL' || choose === 'contact list') {
        append(new TextClass('Contact List').createClientSide());
        window.open('https://bit.ly/2Nl0a4m');
        append(new TextClass('opened Contact List').createBotSide());
        run()
    } else if (choose === "lunch" || choose === 'menu') {
        changeall('#option-typer', 'disabled', true);
        changeall('#option-typer', 'placeholder', 'choose from options above');
        append(new TextClass('Menu').createClientSide());
        append(new OptionClass(['Today', 'This month'], ['finder("Menu Of The Day")', 'finder("Menu Of The Month")']));
        //print2("What do you you want", ["lunch menu","Today's Special"],['menu("menuOfMonth")','menu("todaysSpecial")'])
    } else if (choose === "TS" || choose === "today's special") {
        append(new TextClass("Today's Special").createClientSide());
        finder("Today's Special");
        run();
    } else if (choose === "TR" || choose === "transport route") {
        append(new TextClass("Transport Route").createClientSide());
        //Transport route
        var obj = [];
        for (var i = 0; i != route.length; i++) {
            obj.push(route[i]["stopName"]);
        }
        append(new dropdown(obj));
    } else {
        console.info('The command term ' + choose + ' is not defined')
    }
}

const generatePDF = (incatergory = null) => {
    var names = [];
    var functions = [];
    if(incatergory == null){
        append(new TextClass("Policy PDF").createClientSide());
        for(var i = 0; i < PDF.length;i++){
            names.push(PDF[i].CatergoryName);
            functions.push(`generatePDF('${PDF[i].CatergoryName}')`)
        }
    }
    else{
        append(new TextClass(`Policy PDF for ${incatergory}`).createClientSide());
        for(var i = 0; i < PDF.length;i++){
            if (incatergory.localeCompare(PDF[i].CatergoryName) == '0'){
                for(var j = 0; j < PDF[i].CatergoryContent.length;j++){
                    names.push(PDF[i].CatergoryContent[j].Name)
                    functions.push(`openurl('${PDF[i].CatergoryContent[j].Link}')`)
                }
            }
        }
    }
    append(new OptionClass(names,functions));
}
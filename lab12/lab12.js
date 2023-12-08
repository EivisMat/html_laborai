function handleFormData(){
    // Gather all the data
    const Student = {
        userName: document.getElementById("name-input").value,
        userSurname: document.getElementById("surname-input").value,
        userCode: document.getElementById("code-input").value,
        userMarks: []
    }
    const marks = document.querySelectorAll(".marks-input");
    marks.forEach((mark) => Student.userMarks.push(parseInt(mark.value)));

    // Student code check
    // Cannot contain: symbols, letters
    // Must be: 8 characters long
    if(Student.userCode.length !== 8) {
        alert("Studento pažymėjimo kodas netinkamo ilgio! (Turi būti 8 simboliai)");
        return;
    } else {
        const regex = /^\d+$/;
        if(regex.test(Student.userCode) == false) {
            alert("Studento pažymėjimo kodas turi neleidžiamus simbolius ir/arba raides! (Galimi tik skaičiai)");
            return;
        }
    }

    // Check if marks are valid (cannot be negative or above 10)
    for(let i=0;i<5;i++){
        if (Student.userMarks[i] < 0) {
            alert("Pažymys negali būti neigiamas!");
            return;
        } else if(Student.userMarks[i] > 10) {
            alert("Pažymys negali būti daugiau negu 10!");
            return;
        }
    }

    // Checks passed, set marks color:

    // First option - set color by lowest mark
    // const min = Math.min(...Student.userMarks);
    // if (min <= 4) {
    //     document.getElementById("marks-display").style.color = "red";
    // } else if(min <= 8) {
    //     document.getElementById("marks-display").style.color = "orange";
    // } else {
    //     document.getElementById("marks-display").style.color = "limegreen";
    // }

    // Second option - set each mark's colour individually
    // for(let i=0; i<5; i++){
    //     val = parseInt(marks[i].value);
    //     if (val <= 4) {
    //         marks[i].style.color = "red";
    //     } else if(val <= 8) {
    //         marks[i].style.color = "orange";
    //     } else {
    //         marks[i].style.color = "limegreen";
    //     }
    // }      

    // Third option - set color by average
    let sum = 0;
    Student.userMarks.forEach((num) => sum+=num);
    const average = sum/Student.userMarks.length;
    console.log(average);
    if (average <= 4) {
        document.getElementById("marks-display").style.color="red";
    } else if(average <= 8) {
        document.getElementById("marks-display").style.color="orange";
    } else {
        document.getElementById("marks-display").style.color="limegreen";
    }

    // Display
    console.log(Student);
    renderResult(Student);
}

function renderResult(Student){
    document.getElementById("name-display").innerText = `Studento vardas: ${Student.userName}`;
    document.getElementById("surname-display").innerText = `Studento pavardė: ${Student.userSurname}`;
    document.getElementById("code-display").innerText = `Studento kodas: ${Student.userCode}`;
    document.getElementById("marks-display").innerText = `Studento pažymiai: ${Student.userMarks.join(', ')}`;
    document.getElementById("best-mark").innerText = `Geriausias ${Student.userName} ${Student.userSurname}(${Student.userCode}) pažymys: ${Math.max(...Student.userMarks)}`;
    document.getElementById("worst-mark").innerText = `Blogiausias : ${Math.min(...Student.userMarks)}`;
    return;
}

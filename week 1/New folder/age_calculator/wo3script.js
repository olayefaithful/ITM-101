function calculateAge() {
    const birthdayInput = document.getElementById('birthday').value;
    
    if (!birthdayInput) {
        alert("Please enter a valid date.");
        return;
    }
    
    const birthday = new Date(birthdayInput);
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();
    const monthDifference = today.getMonth() - birthday.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    document.getElementById('result').innerHTML = `You are ${age} years old.`;
}

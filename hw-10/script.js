
  const users = [];
  const myForm = document.getElementById('myForm');
  myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstNameValue = document.getElementById('firstName').value;
    const lastNameValue = document.getElementById('lastName').value;
    const ageValue = document.getElementById('age').value;
    const user = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      age: ageValue,
    };

    users.push(user);
    console.log('Массив users:', users);
    myForm.reset();
  });
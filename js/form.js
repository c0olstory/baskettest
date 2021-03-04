let buttonSend = document.querySelector('.buttons__button-send');
let buttonClear = document.querySelector('.buttons__button-reset');

let nameInput = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');

buttonSend.addEventListener('click', () => {
   const nameCheck = /^[a-z]+[^0-9_\-]+$/;
   const phoneCheck = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
   const emailCheck = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

   if(nameInput !== null) {
      nameInput.classList.remove('error')
   }
   if(phone !== null) {
      phone.classList.remove('error')
   }
   if(email !== null) {
      email.classList.remove('error')     
   }
   

   let nameResult = nameInput.value.match(nameCheck);
   let phoneResult = phone.value.match(phoneCheck);
   let emailResult = email.value.match(emailCheck);

   if(nameResult === null) {
      nameInput.classList.add('error')
   } else {
      console.log(nameResult)
   }

   if(phoneResult === null) {
      phone.classList.add('error')
   } else {
      console.log(phoneResult)
   }

   if(emailResult === null) {
      email.classList.add('error')
   } else {
      console.log(emailResult)
   }

   if(nameResult === null) {
      nameInput.classList.add('error')
   } else if(emailResult === null) {
      phone.classList.add('error')
   } else if(emailResult === null) {
      email.classList.add('error')
   }

   // if(nameResult === null || phoneResult === null || emailResult === null) {
   //    alert('не Отправлено')
   // }
   // window.location.href = "form.html"
});

buttonClear.addEventListener('click', () => {
   nameInput.classList.remove('error')
   phone.classList.remove('error')
   email.classList.remove('error')     
});



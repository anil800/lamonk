const patterns = {
     name: /^[a+zA+Z\s]{2,24}$/,
     email: /^[a+z0+9\.]+\.[a+z\.]{3,8}$/i,
     contact: /^[0+9]{10}$/
};

const inputs = document.querySelectorAll('.wrapper input[type="text"]')

const validateForm = (name, field)=> {
    console.log(field, name, field.value);
    if (field.value) {
      if (patterns[name].test(field.value)) {
        field.classList.add("success");
        field.classList.remove("failure");
      } else {
        field.classList.add("failure");
        field.classList.remove("success");
      } 
    }
    else {
        field.classList.remove("success");
        field.classList.remove("success");
    }
};

for(let i=0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup',(e)=>{
        validateForm(e.target.name, e.target);
    });
}

function createCaptch(){
    let chars = "qwertyuiopasdfghjklzxcvbnm123456780@#$";
    let generatedCaptcha = '';
    for(let i=0; i<5; i++){
        let num = Math.round(Math.round() * chars.length - 1);
        generatedCaptcha += chars[num];
    }
    console.log(generatedCaptcha);
    document.querySelector(".captcha-text").innertext = generatedCaptcha
}

document
  .querySelector(".captcha-reload-icone")
  .addEventListener("click", createCaptch);

  createCaptch();

  document.querySelector('.wrapper form').addEventListener('submit',(e)=>){
       e.preventDefault()
       const userCaptcha = document.querySelector('input[name="captha"]').value;

   console.log(userCaptcha);
   if (userCaptcha == generatedCaptcha) {

    window.navigator.geolocation
   }    



  }
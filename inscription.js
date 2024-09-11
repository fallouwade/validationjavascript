 
// let form = document.querySelector('#form');
// console.log(form)
// // Vérification de l'adreese email  valide pour l'inscription

// console.log(inscri_email)
//  inscri_email.addEventListener('change', function () {
//   verifi_email (this)
  
//  });

//  function verifi_email(inputemail){
//   console.log("wade")
//  		let emailreg=new RegExp('[a-z0-9._-]+@gmail.com');
//         let test= emailreg.test(inputemail.value);
//         console.log(test);
   
//         let small= inputemail.nextElementSibling;
//         if (test) {
//         	small.innerHTML="Adresse E-mail valide";
//           small.classList.remove('text-danger')
//         	small.classList.add('text-success');
//               return true
        	
//         }
//         else{
//         	small.innerHTML="Adresse E-mail invalide";
//           small.classList.remove('text-success');
//         	small.classList.add('text-danger');
//               return false
//         }
        
//  }


//  // Vérification du numéro telephone  valide pour l'inscription

//  form.inscri_telephone.addEventListener('change', function () {
//     numero (this)
    
//  });

//   function numero(inputtelephone){
//     console.log("wade fall")
//        var regex = /^(77|78|70|76|75|33)\d{7}$/;
//       let test1 = regex.test(inputtelephone.value);
//          let small= inputtelephone.nextElementSibling;
//         if (test1) {
//             small.innerHTML="Adresse E-mail valide";
//             small.classList.remove('text-danger')
//             small.classList.add('text-success');
//               return true
            
//         }
//         else{
//             small.innerHTML="Adresse E-mail invalide";
//             small.classList.remove('text-success');
//             small.classList.add('text-danger');
//               return false
//         }
//  }
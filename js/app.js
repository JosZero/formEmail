 //variables
const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const message = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');
const resetBtn = document.querySelector('#resetBtn');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 eventListener();
 function eventListener(){
      document.addEventListener('DOMContentLoaded',iniciarApp);

      email.addEventListener('blur',validarFormulario);
      asunto.addEventListener('blur',validarFormulario);
      message.addEventListener('blur',validarFormulario);

      //reinicia el formulario
      resetBtn.addEventListener('click',resetForm);
      formulario.addEventListener('submit',enviarEmail);
 }

 function iniciarApp(){
      console.log("iniciando...");
      btnEnviar.disabled = true;
      btnEnviar.classList.add('cursor-not-allowed','opacity-50');
 }

 function validarFormulario(e){
     
      
     if(e.target.value.length > 0){
          //elimina los errores
          const error = document.querySelector('p.error');
          if(error){
               error.remove();
          }
          

          //console.log("aaaaaaaaaa");
          e.target.classList.remove('border' ,'border-red-500');
          e.target.classList.add('border' ,'border-green-500');
     }else{
            // e.target.style.borderBottomColor = 'red';
            e.target.classList.remove('border' ,'border-green-500');
            e.target.classList.add('border' ,'border-red-500');
            mostrarError('Todos los campos son obligatorios');
     }
     if(e.target.type === 'email'){
          //buscar el @ en toda la cadena
          const result = e.target.value.indexOf('@');
          if(er.test(e.target.value)){

               const error = document.querySelector('p.error');
               if(error){
                   
                    error.remove();
               }
               
               e.target.classList.remove('border' ,'border-red-500');
               e.target.classList.add('border' ,'border-green-500');

               console.log('El correo es valido');
          }else{
               e.target.classList.remove('border' ,'border-green-500');
               e.target.classList.add('border' ,'border-red-500');
               mostrarError("email no valido");
          }
          //console.log(result);
     }

     if(er.test(email.value) && asunto.value !== '' && message.value !== ''){
          console.log("boton avilitado");
          btnEnviar.disabled = false;
          btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
     }else{
          console.log("debe llenar todos los compos");
     }
 }

 function mostrarError(message){
      const messageError = document.createElement('p');
      messageError.textContent = message;
      messageError.classList.add('border','border-red-500','background-color-100','text-red-500','p-3','mt-5','text-center','error');

      const errores = document.querySelectorAll('.error');
      if(errores.length === 0){
            formulario.appendChild(messageError);
      }

      
 }

 function enviarEmail(e){
     e.preventDefault();

     //mostrar el espinar
     const sppiner = document.querySelector("#spinner");
     sppiner.style.display = "flex";

     //setTimeOut
     //  ocultar spinner y ocultar mensaje
     setTimeout(()=>{
          console.log("esperar....");
          sppiner.style.display = "none";
          //mensaje de envio correctamente
          const parrafo = document.createElement('p');
          parrafo.textContent= "El mensaje se envio correctamente";
          parrafo.classList.add('text-center','my-10' ,'bg-green-500');
          formulario.insertBefore(parrafo,sppiner);
          setTimeout(()=>{
               parrafo.remove();
               resetForm();
          },3000);
     },3000);
 }

 function resetForm(){
     formulario.reset();
     iniciarApp();
 }

//  mejorar validaciones con vanderas  
// manejo de class de css y spinner implemetacion 
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('txtNombre');
const email= document.getElementById('txtemail');
const asunto = document.getElementById('txtasunto');
const mensaje = document.getElementById('txtmensaje');
formulario.addEventListener("submit", e=>{
	e.preventDefault();
	validarInputs();
})



const setError = (element, message) =>{
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
};


const setSuccess = element =>{
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};

const isValidEmail = email =>{
	const re =/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validarInputs = () =>{
	const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
	const asuntoValue = asunto.value.trim();
	const mensajeValue = mensaje.value.trim();
    
	if(nombreValue === ''){
		setError(nombre, 'El nombre es obligatorio');
	}
	else{
		setSuccess(nombre);
	}
    if(emailValue === ''){
		setError(email, 'El email es obligatorio');
	}
	else if(!isValidEmail(emailValue)){
		setError(email,'Coloque un email valido'); 
	}
    else{
		setSuccess(email);
	}
    if(asuntoValue === ''){
		setError(asunto, 'El asunto es obligatorio');
	}
	else{
		setSuccess(asunto);
	}
    if(mensajeValue === ''){
		setError(mensaje, 'Este campo es obligatorio');
	}
	else{
		setSuccess(mensaje);
	}	
}	
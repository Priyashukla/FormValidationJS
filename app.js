var email=0;
var name=0;
var age=0;
var photo=0;
 
 var form=document.getElementById('exampleForm');

 function validateemail()
 {
 	let inputemail=form.inputemail.value;
 	let emailvalidationmsg=document.getElementById('emailvalidationmsg');
    if(inputemail)
    {
    	if(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(inputemail))
    	{
    		emailvalidationmsg.textContent="Valid Email";
    		emailvalidationmsg.classList.remove('text-danger');
    		emailvalidationmsg.classList.add('text-success');
    		email=1;
    	}
    	else
    	{
    		emailvalidationmsg.textContent="Invalid Email";
    		emailvalidationmsg.classList.remove('text-success');
    		emailvalidationmsg.classList.add('text-danger');
    		email=0;
    		
    	}
    }
    else
    {
    	emailvalidationmsg.textContent="Email cannot be empty";
    	emailvalidationmsg.classList.remove('text-success');
    		emailvalidationmsg.classList.add('text-danger');
    		email=0;
    } 	
 }

 function validatename()
 {
 	let inputname=form.inputname.value;
 	let namevalidationmsg=document.getElementById('namevalidationmsg');
 	if(inputname)
 	{
 	if(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(inputname))
 	{
      namevalidationmsg.textContent="valid Name";
      namevalidationmsg.classList.remove('text-danger');
      namevalidationmsg.classList.add('text-success');
      name=1;
 	}
 	else
 	{
 		namevalidationmsg.textContent="Please type the name";
 		namevalidationmsg.classList.remove('text-success');
 		namevalidationmsg.classList.add('text-danger');
 		name=0;

 	}

 	}
 	else
 	{
 		namevalidationmsg.textContent="Please type the name";
 		namevalidationmsg.classList.remove('text-success');
 		namevalidationmsg.classList.add('text-danger');
 		name=0;
 	}
 }
 function validateage()
 {
let inputage=form.inputage.value;
 	let agevalidationmsg=document.getElementById('agevalidationmsg');
 	if(inputage)
 	{
 	if(inputage >= 18)
 	{
      agevalidationmsg.textContent="valid Age";
      agevalidationmsg.classList.remove('text-danger');
      agevalidationmsg.classList.add('text-success');
      age=1;
 	}
 	else
 	{
 		agevalidationmsg.textContent="Please enter age";
 		agevalidationmsg.classList.remove('text-success');
 		agevalidationmsg.classList.add('text-danger');
 		age=0;

 	}

 	}
 	else
 	{
 		agevalidationmsg.textContent="Please enter age";
 		agevalidationmsg.classList.remove('text-success');
 		agevalidationmsg.classList.add('text-danger');
 		age=0;
 	}
 }
function validatephoto(){
 let image=form.photo.files[0];
 	let photovalidationmsg=document.getElementById('photovalidationmsg');
 	if(image)
 	{
 	if(image.type='image/jpeg')
 	{
      photovalidationmsg.textContent="valid Image";
      photovalidationmsg.classList.remove('text-danger');
      photovalidationmsg.classList.add('text-success');
      photo=1;
 	}
 	else
 	{
 		photovalidationmsg.textContent="Invalid Image";
 		photovalidationmsg.classList.remove('text-success');
 		photovalidationmsg.classList.add('text-danger');
 		photo=0;

 	}

 	}
 	else
 	{
 		photovalidationmsg.textContent="Invalid Image";
 		photovalidationmsg.classList.remove('text-success');
 		photovalidationmsg.classList.add('text-danger');
 		photo=0;
 	}
 }
 function validatephone()
 {

 }
 
 function formdatasend()
 {
 	if(email==1 && name==1 && age==1 && photo==1)
 	{
 		console.log('Form submitted');
 	}
 	else
 	{
 		validatename();
 		validateemail();
 		validateage();
 		validatephoto();

 		console.log(' Form is submitted');

 	}
 }
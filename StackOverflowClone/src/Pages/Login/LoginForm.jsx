import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primereact/resources/primereact.css';


import './loginForm.css'; // Import your CSS file

function LoginForm() {
  console.log("LoginForm rendered");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };
  

  return (
   <form onChange={handleLogin}>
    <div className="flex align-items-center justify-content-center">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
            
            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3"  />

      
                
            <Checkbox id="rememberme"  //onChange={e => setChecked(e.checked)} checked={checked} 
                className="mr-2" />
            <label htmlFor="rememberme" className="block text-900"> Remember me</label>
            <div>   
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div> 

            <Button label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
    </div>
</div>
</form>
  );
}

export default LoginForm;
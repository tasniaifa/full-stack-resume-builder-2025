import './App.css';

function App() {
  return (
    <div className = "SignIn">
      <h1> Sign-In Form</h1>
      <form>
        <label htmlFor = "firstname">First Name *</label>
        <input type = "text" placeholder = "Enter First Name" name= "firstname" />

        <label htmlFor = "lastname">Last Name *</label>
        <input type = "text" placeholder = "Enter Last Name" name= "lastname" />

        <label htmlFor = "email">Email *</label>
        <input type = "email" placeholder = "Enter Email" name= "email" />

        <label htmlFor = "contact">Contact *</label>
        <input type = "text" placeholder = "Enter Phone Number" name= "contact" />

        <label htmlFor = "gender">Gender</label>
        <input type = "radio" name= "gender" /> Male 
        <input type = "radio" name= "gender" /> Female 
        <input type = "radio" name= "gender" /> Other

        <label htmlFor = "picture">Picture</label>
        <input type = "file" placeholder = "Enter photo" name = "picture"/>

        <label htmlFor = "shortBio">ShortBio</label>
        <textarea name = "shortBio" id = "shortBio" cols = "30" rows = "10" placeholder = "Enter Short Description"></textarea>

        <button type = "button">Reset</button>
        <button type = "button">Next</button>

      </form>
    </div>
  );
}

export default App;
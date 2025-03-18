export function Personal(){
    return <div className="form-container">
        <h2>Personal Information</h2>
        <form>
            <label htmlFor="firstname">First Name</label>
            <input type = "text" id="firstname" name="firstname" placeholder="John" />
            <label htmlFor="lastname">Last Name</label>
            <input type = "text" id="lastname" name="lastname" placeholder="Doe" />
            <label>Email</label>
            <input type = "email" placeholder="johndoe@gmail.com"/>
            <label>Phone Number</label>
            <input type = "text" placeholder="+123 456 7890"/>
            <label>Address</label>
            <input type = "text" placeholder=""/>
            <label>City</label>
            <input type = "text" placeholder="e.g. San Fransisco"/>
            <label>Zip Code</label>
            <input type = "text" placeholder="1234"/>
            <label>Soft Skills</label>
            <textarea cols = "30" rows = "10" placeholder=""/>
        </form>
    </div>
}

export function Education(){
    return <div className="form-container">
        <h2>Education and Qualification</h2>
        <form>
            <label>Degree</label>
            <input type = "text" placeholder="e.g. Bachelor of Science"/>
            <label>City/Town</label>
            <input type = "text" placeholder="e.g. San Fransisco"/>
            <label>Institution</label>
            <input type = "text" placeholder="e.g. New York Univerity"/>
            <div className="split-container">
                <div className="flex-col">
                    <label>Start Date</label>
                    <input type="date" placeholder=""/>
                </div>
                <div className="flex-col">
                    <label>End Date</label>
                    <input type="date" placeholder=""/>
                </div>
            </div>
            <label>Description</label>
            <textarea cols = "30" rows = "10" placeholder=""/>
        </form>
    </div>
}

export function Work(){
    return <div className="form-container">
        <h2>Work Experience</h2>
        <form>
        <label>Job Title</label>
            <input type = "text" placeholder="e.g. Sales Manager"/>
            <label>City/Town</label>
            <input type = "text" placeholder="e.g. San Fransisco"/>
            <label>Work Institution</label>
            <input type = "text" placeholder="e.g. PwC"/>
            <div className="split-container">
                <div className="flex-col">
                    <label>Start Date</label>
                    <input type="date" placeholder="02/31/2001"/>
                </div>
                <div className="flex-col">
                    <label>End Date</label>
                    <input type="date" placeholder="02/31/2001"/>
                </div>
            </div>
            <label>Description</label>
            <textarea cols = "30" rows = "10" placeholder=""/>
        </form>
    </div>
}
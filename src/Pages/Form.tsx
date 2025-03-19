import './FormStyle.css'
export function Personal() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input label="First Name" type="text" placeholder="John" />
          <Input label="Last Name" type="text" placeholder="Doe" />
        </div>
        <Input label="Email" type="email" placeholder="johndoe@gmail.com" />
        <Input label="Phone Number" type="text" placeholder="+123 456 7890" />
        <Input label="Address" type="text" placeholder="Your address" />
        <div className="grid grid-cols-2 gap-4">
          <Input label="City" type="text" placeholder="San Francisco" />
          <Input label="Zip Code" type="text" placeholder="1234" />
        </div>
        <Textarea label="Soft Skills" rows={3} placeholder="e.g. Teamwork, Communication" />
      </form>
    </div>
  );
}

export function Education() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Education and Qualification</h2>
      <form className="space-y-4">
        <Input label="Degree" type="text" placeholder="e.g. Bachelor of Science" />
        <Input label="City/Town" type="text" placeholder="San Francisco" />
        <Input label="Institution" type="text" placeholder="New York University" />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Start Date" type="date" />
          <Input label="End Date" type="date" />
        </div>
        <Textarea label="Description" rows={3} placeholder="Briefly describe your studies" />
      </form>
    </div>
  );
}

export function Work() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Work Experience</h2>
      <form className="space-y-4">
        <Input label="Job Title" type="text" placeholder="e.g. Sales Manager" />
        <Input label="City/Town" type="text" placeholder="San Francisco" />
        <Input label="Company" type="text" placeholder="e.g. PwC" />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Start Date" type="date" />
          <Input label="End Date" type="date" />
        </div>
        <Textarea label="Description" rows={3} placeholder="Describe your role and achievements" />
      </form>
    </div>
  );
}

// Reusable Input Component
function Input({ label, type, placeholder }: { label: string; type: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
      />
    </div>
  );
}

// Reusable Textarea Component
function Textarea({ label, rows, placeholder }: { label: string; rows: number; placeholder?: string }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
      />
    </div>
  );
}

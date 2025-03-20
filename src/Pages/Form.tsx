import React, { useState, useEffect } from 'react';
import "./index.css"

// ----------------------- Personal Form -----------------------
interface PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  softSkills: string;
}

interface PersonalProps {
  updatePersonal: (data: PersonalData) => void;
   personalData: {
     firstName: string;
     lastName: string;
     email: string;
     phone: string;
     address: string;
     city: string;
     zipCode: string;
     softSkills: string;
   };
 }
export function Personal({ updatePersonal, personalData }: PersonalProps) {
  const [data, setData] = useState(personalData);

  useEffect(() => {
    updatePersonal(data);
  }, [data, updatePersonal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Personal Information
      </h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            name="firstName"
            placeholder="John"
            value={data.firstName}
            onChange={handleChange}
          />
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Doe"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          value={data.email}
          onChange={handleChange}
        />
        <Input
          label="Phone Number"
          type="text"
          name="phone"
          placeholder="+123 456 7890"
          value={data.phone}
          onChange={handleChange}
        />
        <Input
          label="Address"
          type="text"
          name="address"
          placeholder="Your address"
          value={data.address}
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="City"
            type="text"
            name="city"
            placeholder="San Francisco"
            value={data.city}
            onChange={handleChange}
          />
          <Input
            label="Zip Code"
            type="text"
            name="zipCode"
            placeholder="1234"
            value={data.zipCode}
            onChange={handleChange}
          />
        </div>
        <Textarea
          label="Soft Skills"
          name="softSkills"
          rows={3}
          placeholder="e.g. Teamwork, Communication"
          value={data.softSkills}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

// ----------------------- Education Form -----------------------

interface EducationData {
  degree: string;
  institution: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
}


interface EducationProps {
  updateEducation: (data: EducationData) => void;
  educationData: {
    degree: string;
    institution: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
  };
}

export function Education({ updateEducation, educationData }: EducationProps) {
  const [data, setData] = useState(educationData);

  useEffect(() => {
    updateEducation(data);
  }, [data, updateEducation]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Education and Qualification
      </h2>
      <form className="space-y-4">
        <Input
          label="Degree"
          type="text"
          name="degree"
          placeholder="e.g. Bachelor of Science"
          value={data.degree}
          onChange={handleChange}
        />
        <Input
          label="City/Town"
          type="text"
          name="city"
          placeholder="San Francisco"
          value={data.city}
          onChange={handleChange}
        />
        <Input
          label="Institution"
          type="text"
          name="institution"
          placeholder="New York University"
          value={data.institution}
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Start Date"
            type="date"
            name="startDate"
            value={data.startDate}
            onChange={handleChange}
          />
          <Input
            label="End Date"
            type="date"
            name="endDate"
            value={data.endDate}
            onChange={handleChange}
          />
        </div>
        <Textarea
          label="Description"
          name="description"
          rows={3}
          placeholder="Briefly describe your studies"
          value={data.description}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

// ----------------------- Work Form -----------------------

interface WorkData {
  jobTitle: string;
  company: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkProps {
  updateWork: (data: WorkData) => void;
  workData: {
    jobTitle: string;
    company: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
  };
}

export function Work({ updateWork, workData }: WorkProps) {
  const [data, setData] = useState(workData);

  useEffect(() => {
    updateWork(data);
  }, [data, updateWork]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Work Experience
      </h2>
      <form className="space-y-4">
        <Input
          label="Job Title"
          type="text"
          name="jobTitle"
          placeholder="e.g. Sales Manager"
          value={data.jobTitle}
          onChange={handleChange}
        />
        <Input
          label="City/Town"
          type="text"
          name="city"
          placeholder="San Francisco"
          value={data.city}
          onChange={handleChange}
        />
        <Input
          label="Company"
          type="text"
          name="company"
          placeholder="e.g. PwC"
          value={data.company}
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Start Date"
            type="date"
            name="startDate"
            value={data.startDate}
            onChange={handleChange}
          />
          <Input
            label="End Date"
            type="date"
            name="endDate"
            value={data.endDate}
            onChange={handleChange}
          />
        </div>
        <Textarea
          label="Description"
          name="description"
          rows={3}
          placeholder="Describe your role and achievements"
          value={data.description}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

// ----------------------- Reusable Input Component -----------------------
interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, type, name, placeholder, value, onChange }: InputProps) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
      />
    </div>
  );
}

// ----------------------- Reusable Textarea Component -----------------------
interface TextareaProps {
  label: string;
  name: string;
  rows: number;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({ label, name, rows, placeholder, value, onChange }: TextareaProps) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
      />
    </div>
  );
}

import React, { useRef, useState, useEffect } from 'react';
import "./index.css"

// ----------------------- Personal Form -----------------------
interface PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  image: File | null;
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
     image: File | null;
     phone: string;
     address: string;
     city: string;
     zipCode: string;
     softSkills: string;
   };
 }
export function Personal({ updatePersonal, personalData }: PersonalProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [data, setData] = useState(personalData);

  useEffect(() => {
    updatePersonal(data);
  }, [data, updatePersonal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setData((prev) => ({ ...prev, image: file }));
      }
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-xl color-white">
      <h2 className="text-3xl font-bold mb-10 ">
        Personal Information
      </h2>
      <form className="space-y-4">
      <div className="grid grid-cols-10 gap-4 items-start">
          <div onClick={handleImageClick} className="col-span-3 flex flex-col items-center" >
            <img
              src={data.image ? URL.createObjectURL(data.image) : "./photo.png"}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full object-cover mb-2"
            />
            <label className="block text-white font-medium mb-1">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              ref = {inputRef}
              style={{display: "none"}}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            />
          </div>
          <div className="col-span-7 flex flex-col space-y-4">
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
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-10">
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
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-10">
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
      <label className="block text-white font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-white border rounded-lg focus:ring focus:ring-blue-300 outline-none"
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
      <label className="block text-white font-medium mb-1">{label}</label>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-white border rounded-lg focus:ring focus:ring-blue-300 outline-none"
      />
    </div>
  );
}

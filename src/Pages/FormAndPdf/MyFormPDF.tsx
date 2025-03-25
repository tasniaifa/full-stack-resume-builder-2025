import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

interface Personal {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  softSkills: string;
}

interface Education {
  degree: string;
  institution: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Work {
  jobTitle: string;
  company: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface FormData {
  personal: Personal;
  education: Education;
  work: Work;
}

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 12, marginBottom: 5 }
});

interface MyFormPDFProps {
  formData: FormData;
}

export const MyFormPDF: React.FC<MyFormPDFProps> = ({ formData }) => (
  <div>
    <PDFDownloadLink
      document={
        <Document>
          <Page style={styles.page}>
            {/* Personal Information */}
            <View style={styles.section}>
              <Text style={styles.heading}>Personal Information</Text>
              <Text style={styles.text}>First Name: {formData.personal.firstName}</Text>
              <Text style={styles.text}>Last Name: {formData.personal.lastName}</Text>
              <Text style={styles.text}>Email: {formData.personal.email}</Text>
              <Text style={styles.text}>Phone: {formData.personal.phone}</Text>
              <Text style={styles.text}>Address: {formData.personal.address}</Text>
              <Text style={styles.text}>City: {formData.personal.city}</Text>
              <Text style={styles.text}>Zip Code: {formData.personal.zipCode}</Text>
              <Text style={styles.text}>Soft Skills: {formData.personal.softSkills}</Text>
            </View>

            {/* Education Information */}
            <View style={styles.section}>
              <Text style={styles.heading}>Education</Text>
              <Text style={styles.text}>Degree: {formData.education.degree}</Text>
              <Text style={styles.text}>Institution: {formData.education.institution}</Text>
              <Text style={styles.text}>City: {formData.education.city}</Text>
              <Text style={styles.text}>Start Date: {formData.education.startDate}</Text>
              <Text style={styles.text}>End Date: {formData.education.endDate}</Text>
              <Text style={styles.text}>Description: {formData.education.description}</Text>
            </View>

            {/* Work Experience */}
            <View style={styles.section}>
              <Text style={styles.heading}>Work Experience</Text>
              <Text style={styles.text}>Job Title: {formData.work.jobTitle}</Text>
              <Text style={styles.text}>Company: {formData.work.company}</Text>
              <Text style={styles.text}>City: {formData.work.city}</Text>
              <Text style={styles.text}>Start Date: {formData.work.startDate}</Text>
              <Text style={styles.text}>End Date: {formData.work.endDate}</Text>
              <Text style={styles.text}>Description: {formData.work.description}</Text>
            </View>
          </Page>
        </Document>
      }
      fileName="form_data.pdf"
    >
      {({ loading }) => (loading ? 'Loading PDF...' : 'Download PDF')}
    </PDFDownloadLink>
  </div>
);

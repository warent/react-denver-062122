import React from 'react';
import { useFormik } from 'formik';

import BadInput from "../components/BadInput";
import { object, string, number, date, } from 'yup';

const Basic = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            firstName2: '',
            lastName2: '',
            email2: '',
            firstNameSpouse: '',
            lastNameSpouse: '',
            emailSpouse: '',
            firstNameChild: '',
            lastNameChild: '',
            emailChild: '',
            firstNameParent: '',
            lastNameParent: '',
            emailParent: '',
            firstNameEmployer: '',
            lastNameEmployer: '',
            emailEmployer: '',
        },
        onSubmit: values => {
            fetch("https://squadformers.com", {
                method: "POST",
                body: JSON.stringify(values)
            });
        },
    });

    const schema = {
        firstName: string(),
        lastName: string(),
        email: string().email(),
        firstName2: string(),
        lastName2: string(),
        email2: string().email(),
        firstNameSpouse: string(),
        lastNameSpouse: string(),
        emailSpouse: string().email(),
        firstNameChild: string(),
        lastNameChild: string(),
        emailChild: string().email(),
        firstNameParent: string(),
        lastNameParent: string(),
        emailParent: string().email(),
        firstNameEmployer: string(),
        lastNameEmployer: string(),
        emailEmployer: string().email(),
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <img src="bigimg.jpg" style={{ width: 0 }} />
            <img src="bigimg2.jpg" style={{ width: 0 }} />
            <BadInput title="First Name" id="firstName" formik={formik} schema={schema} />
            <BadInput title="Last Name" id="lastName" formik={formik} schema={schema} />
            <BadInput title="Email" id="email" formik={formik} schema={schema} />
            <BadInput title="Friend First Name" id="firstName2" formik={formik} schema={schema} />
            <BadInput title="Friend Last Name" id="lastName2" formik={formik} schema={schema} />
            <BadInput title="Friend Email" id="email2" formik={formik} schema={schema} />
            <BadInput title="Spouse First Name" id="firstNameSpouse" formik={formik} schema={schema} />
            <BadInput title="Spouse Last Name" id="lastNameSpouse" formik={formik} schema={schema} />
            <BadInput title="Spouse Email" id="emailSpouse" formik={formik} schema={schema} />

            <BadInput title="Child First Name" id="firstNameChild" formik={formik} schema={schema} />
            <BadInput title="Child Last Name" id="lastNameChild" formik={formik} schema={schema} />
            <BadInput title="Child Email" id="emailChild" formik={formik} schema={schema} />
            <BadInput title="Parent First Name" id="firstNameParent" formik={formik} schema={schema} />
            <BadInput title="Parent Last Name" id="lastNameParent" formik={formik} schema={schema} />
            <BadInput title="Parent Email" id="emailParent" formik={formik} schema={schema} />
            <BadInput title="Employer First Name" id="firstNameEmployer" formik={formik} schema={schema} />
            <BadInput title="Employer Last Name" id="lastNameEmployer" formik={formik} schema={schema} />
            <BadInput title="Employer Email" id="emailEmployer" formik={formik} schema={schema} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Basic;
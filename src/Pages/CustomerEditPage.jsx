import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { customers } from '../customers'
import SectionTitle from '../Components/Common/SectionTitle'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CustomerEditPage = () => {
  const { id } = useParams() // Get the customer ID from the URL
  const [formData, setFormData] = useState(null)
  const navigate = useNavigate()

  // Fetch the customer data based on the id
  useEffect(() => {
    const customer = customers.find((cust) => cust.id === id)
    if (customer) {
      setFormData({
        accountNumber: customer.accountNumber,
        companyName: customer.companyName,
        contact: { ...customer.contact },
      })
    } else {
      console.log('Customer not found!')
      // If no customer is found, navigate to ErrorPage
      navigate('/error')
    }
  }, [id, navigate]) // Include navigate in the dependency array

  if (!formData) {
    return <div>Loading...</div> // Show a loading state while fetching data
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log('name:', name)
    console.log('value:', value)
    // Check if the name contains a dot (.) indicating a nested field
    if (name.includes('Contact.')) {
      const contactField = name.split('.')[1] // Get the property name after 'Contact.'
      console.log('  field:', contactField)
      // Update the formData with the nested contact field
      setFormData((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [contactField]: value, // Dynamically set the value for the nested field
        },
      }))

      console.log('formData:', formData)
    } else {
      // If it's not a nested field, update the top-level formData field
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const onSave = (updatedData) => {
    const index = customers.findIndex(
      (cust) => cust.accountNumber === updatedData.accountNumber
    )
    if (index !== -1) {
      customers[index] = {
        ...customers[index],
        ...updatedData,
        contact: {
          ...customers[index].contact,
          ...updatedData.contact,
        },
      }
      console.log('Customer updated:', customers[index])
    } else {
      console.log('Customer not found!')
    }

    navigate('/customer')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Wrapper>
      <div className="centered-title">
        <SectionTitle sub="Edit" main="An Existing Customer" />
      </div>
      <div className="content-container section-center customer-edit">
        <form onSubmit={handleSubmit}>
          <div className="customer-entry">
            <label htmlFor="AccountNumber" className="form-label">
              Account #
            </label>
            <input
              type="text"
              className="form-control"
              id="AccountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="customer-entry">
            <label htmlFor="CompanyName" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="CompanyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="customer-entry">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="FirstName"
              name="Contact.firstName"
              value={formData.contact.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="customer-entry">
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="LastName"
              name="Contact.lastName"
              value={formData.contact.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="customer-entry">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="Contact.email"
              value={formData.contact.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="customer-entry">
            <label htmlFor="MobilePhone" className="form-label">
              Mobile Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="MobilePhone"
              name="Contact.mobilePhone"
              value={formData.contact.mobilePhone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="customer-entry">
            <label htmlFor="Phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="Phone"
              name="Contact.phone"
              value={formData.contact.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="centered-title ">
            <Link to={`/customer`} className="btn form-btn form-cancel-btn">
              Go Back
            </Link>
            <button type="submit" className="btn form-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default CustomerEditPage

const Wrapper = styled.section`
  .centered-title {
    margin-top: 2rem;
  }

  .form-btn {
    height: 2rem;
    font-size: 0.75rem;
    text-transform: capitalize;
    padding: 0.375rem 0.5rem;
    border-radius: var(--radius);
    font-weight: 400;
    display: inline-flex;
    line-height: 1.5;
    font-family: inherit;
  }

  .form-cancel-btn {
    color: var(--clr-primary);
    background: transparent;
    border: 1px solid var(--clr-primary);
    margin-right: 0.25rem;
  }
  .customer-edit {
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    .customer-edit {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .customer-edit {
      padding-left: 6rem;
      padding-right: 6rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .customer-edit {
      padding-left: 12rem;
      padding-right: 12rem;
    }
  }

  .customer-entry {
    margin-bottom: 1rem;
  }

  .customer-entry .form-label {
    display: inline-block;
    margin-bottom: 0.25rem;
  }
  /* label {
    display: inline-block;
  } */

  .customer-entry .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`

import styled from 'styled-components'
import SectionTitle from '../Components/Common/SectionTitle'
import { customers } from '../customers'
import CustomerCard from '../Components/Customer/CustomerCard'

const CustomersPage = () => {
  return (
    <Wrapper>
      <div className="centered-title">
        <SectionTitle sub="explore our" main="Top 6 active customers" />
      </div>
      <div className="customer-container section-center">
        {customers.map((customer) => {
          const { id, accountNumber, companyName, contact, addressBook } =
            customer

          return (
            <CustomerCard
              key={accountNumber}
              id={id}
              companyName={companyName}
              accountNumber={accountNumber}
              contact={contact}
              addressBook={addressBook}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

export default CustomersPage

const Wrapper = styled.section`
  .centered-title {
    margin-top: 2rem;
  }

  .customer-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 20px;
  }
`

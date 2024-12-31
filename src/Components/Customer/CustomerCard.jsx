import styled from 'styled-components'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const CustomerCard = ({
  id,
  accountNumber,
  companyName,
  contact,
  addressBook,
}) => {
  const { items } = addressBook

  return (
    <Wrapper>
      <div className="customer-item">
        {/* <h4 className="customer-title">Account</h4> */}
        <p className="customer-name">
          {contact.salutation} {contact.firstName} {contact.lastName}
        </p>
      </div>
      {items.length > 0 && (
        <div className="customer-item">
          <h4 className="customer-title">
            {/* <span className="customer-icon">
              <FontAwesomeIcon icon={faLocationArrow} />
            </span>{' '} */}
            {companyName}
          </h4>
          <p className="customer-text">
            {`${items[0].addressBookAddress.addr1} ${items[0].addressBookAddress.addr2}`}
            <br />
            {`${items[0].addressBookAddress.city} ${items[0].addressBookAddress.zip}`}
          </p>
        </div>
      )}
      <div className="customer-item">
        <h4 className="customer-text">
          <small>
            <span className="customer-icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>{' '}
            {contact.phone}
          </small>
        </h4>
      </div>
      <div className="customer-item">
        <h4 className="customer-text">
          <small>
            <span className="customer-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            {` ${contact.email}`}
          </small>
        </h4>
      </div>
      <div className="customer-item">
        {/* <a href="# " className="btn customer-btn">
          Edit
        </a> */}
        <Link to={`/customer/${id}/edit`} className="btn customer-btn">
          Modify
        </Link>
      </div>
    </Wrapper>
  )
}

export default CustomerCard

const Wrapper = styled.section`
  /* margin: 2rem 0; */
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  box-shadow: var(--shadow-5);
  transition: var(--transition);
  padding: 1.5rem 1rem;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .customer-item {
    margin-bottom: 0.725rem;
    text-align: center;
  }

  .customer-name {
    font-family: var(--ff-secondary);
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    color: var(--clr-primary);
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .customer-title {
    color: var(--clr-primary);
    font-weight: 400;
  }
  .customer-text {
    font-weight: 400;
    /* font-size: 0.9rem; */
    color: var(--clr-secondary);
  }

  .customer-btn {
    font-size: 0.75rem;
    text-transform: capitalize;
    padding: 0.375rem 0.5rem;
    border-radius: var(--radius);
    font-weight: 400;
    margin-top: 0.725rem;
  }
`

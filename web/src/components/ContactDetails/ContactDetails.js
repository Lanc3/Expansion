const ContactDetails = ({ contacts, name }) => {
  return (
    <div className="flex w-full justify-center lg:w-1/2">
      <div className="max-w-xl px-6 text-left">
        <h2 className="font-general-medium mb-8 mt-12 text-2xl text-primary-dark ">
          {name}'s Contact details
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="mr-4 text-2xl text-gray-500 ">{contact.icon}</i>
              <span className="mb-4 text-lg text-ternary-dark ">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ContactDetails

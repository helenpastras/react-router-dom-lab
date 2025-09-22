
import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <>
      <h2>All Mailboxes </h2>
      <ul>
        {props.mailboxes.map((box) => (
          <li key={box._id}>
            <Link to={`/mailboxes/${box._id}`}>
              <div className="mail-box">
                <h3>Mailbox #{box._id}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
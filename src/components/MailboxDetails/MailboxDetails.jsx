import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
    );
 
      const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
    );
    
    if(!selectedBox) {
        return<h3>Mailbox Not Found</h3>
    }
  return (
    <>
        <h2>Mailbox Details</h2>
        <div className="mail-box">
            <h3>Mailbox #{selectedBox._id}</h3>
            <p>Owner: {selectedBox.boxOwner}</p>
            <p>Size: {selectedBox.boxSize}</p>
        </div>
        <h3>Letters:</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters yet.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <strong>To:</strong> {letter.recipient}<br />
              <em>{letter.message}</em>
            </li>
          ))}
        </ul>
      )}
        </>  
    )
};




export default MailboxDetails;
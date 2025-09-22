import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
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
        </>  
    )
};




export default MailboxDetails;
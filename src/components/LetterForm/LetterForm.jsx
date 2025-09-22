import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [formData, setFormData] = useState({
    mailboxId: mailboxes[0]?._id || 0,
    recipient: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: name === 'mailboxId' ? Number(value) : value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addLetter(formData);
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <main>
      <h2>New Letter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Send to Mailbox:</label>
        <select name="mailboxId" value={formData.mailboxId} onChange={handleChange}>
          {mailboxes.map((box) => (
            <option key={box._id} value={box._id}>
              Box #{box._id}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Letter</button>
      </form>
    </main>
  );
};

export default LetterForm;
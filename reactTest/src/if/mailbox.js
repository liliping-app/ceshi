import React from 'react';
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1> Hello React!</h1>
      {unreadMessages.length > 0 && 
        <h2>
          You have  {unreadMessages.length} unread message.
        </h2>
       }
    </div>
  );
}
export default Mailbox;
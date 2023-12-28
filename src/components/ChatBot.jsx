import React from 'react'

function ChatBot() {
  return (
    <div className='chatbot-container'>
      <iframe allow="microphone;" title='chatbot'
        src="https://console.dialogflow.com/api-client/demo/embedded/8ccb7cf4-d4bf-4cc3-b1ec-73909d7efae8"></iframe>
    </div>
  )
}

export default ChatBot
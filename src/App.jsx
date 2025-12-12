import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [hashMessage, setHashMessage] = useState('')
  const [key, setKey] = useState('')
  const [encryptedResult, setEncryptedResult] = useState({})
  const [decryptedResult, setDecryptedResult] = useState({})

  const handleEncy = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.get('https://qkd-simulation-v2.onrender.com/api/qkd/encrypt', {
        params: { message: message }
      })
      
      const data = response.data
      console.log('Response:', data)
      setEncryptedResult(data)
    } catch (error) {
      console.error('Error:', error)
      setEncryptedResult('Error: ' + error.message)
    }
  }

  const handleDecy = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post('https://qkd-simulation-v2.onrender.com/api/qkd/decrypt', {
        ciphertext: hashMessage,
        encryptionKey: key
      })
      
      const data = response.data
      console.log('Decrypted:', data)
      setDecryptedResult(data)
    } catch (error) {
      console.error('Error:', error)
      setDecryptedResult('Error: ' + error.message)
    }
  }


  return (
    <>
      <div className='container'>
        <div className='encryption'>
          <div className='section-header'>
            <h2>Encryption</h2>
            <p className='section-subtitle'>Enter your message to encrypt</p>
          </div>
          <form onSubmit={handleEncy}>
            <div className='form-group'>
              <label htmlFor='encrypt-input'>Message</label>
              <input
                id='encrypt-input'
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
              />
            </div>
            <button type="submit" className='btn-submit'>Encrypt</button>
          </form>
          {encryptedResult.ciphertext && (
            <div className='result-box'>
              <h4>Encrypted Message</h4>
              <div className='result-content'>{encryptedResult.ciphertext}</div>
            </div>
          )}
          {encryptedResult.encryptionKey && (
            <div className='result-box'>
              <h4>Encryption Key</h4>
              <div className='result-content'>{encryptedResult.encryptionKey}</div>
            </div>
          )}
        </div>

        <div className='decryption'>
          <div className='section-header'>
            <h2>Decryption</h2>
            <p className='section-subtitle'>Enter encrypted message and key to decrypt</p>
          </div>
          <form onSubmit={handleDecy}>
            <div className='form-group'>
              <label htmlFor='cipher-input'>Ciphertext</label>
              <input
                id='cipher-input'
                type="text"
                value={hashMessage}
                onChange={(e) => setHashMessage(e.target.value)}
                placeholder="Enter encrypted message..."
              />
            </div>
            <div className='form-group'>
              <label htmlFor='key-input'>Encryption Key</label>
              <input
                id='key-input'
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Enter QKD key..."
              />
            </div>
            <button type="submit" className='btn-submit'>Decrypt</button>
          </form>
          {decryptedResult.plaintext && (
            <div className='result-box'>
              <h4>Decrypted Message</h4>
              <div className='result-content'>{decryptedResult.plaintext}</div>
            </div>
          )}
        </div>
      </div>

      <footer className='footer'>
        <div className='footer-content'>
          <p>&copy; 2025 QKD Encryption. All rights reserved.</p>
          <div className='social-links'>
            <a href='https://x.com/ShreyanshD44145' target='_blank' rel='noopener noreferrer' className='social-link'>
              <i className='fab fa-twitter'></i> Twitter
            </a>
            <a href='https://www.linkedin.com/in/shreyansh-shekhar-dwivedi-632293320' target='_blank' rel='noopener noreferrer' className='social-link'>
              <i className='fab fa-linkedin'></i> LinkedIn
            </a>
            <a href='https://github.com/sshekhar-04' target='_blank' rel='noopener noreferrer' className='social-link'>
              <i className='fab fa-github'></i> GitHub
            </a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='social-link'>
              <i className='fab fa-facebook'></i> Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
export default App

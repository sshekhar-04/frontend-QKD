# QKD Frontend

A simple React frontend for Quantum Key Distribution (QKD) simulation.

## Features

- **Encryption**: Enter a message to encrypt using QKD protocol.
- **Decryption**: Decrypt an encrypted message using the provided key.
- Responsive UI with forms for input and display of results.

## Technologies Used

- React 19
- Vite
- Axios for API calls
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd qkd/frontend/qkd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## API Endpoints

The app communicates with a backend API hosted at `https://qkd-simulation-v2.onrender.com`:

- `GET /api/qkd/encrypt?message=<message>` - Encrypts the message
- `POST /api/qkd/decrypt` - Decrypts the message with ciphertext and key

## Deployment

- Build command: `npm run build`
- Publish directory: `dist`

## License

© 2025 QKD Encryption. All rights reserved.

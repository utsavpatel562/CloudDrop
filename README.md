# CloudDrop 📁

CloudDrop is a secure, cloud-based file-sharing web application designed to make uploading and sharing files effortless. With CloudDrop, users can securely store files in the cloud, share them via secure links, and even add password protection for an extra layer of security.

## 🌟 Top Features

- **Secure and Encrypted Storage**: Each file is encrypted, ensuring privacy and data security.
- **Password-Protected Links**: Share files with confidence using secure links that can be password-protected.
- **Access Anywhere, Anytime**: Retrieve your files from any device, wherever you are.
- **User-Friendly Interface**: A simple, intuitive design makes file management straightforward and efficient.

## 🚀 Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Firebase for storage and authentication
- **Other Tools**: Clerk for secure user authentication, Next.js for fast server-side rendering

## 🛠️ Getting Started

To get a local copy up and running, follow these steps.

### 1. Prerequisites

- **Node.js** - Download and install [Node.js](https://nodejs.org/).
- **Firebase Account** - Set up a Firebase project and enable Cloud Storage.
- **Clerk Account** - Sign up for Clerk to manage user authentication.

### 2. Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/utsavpatel562/CloudDrop.git
   cd CloudDrop
   npm install

### 3. Configure Firebase and Clerk:
Create a .env.local file in the root directory.
Add your Firebase and Clerk API keys:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key
```
### 4. Run the development server:
```bash
npm run dev
```
Open http://localhost:3000 to view it in the browser.

### 🔒 Security
> CloudDrop uses industry-standard encryption and secure authentication processes to protect your data.

### 📈 Roadmap
 > Add multi-file upload capability
 > Implement file sharing expiration dates
 > Enhance UI/UX for mobile devices
 > Add notification for file download events

### 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check out the issues page to start contributing.

### 📝 License
Distributed under the MIT License. See LICENSE for more information.

Made with ❤️ by Utsav Patel

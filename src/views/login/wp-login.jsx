import axios from 'axios';
import { useState } from 'react';

// Login function to connect to WordPress and check user credentials
function loginToWP() {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    try {
        // Step 1: Authenticate with admin and application password credentials
        const adminAuth = btoa(username+':D3eB JmHv x0mL qLg3 K18f bYND'); // Replace with your actual admin application password
        const response = await axios.post('http://localhost:8888/nz/wp-json/wp/v2/users/me', {}, {
            headers: {
                'Authorization': `Basic ${adminAuth}`
            }
        });

        // Step 2: Check the provided user credentials (mocked logic)
        if (response.data) {
            // Successful login
            console.log('User authenticated');
            // Step 3: Implement session management or navigate the user in your React app
        } else {
            // Step 4: Log out and show an error
            console.error('Incorrect user or password');
        }
    } catch (error) {
        console.error('Login failed:', error);
    }
  }
    return (
      <>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      </>
    )
}
export default loginToWP

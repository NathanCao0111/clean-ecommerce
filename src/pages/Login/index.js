import styles from './Login.module.scss';
import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage } from '@chakra-ui/react';
import { useState } from 'react';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  console.log(userData);

  return (
    <div>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={userData.email}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
  );
}

export default Login;

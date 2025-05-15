'use client';
import { Button, Typography, Box } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../lib/firebase';

export default function Home() {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <Typography variant="h4">Sign in with Google</Typography>
      <Button
        onClick={handleGoogleSignIn}
        variant="contained"
        sx={{ mt: 4 }}
      >
        Sign In
      </Button>
    </Box>
  );
}

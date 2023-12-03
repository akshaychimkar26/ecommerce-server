import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Visibility, VisibilityOff, LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'


const Login = ({ onClose, toggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [Message, setMessage] = useState("")

  const login = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const User = {
        email: data.get('email'),
        password: data.get('password'),
      }
      const response = await axios.post("https://hrishabh-e-commerce.onrender.com/login", User)
      setMessage(response.data.msg)
      setTimeout(() => {
        onClose()
        localStorage.setItem("Token", response.data.token)
        localStorage.setItem("User", JSON.stringify(response.data.user))
        // window.location.reload(true)
      }, 1500)
    } catch (error) {
      const msg = error.response.data.msg
      msg && setMessage(msg)
      console.log(msg)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em',
      }}
    >
      <IconButton
        sx={{ position: 'absolute', right: '0', top: '0' }}
        aria-label="close"
        size="large"
        onClick={onClose}
      >
        <AiOutlineCloseCircle />
      </IconButton>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login to Your Account
      </Typography>
      <Box component="form" onSubmit={login} noValidate sx={{ mt: 2, display: 'grid', gap: '1em' }}>
        <TextField
          id="email"
          name='email'
          label="Email Address"
          autoComplete="email"
          required
          autoFocus
        />
        <TextField
          name='password'
          id="password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          label="Password"
          InputProps={{
            endAdornment:
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
          }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mb: 2 }}
        >
          Login
        </Button>
        {/* <Grid container direction="column" alignItems="center" sx={{ color: 'grey' }}>
          <Grid item xs>
            <Button href="#">
              Forgot password ?
            </Button>
          </Grid>
          <Grid item> */}
        <Button onClick={toggle}>
          Don't have an account ? Sign Up
        </Button>
        {/* </Grid>
        </Grid> */}
      </Box>
      {
        Message
          ? <Typography mt={2}>
            {Message}
          </Typography>
          : ""
      }
    </Box>
  )
}

export default Login
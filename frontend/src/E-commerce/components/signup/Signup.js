import React, { useState } from 'react'
import axios from 'axios';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Visibility, VisibilityOff, LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'

const Signup = ({ onClose, toggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [Message, setMessage] = useState("")

  const register = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const User = {
        name: data.get('name'),
        phone: Number(data.get('phone')),
        email: data.get('email'),
        password: data.get('password'),
      }
      console.log(User)
      const response = await axios.post("https://hrishabh-e-commerce.onrender.com/signup", User)
      setMessage(response.data.msg)
      setTimeout(() => {
        onClose()
        localStorage.setItem("Token", response.data.token)
        localStorage.setItem("User", JSON.stringify(response.data.user))
        toggle()
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
        onClick={() => { onClose(); toggle(); }}
      >
        <AiOutlineCloseCircle />
      </IconButton>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        SignIn to New Account
      </Typography>
      <Box component="form" onSubmit={register} noValidate sx={{ mt: 2, display: 'grid', gap: '1em' }}>
        <TextField
          id='name'
          name='name'
          label="Username"
          autoComplete="username"
          placeholder='your name'
          required
        />
        <TextField
          id='phone'
          name='phone'
          label="Mobile Number"
          placeholder='your mobile number'
          required
          inputProps={{
            inputMode: 'numeric',
            maxLength: 10,
            minLength: 10,
          }}
        // helperText={`${User.phone.length}/11`}
        />
        <TextField
          id="email"
          name='email'
          label="Email Address"
          autoComplete="email"
          required
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
          Sign In
        </Button>
        <Button onClick={toggle}>
          Already have an account? Go to Login
        </Button>
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

export default Signup
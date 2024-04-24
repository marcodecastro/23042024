import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
    
    <div>Home</div>
    <div>TESTE</div>
    <button onClick={() => navigate('/logado')}>Ir para Logado</button>
    </div>
  )
}
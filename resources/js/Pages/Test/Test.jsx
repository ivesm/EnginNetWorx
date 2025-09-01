
import './index.css';
import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import Header from './src/components/Header.jsx' ;
import GameBoard from './src/components/GameBoard.jsx' ;
import Log from './src/components/Log.jsx' ;

export default function Test() {

return (
  <>
    <Header/>
    <GameBoard/>

    <Log/>
  </>
) ;
}

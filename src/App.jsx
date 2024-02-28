import { useState } from 'react'
import './App.css'
import Navigator from './components/Navigation/navigator'
import ContactHeader from './components/header/ContactHeader'
import ContactModule from './components/contacts/ContactModule'

function App() {
  return (
    <div>
      <Navigator />
      <main className="main_container">
        <ContactHeader />
        <ContactModule />
      </main>
    </div>
  );
}

export default App;

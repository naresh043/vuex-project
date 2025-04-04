<template>
    <div class="coach-details">
      <h1>Details for the Coach</h1>
      <router-view></router-view>
      <router-link to="coaches/c1/contact" class="contact-link">Contact</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CoachDetail'
  }
  </script>
  
  <style scoped>
  .coach-details {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
  }
  
  .contact-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #6e8efb;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .contact-link:hover {
    background-color: #5a7ae0;
  }
  </style>
<template>
    <header class="header">
      <nav class="nav">
        <h1 class="logo">
          <router-link to="/">Find a Coach</router-link>
        </h1>
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/coaches" class="nav-link">All Coaches</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/request" class="nav-link">Requests</router-link> <!-- Fixed route to /requests -->
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link> <!-- Changed from Contact to Register -->
          </li>
          <li class="nav-item">
            <base-button @click="handleLogout" class="logout-btn">Logout</base-button> <!-- Added click handler -->
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      handleLogout() {
        // Add your logout logic here
        console.log('Logout clicked');
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo a {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.5px;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1.5rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
  }
  
  .nav-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.5rem 0;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .nav-link:hover {
    color: white;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
  
  .auth-link {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: all 0.3s ease;
  }
  
  .auth-link:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  .auth-link::after {
    display: none;
  }
  
  .logout-btn {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .logout-btn:hover {
    background-color: white;
    color: #6e8efb;
  }
  
  .router-link-active {
    color: white;
    font-weight: 600;
  }
  
  .router-link-active::after {
    width: 100%;
  }
  </style>
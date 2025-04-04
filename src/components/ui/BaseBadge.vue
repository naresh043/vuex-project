<template>
    <span class="badge" :class="type">
      {{ text }}
    </span>
  </template>
  
  <script>
  export default {
    props: ['type', 'title'],
    computed: {
      text() {
        return this.title.charAt(0).toUpperCase() + this.title.slice(1);
      }
    }
  }
  </script>
  
  <style scoped>
  .badge {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  
  /* Area-specific styles */
  .badge.frontend {
    background-color: rgba(74, 144, 226, 0.1);
    color: #4a90e2;
    border: 1px solid rgba(74, 144, 226, 0.3);
  }
  
  .badge.backend {
    background-color: rgba(106, 176, 76, 0.1);
    color: #6ab04c;
    border: 1px solid rgba(106, 176, 76, 0.3);
  }
  
  .badge.career {
    background-color: rgba(245, 171, 53, 0.1);
    color: #f5ab35;
    border: 1px solid rgba(245, 171, 53, 0.3);
  }
  
  .badge.design {
    background-color: rgba(155, 89, 182, 0.1);
    color: #9b59b6;
    border: 1px solid rgba(155, 89, 182, 0.3);
  }
  
  .badge.database {
    background-color: rgba(231, 76, 60, 0.1);
    color: #e74c3c;
    border: 1px solid rgba(231, 76, 60, 0.3);
  }
  
  .badge:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
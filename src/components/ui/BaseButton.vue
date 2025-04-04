<template>
    <button v-if="!link" :class="['base-button', mode]">
      <slot></slot>
    </button>
    <router-link v-else :to="to" :class="['base-button', 'router-button', mode]">
      <slot></slot>
    </router-link>
  </template>
  
  <script>
  export default {
    props: {
      mode: {
        type: String,
        required: false,
        default: ""
      },
      link: {
        type: Boolean,
        required: false,
        default: false
      },
      to: {
        type: String,
        required: false,
        default: "/"
      }
    }
  }
  </script>
  
  <style scoped>
  .base-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    border: none;
    outline: none;
    position: relative;
    overflow: hidden;
  }
  
  /* Default button style */
  .base-button:not(.router-button) {
    background-color: #6e8efb;
    color: white;
    box-shadow: 0 2px 5px rgba(110, 142, 251, 0.3);
  }
  
  .base-button:not(.router-button):hover {
    background-color: #5a7ae0;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(110, 142, 251, 0.3);
  }
  
  .base-button:not(.router-button):active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(110, 142, 251, 0.3);
  }
  
  /* Router-link style (anchor-like) */
  .router-button {
    background: transparent;
    color: #6e8efb;
    padding: 0.5rem 1rem;
    box-shadow: none;
  }
  
  .router-button:hover {
    background-color: rgba(110, 142, 251, 0.1);
    transform: none;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
  }
  
  /* Mode variations */
  .flat {
    background-color: transparent;
    color: #6e8efb;
    box-shadow: none;
  }
  
  .flat:hover {
    background-color: rgba(110, 142, 251, 0.1);
  }
  
  .outline {
    background-color: transparent;
    color: #6e8efb;
    border: 2px solid #6e8efb;
  }
  
  .outline:hover {
    background-color: rgba(110, 142, 251, 0.1);
  }
  
  .text {
    background-color: transparent;
    color: #6e8efb;
    box-shadow: none;
    padding: 0.25rem 0.5rem;
  }
  
  .text:hover {
    text-decoration: underline;
    background-color: transparent;
  }
  
  /* Disabled state */
  .base-button:disabled,
  .base-button[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
  }
  
  /* Ripple effect */
  .base-button::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 1%, transparent 1%) center/15000%;
    opacity: 0;
    transition: opacity 0.5s, background-size 0.5s;
  }
  
  .base-button:active::after {
    background-size: 100%;
    opacity: 1;
    transition: background-size 0s;
  }
  </style>
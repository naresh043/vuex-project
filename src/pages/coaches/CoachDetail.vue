<template>
    <div v-if="selectedCoach" class="coach-details-container">
      <!-- Header Section -->
      <section class="profile-section">
        <base-card class="profile-card">
          <div class="coach-header">
            <div class="name-rate">
              <h1 class="coach-name">{{ fullName }}</h1>
              <div class="rate-badge">${{ rate }}/hour</div>
            </div>
            <div class="avatar-placeholder">
              {{ firstNameInitial }}{{ lastNameInitial }}
            </div>
          </div>
        </base-card>
      </section>
  
      <!-- Contact Section -->
      <section class="contact-section">
        <base-card class="contact-card">
          <header class="contact-header">
            <h2 class="contact-title">Interested? Reach Out Now!</h2>
            <base-button 
              link 
              :to="contactLink" 
              class="contact-button"
              mode="filled"
            >
              Contact Coach
            </base-button>
          </header>
          <router-view></router-view>
        </base-card>
      </section>
  
      <!-- Expertise Section -->
      <section class="expertise-section">
        <base-card class="expertise-card">
          <div class="expertise-content">
            <h3 class="section-title">Areas of Expertise</h3>
            <div class="expertise-tags">
              <base-badge 
                v-for="(area, index) in areas" 
                :key="index" 
                :type="area" 
                :title="area"
                class="expertise-tag"
              />
            </div>
            <div class="description-container">
              <h3 class="section-title">About Me</h3>
              <p class="coach-description">{{ description }}</p>
            </div>
          </div>
        </base-card>
      </section>
    </div>
    <div v-else class="loading-state">
      <base-spinner></base-spinner>
      <p>Loading coach information...</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ["id"],
    data() {
      return {
        selectedCoach: null,
      };
    },
    computed: {
      fullName() {
        return this.selectedCoach ? 
          `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}` : '';
      },
      firstNameInitial() {
        return this.selectedCoach?.firstName.charAt(0) || '';
      },
      lastNameInitial() {
        return this.selectedCoach?.lastName.charAt(0) || '';
      },
      rate() {
        return this.selectedCoach?.hourlyRate || '';
      },
      contactLink() {
        return this.selectedCoach ? 
          `/coaches/${this.id}/contact` : '';
      },
      areas() {
        return this.selectedCoach?.areas || [];
      },
      description() {
        return this.selectedCoach?.description || '';
      },
    },
    created() {
      this.selectedCoach = this.$store.getters["coaches/coaches"].find(
        (coach) => coach.id === this.id
      );
    },
  };
  </script>
  
  <style scoped>
  .coach-details-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Profile Section */
  .profile-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
    border-radius: 12px;
    overflow: hidden;
  }
  
  .coach-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  }
  
  .name-rate {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .coach-name {
    font-size: 2rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0;
  }
  
  .rate-badge {
    background: rgba(110, 142, 251, 0.1);
    color: #6e8efb;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    display: inline-block;
  }
  
  .avatar-placeholder {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(110, 142, 251, 0.3);
  }
  
  /* Contact Section */
  .contact-section {
    margin-top: 30px;
  }
  
  .contact-card {
    border-left: 4px solid #6e8efb;
  }
  
  .contact-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
  }
  
  .contact-title {
    font-size: 1.4rem;
    color: #2c3e50;
    margin: 0;
    font-weight: 600;
  }
  
  .contact-button {
    background: #6e8efb;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .contact-button:hover {
    background: #5a7ae0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(90, 122, 224, 0.3);
  }
  
  /* Expertise Section */
  .expertise-section {
    margin-top: 30px;
  }
  
  .expertise-card {
    padding: 30px;
  }
  
  .section-title {
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 20px;
    font-weight: 600;
    position: relative;
    padding-bottom: 10px;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: #6e8efb;
    border-radius: 3px;
  }
  
  .expertise-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
  }
  
  .expertise-tag {
    transition: all 0.2s ease;
  }
  
  .expertise-tag:hover {
    transform: translateY(-2px);
  }
  
  .coach-description {
    line-height: 1.8;
    color: #4a5568;
    font-size: 1.05rem;
    margin: 0;
  }
  
  /* Loading State */
  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    gap: 20px;
  }
  
  .loading-state p {
    color: #718096;
    font-size: 1.1rem;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .coach-header {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 20px;
      padding: 20px;
    }
  
    .contact-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
  
    .coach-name {
      font-size: 1.6rem;
    }
  
    .section-title {
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: 480px) {
    .coach-details-container {
      padding: 15px;
    }
  
    .expertise-card {
      padding: 20px;
    }
  }
  </style>
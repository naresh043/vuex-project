<template>
  <div class="coach-card-container">
    <div class="coach-card">
      <div class="coach-avatar">
        <div class="avatar-placeholder">{{ firstName}}{{ lastName}}</div>
      </div>
      <div class="coach-content">
        <div class="coach-header">
          <h3 class="coach-name">{{ fullName }}</h3>
          <div class="coach-rate">${{ rate }}/hour</div>
        </div>
        
        <div class="coach-expertise">
          <h4 class="expertise-title">Areas of Expertise</h4>
          <div class="expertise-tags">
            <base-badge v-for="area in areas" :key="area" class="expertise-tag" :type="area" :title="area">
              {{ area }}
             
            </base-badge>
          </div>
        </div>
        
        <div class="coach-actions">
          <base-button 
            link 
            mode="outline" 
            :to="coachContactLink" 
            class="action-btn contact-btn"
          >
            <span class="btn-icon">✉️</span> Contact
          </base-button>
          <base-button 
            link 
            :to="coachDetailsLink" 
            class="action-btn details-btn"
          >
            <span class="btn-icon"></span> View Profile
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "areas", "rate"],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    coachDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    }
  }
};
</script>

<style scoped>
.coach-card-container {
  max-width: 800px; /* Controls maximum card width */
  margin: 0 auto; /* Centers the card */
  padding: 10px 20px; /* Prevents edge sticking on small screens */
}

.coach-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  padding: 30px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  gap: 30px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.coach-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.coach-avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(110, 142, 251, 0.3);
}

.coach-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.coach-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.coach-name {
  color: #2c3e50;
  font-size: 1.6rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.coach-rate {
  color: #6e8efb;
  font-size: 1.2rem;
  font-weight: 600;
  background: rgba(110, 142, 251, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
}

.coach-expertise {
  margin-top: 10px;
}

.expertise-title {
  color: #7f8c8d;
  font-size: 1rem;
  margin: 0 0 10px 0;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.expertise-tag {
  background: rgba(110, 142, 251, 0.1);
  color: #4f6afb;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.expertise-tag:hover {
  background: rgba(110, 142, 251, 0.2);
  transform: translateY(-1px);
}

.coach-actions {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.contact-btn {
  background: #6e8efb;
  color: white;
  border: none;
}

.contact-btn:hover {
  background: #5a7ae0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(90, 122, 224, 0.3);
}

.details-btn {
  background: white;
  color: #6e8efb;
  border: 1px solid rgba(110, 142, 251, 0.3);
}

.details-btn:hover {
  background: rgba(110, 142, 251, 0.05);
  border-color: rgba(110, 142, 251, 0.5);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .coach-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 25px;
    gap: 20px;
  }
  
  .coach-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .expertise-tags {
    justify-content: center;
  }
  
  .avatar-placeholder {
    width: 80px;
    height: 80px;
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .coach-actions {
    flex-direction: column;
  }
  
  .action-btn {
    width: 100%;
  }
  
  .coach-name {
    font-size: 1.4rem;
  }
  
  .coach-rate {
    font-size: 1.1rem;
  }
}
</style>
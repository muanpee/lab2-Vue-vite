<template>
  <h1>Student List</h1>
  <div class="students-container">
    <div class="student-column">
      <StudentCard v-for="student in students" :key="student.id" :student="student" />
    </div>
  </div>
</template>

<script setup lang="ts">
import StudentCard from '../components/EventStudent.vue';
import StudentService from '../services/StudentService';
import { ref, onMounted } from 'vue';
import type { Student } from '@/types';

const students = ref<Student[]>([]);

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data;
    })
    .catch((error) => {
      console.error('There was an error fetching student data!', error);
    });
});
</script>

<style scoped>
.students-container {
  display: flex; 
  justify-content: center; 
  gap: 20px; 
}

.student-column {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
</style>
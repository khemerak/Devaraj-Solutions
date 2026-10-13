import {defineConfig} from '@playwright/test';export default defineConfig({testDir:'./tests',testMatch:'**/*.spec.ts',use:{baseURL:'http://localhost:3001',headless:true,channel:'chrome'},webServer:{command:'npm start',env:{PORT:'3001'},url:'http://localhost:3001',reuseExistingServer:true},reporter:'list'});




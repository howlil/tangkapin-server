module.exports = {
  apps: [
    {
      name: 'node-api',
      script: 'src/index.js',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    },
    {
      name: 'ml-service',
      script: 'run.py',
      interpreter: './ml/env/Scripts/python.exe', // <- ganti sesuai OS
      cwd: './ml',
      watch: false
    }
  ]
};
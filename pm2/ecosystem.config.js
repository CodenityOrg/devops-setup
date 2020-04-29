module.exports = {
  apps : [
  {
    name: 'api',
    script: 'bin/www.js',
    cwd: "./master",
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      PORT: '8081',
      NODE_ENV: 'production'
    }
  },
  {
    name: 'dev-api',
    script: 'bin/www.js',
    cwd: "./dev",
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G'
  },
  {
    name: 'stage-api',
    cwd: "./stage",
    script: 'bin/www.js',
    instances: 1,
    autorestart: true,
    watch: true
  }],
};

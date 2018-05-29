module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'orange',
      script    : 'start.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'duolong',
      host : '47.94.152.70',
      port:'6666',
      ref  : 'origin/master',
      repo: 'git@oranger:jingbo925/orange.git',
      path : '/srv/www',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
  }
};

# Deployment Guide - AI-Powered Resume Builder

This guide provides step-by-step instructions for deploying the Resume Builder application to various hosting platforms.

## Pre-Deployment Checklist

- [ ] All dependencies installed: `pnpm install`
- [ ] TypeScript check passes: `pnpm run check`
- [ ] Development build works: `pnpm run dev`
- [ ] Production build succeeds: `pnpm run build`
- [ ] Preview build works: `pnpm run preview`

## Build Process

```bash
# Install dependencies
pnpm install

# Run type checking
pnpm run check

# Build for production
pnpm run build

# Test production build locally
pnpm run preview
```

The build output will be in the `dist/` directory.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is optimized for Vite and React applications with zero-config deployment.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/resume-builder.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

3. **Configure Build Settings**
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel handles the rest automatically

#### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

### Option 2: Netlify

#### Steps:

1. **Prepare Build**
   ```bash
   pnpm run build
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub repository

3. **Configure Build Settings**
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

4. **Deploy**
   - Click "Deploy site"

#### Environment Variables:
- Go to Site Settings → Build & Deploy → Environment
- Add any required environment variables

#### Custom Domain:
- Go to Domain Management
- Add custom domain
- Update DNS records

---

### Option 3: AWS S3 + CloudFront

For static hosting with CDN distribution.

#### Steps:

1. **Build the application**
   ```bash
   pnpm run build
   ```

2. **Create S3 Bucket**
   - Go to AWS S3 Console
   - Create new bucket (e.g., `resume-builder-prod`)
   - Enable static website hosting
   - Set index document to `index.html`

3. **Configure Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::resume-builder-prod/*"
       }
     ]
   }
   ```

4. **Upload Files**
   ```bash
   aws s3 sync dist/ s3://resume-builder-prod/ --delete
   ```

5. **Create CloudFront Distribution**
   - Origin: Your S3 bucket
   - Default root object: `index.html`
   - Error pages: Route 404 to `index.html` (for SPA routing)

6. **Configure Custom Domain**
   - Add CNAME record pointing to CloudFront domain
   - Request SSL certificate via ACM

---

### Option 4: Docker + Any VPS

For maximum control and flexibility.

#### Dockerfile:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/package.json ./
RUN npm install -g pnpm
RUN pnpm install --prod
EXPOSE 3000
CMD ["pnpm", "start"]
```

#### Build and Run:

```bash
# Build Docker image
docker build -t resume-builder:latest .

# Run container
docker run -p 3000:3000 resume-builder:latest

# Or use Docker Compose
docker-compose up -d
```

#### Deploy to VPS:

```bash
# SSH into your server
ssh user@your-server.com

# Clone repository
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder

# Build and run with Docker
docker build -t resume-builder .
docker run -d -p 80:3000 --name resume-builder resume-builder

# Or use PM2 for Node.js
npm install -g pm2
pnpm install
pnpm run build
pm2 start "pnpm start" --name "resume-builder"
pm2 save
```

---

### Option 5: Traditional Hosting (Apache/Nginx)

For shared hosting or VPS with web server.

#### Nginx Configuration:

```nginx
server {
    listen 80;
    server_name resume-builder.com www.resume-builder.com;
    
    root /var/www/resume-builder/dist;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/json;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### Apache Configuration:

```apache
<VirtualHost *:80>
    ServerName resume-builder.com
    ServerAlias www.resume-builder.com
    
    DocumentRoot /var/www/resume-builder/dist
    
    <Directory /var/www/resume-builder/dist>
        Options -MultiViews
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^ index.html [QSA,L]
    </Directory>
    
    # Enable compression
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
    </IfModule>
    
    # Cache headers
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType text/css "access plus 1 year"
        ExpiresByType text/javascript "access plus 1 year"
        ExpiresByType image/* "access plus 1 year"
    </IfModule>
</VirtualHost>
```

---

## Environment Variables

Create a `.env.production` file if needed:

```env
VITE_APP_TITLE=AI-Powered Resume Builder
VITE_APP_ID=resume-builder
```

## Performance Optimization

### Before Deployment:

1. **Minify and Bundle**
   ```bash
   pnpm run build
   ```

2. **Check Bundle Size**
   ```bash
   npm install -g vite
   vite build --analyze
   ```

3. **Enable Compression**
   - Gzip for text files
   - Brotli for better compression

4. **Set Cache Headers**
   - Static assets: 1 year
   - HTML: No cache or short cache

### After Deployment:

1. **Monitor Performance**
   - Use Lighthouse
   - Monitor Core Web Vitals
   - Set up error tracking

2. **Enable CDN**
   - CloudFront, Cloudflare, or Bunny CDN
   - Reduces latency globally

3. **Setup Analytics**
   - Google Analytics
   - Plausible or Fathom (privacy-focused)

---

## SSL/TLS Certificate

### Let's Encrypt (Free)

```bash
# Using Certbot
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d resume-builder.com -d www.resume-builder.com
```

### Auto-renewal

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

---

## Monitoring and Maintenance

### Health Checks

```bash
# Check if application is running
curl https://resume-builder.com/health

# Monitor logs
tail -f /var/log/application.log

# Check disk space
df -h

# Monitor memory usage
free -h
```

### Backup Strategy

```bash
# Backup database (if applicable)
mysqldump -u user -p database > backup.sql

# Backup application files
tar -czf resume-builder-backup.tar.gz /var/www/resume-builder/

# Upload to S3
aws s3 cp resume-builder-backup.tar.gz s3://backups/
```

---

## Troubleshooting

### Application won't start
```bash
# Check logs
pnpm run dev

# Verify dependencies
pnpm install

# Clear cache
rm -rf node_modules dist
pnpm install
pnpm run build
```

### Slow performance
- Enable gzip compression
- Use CDN for static assets
- Optimize images
- Check server resources

### Export not working
- Verify all dependencies installed
- Check browser console for errors
- Ensure sufficient server memory

---

## Rollback Procedure

If deployment fails:

```bash
# Revert to previous version
git revert HEAD
git push

# Or restore from backup
tar -xzf resume-builder-backup.tar.gz -C /var/www/
```

---

## Post-Deployment

1. **Test All Features**
   - Create a test resume
   - Test all 12 templates
   - Export PDF and JPEG
   - Test AI chatbot

2. **Monitor Errors**
   - Set up error tracking (Sentry, Rollbar)
   - Monitor application logs
   - Track user analytics

3. **Performance Monitoring**
   - Set up uptime monitoring
   - Monitor response times
   - Track Core Web Vitals

4. **Security**
   - Enable HTTPS
   - Set security headers
   - Regular security updates
   - Monitor for vulnerabilities

---

## Support

For deployment issues:
1. Check application logs
2. Verify all dependencies
3. Test locally first
4. Check hosting provider documentation

---

**Happy Deploying! 🚀**

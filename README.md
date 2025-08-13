# PhotoShift Cleaner Website

A modern, responsive website for the PhotoShift Cleaner iOS app. Built with HTML, CSS, and JavaScript, featuring a clean design with blue tones and smooth animations.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean design with blue color scheme and smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and animated components
- **Contact Form**: Functional contact form that opens the user's email client
- **Privacy Policy Modal**: Accessible privacy policy in a modal window
- **App Store Integration**: Direct links to the App Store
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Sections

1. **Hero Section**: Main landing area with app description and download button
2. **Features**: Detailed feature cards explaining app capabilities
3. **Screenshots**: Gallery of app screenshots
4. **How It Works**: Step-by-step process explanation
5. **Privacy & Safety**: Privacy-focused features and security information
6. **Contact**: Contact form and company information
7. **Footer**: Links and additional information

## File Structure

```
photoshift-web/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Image assets
    ├── logo.png        # App logo
    ├── 1.png           # Screenshot 1
    ├── 2.png           # Screenshot 2
    ├── 3.png           # Screenshot 3
    ├── 4.png           # Screenshot 4
    └── 5.png           # Screenshot 5
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Inter font family for typography

## Key Features

### Contact Form
- Form validation for required fields and email format
- Opens user's default email client with pre-filled message
- Success/error message display
- Auto-reset after successful submission

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts
- Optimized navigation for mobile devices

### Animations
- Smooth scroll behavior
- Intersection Observer for scroll-triggered animations
- Hover effects on interactive elements
- Loading animations for images

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast color scheme

## App Store Integration

The website includes direct links to the PhotoShift Cleaner app on the App Store:
- App Store ID: `6749819135`
- URL: `https://apps.apple.com/app/id6749819135`

## Contact Information

- **Email**: 7oughapps1@gmail.com
- **Contact Form**: Opens user's email client with pre-filled information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading for images
- Optimized CSS with efficient selectors
- Minified external resources
- Smooth animations using CSS transforms
- Efficient JavaScript event handling

## Setup and Deployment

1. **Local Development**:
   ```bash
   # Clone or download the project
   # Open index.html in a web browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

2. **Deployment**:
   - Upload all files to your web hosting service
   - Ensure all assets are in the correct directory structure
   - Test the contact form functionality

## Customization

### Colors
The website uses CSS custom properties for easy color customization:
```css
:root {
    --primary-blue: #2563eb;
    --secondary-blue: #3b82f6;
    --dark-blue: #1e3a8a;
    /* ... other colors */
}
```

### Content
- Update app screenshots in the `assets/` folder
- Modify text content in `index.html`
- Adjust contact information and App Store links

### Styling
- Modify `styles.css` for design changes
- Update animations and transitions
- Adjust responsive breakpoints as needed

## License

This project is created for PhotoShift Cleaner. All rights reserved.

## Support

For questions or support regarding the website, contact: 7oughapps1@gmail.com

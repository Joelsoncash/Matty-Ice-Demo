# Indev Family Tree

An interactive family tree visualization system that showcases the evolution of development through generations. This project features a secure login system, an interactive family tree interface, and detailed profile pages for each family member.

## Features

### 1. Login System
- Clean, modern design with gradient background
- Form validation for username and password
- Smooth transition effects
- Loading state feedback

### 2. Interactive Family Tree
- Visual representation of the Indev family progression
- Three generations of development shown
- Interactive member cards with hover effects
- Smooth zoom animation when clicking members
- Add new family members functionality
- Dynamic profile page generation

### 3. Profile Pages
- Detailed information for each family member
- Consistent styling across all profiles
- Key features and statistics
- Easy navigation back to family tree
- Responsive design for all screen sizes

## Project Structure

```
login-page/
├── index.html          # Login page
├── family-tree.html    # Main family tree interface
├── styles.css          # Main stylesheet
├── script.js          # Login page JavaScript
├── create-profile.js  # Profile generation utilities
├── add-member.php     # Server-side member addition handler
└── profiles/          # Individual member profile pages
    ├── indev.html
    ├── alpha.html
    ├── beta.html
    ├── v1.html
    ├── v2.html
    └── v3.html
```

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/indev-family-tree.git
```

2. Set up a local PHP server (required for adding new members):
```bash
php -S localhost:8000
```

3. Open the application in your browser:
```
http://localhost:8000/index.html
```

## Usage

1. **Login**: Enter any username and password (minimum 6 characters) to access the family tree.

2. **View Family Tree**: Browse through the generations and click on any member to view their detailed profile.

3. **Add New Member**:
   - Click the "Add Family Member" button
   - Fill in the member details
   - Submit to create a new member card and profile
   - The new member will appear in the selected generation

4. **View Profiles**: Click any member card to zoom in and access their detailed profile page.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- PHP (for server-side profile generation)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

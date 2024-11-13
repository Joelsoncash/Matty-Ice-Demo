function createProfilePage(name, title, description) {
    const profileName = name.toLowerCase().replace(/\s+/g, '-');
    const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} Profile</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 40px 20px;
        }

        .profile-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin: 0 auto 20px;
            display: block;
            border: 6px solid #667eea;
            object-fit: cover;
        }

        h1 {
            color: #333;
            margin-bottom: 10px;
        }

        .subtitle {
            color: #666;
            font-size: 1.1em;
            margin-bottom: 30px;
        }

        .info-section {
            margin-bottom: 30px;
        }

        h2 {
            color: #444;
            margin-bottom: 15px;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }

        p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .stat-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }

        .stat-card h3 {
            color: #667eea;
            margin-bottom: 10px;
        }

        .back-button {
            display: inline-block;
            padding: 12px 24px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }

        .back-button:hover {
            background: #5a6fd6;
        }

        @media (max-width: 768px) {
            .profile-container {
                padding: 20px;
            }

            .profile-image {
                width: 150px;
                height: 150px;
            }
        }
    </style>
</head>
<body>
    <div class="profile-container">
        <div class="header">
            <img src="https://via.placeholder.com/200" alt="${name} Profile" class="profile-image">
            <h1>${name}</h1>
            <div class="subtitle">${title}</div>
        </div>

        <div class="info-section">
            <h2>About</h2>
            <p>${description}</p>
        </div>

        <div class="info-section">
            <h2>Key Features</h2>
            <div class="stats">
                <div class="stat-card">
                    <h3>Innovation Level</h3>
                    <p>Advanced</p>
                </div>
                <div class="stat-card">
                    <h3>Development Stage</h3>
                    <p>Active</p>
                </div>
                <div class="stat-card">
                    <h3>Impact Score</h3>
                    <p>Growing</p>
                </div>
            </div>
        </div>

        <a href="../family-tree.html" class="back-button">Back to Family Tree</a>
    </div>
</body>
</html>`;

    return { name: profileName, content };
}

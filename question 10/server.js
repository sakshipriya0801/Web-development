const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABC College</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        header { background: #2c3e50; color: #fff; padding: 20px; text-align: center; }
        header h1 { margin-bottom: 10px; }
        nav { background: #34495e; padding: 10px; text-align: center; }
        nav a { color: #fff; margin: 0 15px; text-decoration: none; }
        nav a:hover { text-decoration: underline; }
        .container { max-width: 900px; margin: 20px auto; padding: 0 20px; }
        .section { background: #f9f9f9; padding: 20px; margin-bottom: 20px; border-radius: 5px; }
        .section h2 { color: #2c3e50; margin-bottom: 10px; }
        footer { background: #2c3e50; color: #fff; text-align: center; padding: 15px; margin-top: 20px; }
        ul { margin-left: 20px; }
    </style>
</head>
<body>
    <header>
        <h1>ABC College</h1>
        <p>Empowering Students for a Brighter Tomorrow</p>
    </header>
    <nav>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Courses</a>
        <a href="/">Contact</a>
    </nav>
    <div class="container">
        <div class="section">
            <h2>About Us</h2>
            <p>ABC College was established in 1990 and has been a leading institution in providing quality education. Our mission is to nurture young minds and prepare them for successful careers.</p>
        </div>
        <div class="section">
            <h2>Courses Offered</h2>
            <ul>
                <li>Bachelor of Science (B.Sc)</li>
                <li>Bachelor of Commerce (B.Com)</li>
                <li>Bachelor of Arts (B.A)</li>
                <li>Master of Business Administration (MBA)</li>
                <li>Master of Computer Applications (MCA)</li>
            </ul>
        </div>
        <div class="section">
            <h2>Contact Us</h2>
            <p><strong>Address:</strong> 123 College Road, Cityville, State - 123456</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> info@abccollege.edu</p>
        </div>
    </div>
    <footer>
        <p>ABC College. All rights reserved.</p>
    </footer>
</body>
</html>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log('College website server is running on http://localhost:' + PORT);
});

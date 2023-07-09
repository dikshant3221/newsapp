News App
This is a React-based web application that fetches and displays images from an API.

Installation
Clone the repository:
git clone https://github.com/dikshant3221/newsapp.git

Install the dependencies:
npm install axios
npm install node-fetch
npm install express   
npm install fs     

Start the server:

node server.js

This will start the backend server that provides the image data through the API.

Start the React application:

npm run start

This will start the frontend development server and open the application in your default browser.

Note: Make sure the backend server is running on http://localhost:4001 or update the API endpoint in the code accordingly.

Interact with the application:

The application will display a list of images with their titles and timestamps.
Scroll through the images using the scroll bar on the right side.
Click the "NextPage" button to load the next set of images.

Customization
API Endpoint: If you want to change the API endpoint, update the URL in the axios.get call within the fetchData function in FetchImageApi.js file.
Styling: Customize the visual appearance of the application by modifying the CSS in the fetchImage.css file.

Dependencies
React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API requests.
Node.js: JavaScript runtime for executing server-side code.

License
This project is licensed under the MIT License.

Feel free to customize and modify the code as per your requirements. Contributions are welcome!
# Micro-Doppler Based Target Classification

## Project Overview

The **Micro-Doppler Based Target Classification** project aims to classify drones and non-drones (such as birds) using micro-Doppler signatures captured from radar sensors. This project is designed to enhance situational awareness in applications such as surveillance, search and rescue operations, and protection of critical infrastructure. The project involves:

- **Signal Processing**: Analyzing micro-Doppler signatures from radar data to extract meaningful features.
- **Machine Learning**: Using Python-based models to classify objects based on these features.
- **Web Application**: Providing a user-friendly interface for interacting with the classification system.

## Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Spring Boot (Java)
- **Machine Learning**: Python, TensorFlow/PyTorch, Scikit-learn, SciPy, Librosa
- **Databases**: PostgreSQL, SQLite, HDF5/NetCDF
- **Visualization**: Plotly, Matplotlib, Seaborn
- **Deployment**: Docker, Nginx, Gunicorn
- **Version Control & CI/CD**: Git/GitHub, GitHub Actions
- **Cloud Platform**: AWS or GCP

## Project Structure

```
micro-doppler based target classification/
│
├── backend/                # Spring Boot application
│   ├── src/                # Source code for Spring Boot
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/           # Unit tests
│   ├── Dockerfile           # Dockerfile for Spring Boot
│   ├── pom.xml              # Maven configuration
│   └── application.properties  # Spring Boot configuration
│
├── frontend/               # React application
│   ├── src/                # Source code for React
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── styles/         # CSS/SCSS styles
│   ├── public/             # Public assets
│   ├── Dockerfile           # Dockerfile for React
│   ├── package.json         # npm configuration
│   └── README.md            # Frontend-specific documentation
│
├── ml_model/               # Python machine learning model
│   ├── src/                # Python source code
│   │   ├── model/          # Model training and inference scripts
│   │   ├── data/           # Data processing scripts
│   │   └── utils/          # Utility functions
│   ├── notebooks/          # Jupyter notebooks (if any)
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile           # Dockerfile for Python environment
│   └── README.md            # ML model-specific documentation
│
├── data/                   # Data files and datasets
│   ├── raw/                # Raw data
│   ├── processed/          # Processed data
│   └── README.md           # Data description and guidelines
│
├── docs/                   # Project documentation
│   └── README.md           # Overview of the project
│
├── .github/                # GitHub Actions workflows
│   └── workflows/
│       ├── backend.yml     # CI/CD workflow for Spring Boot
│       ├── frontend.yml    # CI/CD workflow for React
│       ├── ml_model.yml    # CI/CD workflow for Python model
│       └── deploy.yml      # Deployment workflow
│
├── .gitignore              # Git ignore file
├── docker-compose.yml      # Docker Compose configuration
└── README.md               # Project overview and setup instructions
```

## Setup Instructions

### Prerequisites

- **Java** (for Spring Boot): [Download and install Java](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- **Node.js** and **npm** (for React): [Download and install Node.js](https://nodejs.org/)
- **Python** (for ML model): [Download and install Python](https://www.python.org/downloads/)
- **Docker**: [Download and install Docker](https://www.docker.com/get-started)

### Backend Setup

1. Navigate to the `backend/` directory.
2. Build the Spring Boot application:
   ```bash
   mvn clean install
   ```
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the `frontend/` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

### Machine Learning Setup

1. Navigate to the `ml_model/` directory.
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Train and test the model (refer to `ml_model/README.md` for specific instructions).

### Docker Setup

1. Build and run Docker containers using Docker Compose:
   ```bash
   docker-compose up --build
   ```

### GitHub Actions

- CI/CD workflows are defined in `.github/workflows/` and will automatically run tests and deploy the application based on your configuration.

## Contributing

Contributions are welcome! Please follow the standard GitHub workflow for contributing to this project. Open issues or submit pull requests with your improvements.

## Contributors

- **Utsav Singhal**: AI/ML
- **Ansh Chawla**: ML
- **Anshul Bansal**: Data Processing
- **Sanya Bansal**: Frontend
- **Nandani Daga**: Frontend
- **Ayush Singhal**: Backend

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact [utsavsinghal26@gmail.com](mailto:utsavsinghal26@gmail.com).
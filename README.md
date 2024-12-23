# Chipload Calculator

## Description
The **Chipload Calculator** is a user-friendly web application designed for CNC enthusiasts, woodworkers, and machinists to calculate the chipload for a CNC router bit based on various input parameters. The chipload is an essential metric that ensures optimal cutting performance and helps prolong tool life, maintain material quality, and achieve efficient machining.

The calculator supports both metric and standard units, allows for flexible input, and provides visual feedback on whether the calculated chipload falls within acceptable tolerance ranges for different materials and bit diameters.

---

## Features
### Key Features:
- **Unit Toggle**: Switch seamlessly between metric (mm/min) and standard (inches/min) units. Feed rate values are automatically converted and rounded appropriately.
- **Chipload Calculation**: Input the feed rate, RPM, and number of flutes to calculate the chipload.
- **Material Selection**: Choose from a variety of materials, including:
  - Hardwood
  - Softwood/Plywood
  - MDF/Particle Wood
  - Soft Plastic
  - Hard Plastic
- **Bit Diameter Selection**: Select from a range of standard bit diameters (e.g., 1/8", 1/4", 3mm, etc.).
- **Tolerance Feedback**: 
  - The calculated chipload is color-coded:
    - **Green**: Falls within the acceptable range for the selected material and bit diameter.
    - **Red**: Falls outside the acceptable range.
- **Responsive Design**: The application adjusts seamlessly to different screen sizes and is horizontally centered for a clean and professional look.
- **Dynamic Input Validation**: Handles unrestricted numeric input without browser-imposed limits on feed rate, RPM, or number of flutes.
- **Keyboard Accessibility**: Press `Enter` to calculate chipload without needing to click the "Calculate" button.

---

## How to Run Locally

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your system. [Download Node.js](https://nodejs.org/)
- **npm** or **yarn**: Comes bundled with Node.js, or you can install yarn separately if preferred.

### Installation Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/chipload-calculator.git
   cd chipload-calculator
   ```

2. **Install Dependencies**:
   Use npm:
   ```bash
   npm install
   ```
   Or yarn:
   ```bash
   yarn install
   ```

3. **Run the Application**:
   Use npm:
   ```bash
   npm start
   ```
   Or yarn:
   ```bash
   yarn start
   ```

4. **Access the Application**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage
1. **Input the Feed Rate**: Enter the feed rate in either inches per minute (IPM) or millimeters per minute (MMPM), depending on the selected unit.
2. **Input the Speed of the Bit (RPM)**: Enter the speed of the bit.
3. **Input the Number of Flutes**: Specify the number of flutes on your CNC router bit.
4. **Select the Material**: Choose the material you are working with from the dropdown menu.
5. **Select the Bit Diameter**: Choose the diameter of the bit being used.
6. **Press Enter or Click Calculate**: The chipload will be calculated and displayed, along with a color-coded result indicating if it is within the tolerance range for the selected material and bit diameter.

---

## Technologies Used
- **React.js**: A JavaScript library for building user interfaces.
- **Material-UI (MUI)**: For pre-designed components and responsive UI.
- **CSS**: For additional styling and layout adjustments.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing
Contributions are welcome! If you have ideas for improving the chipload calculator or find any issues, feel free to:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request.

---

## Acknowledgments
This project was created to help CNC enthusiasts, machinists, and woodworkers easily calculate and validate chiploads for optimal cutting performance. Thank you for using the Chipload Calculator!

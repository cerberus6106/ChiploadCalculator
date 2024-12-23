import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import chiploadData from "./chiploadData";
import "./styles.css";

function App() {
  const [feedRate, setFeedRate] = useState(""); // Feed rate input
  const [rpm, setRpm] = useState(""); // RPM input
  const [flutes, setFlutes] = useState(""); // Number of flutes input
  const [chipload, setChipload] = useState(null); // Calculated chipload
  const [unit, setUnit] = useState("Inches"); // Measurement unit (Inches/Metric)
  const [material, setMaterial] = useState("Hardwood"); // Selected material
  const [bitDiameter, setBitDiameter] = useState("1/8"); // Selected bit diameter

  const calculateChipload = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (!feedRate || !rpm || !flutes) {
      alert("Please fill in all fields.");
      return;
    }

    // Convert feed rate to inches if metric
    const adjustedFeedRate =
      unit === "Inches" ? parseFloat(feedRate) : parseFloat(feedRate) / 25.4;

    // Calculate chipload
    const calculatedChipload = (
      adjustedFeedRate /
      (parseFloat(rpm) * parseInt(flutes, 10))
    ).toFixed(3);

    setChipload(calculatedChipload);
  };

  const handleUnitToggle = (newUnit) => {
    if (newUnit === unit || !newUnit) return; // Skip if the unit didn't change

    const convertedFeedRate =
      unit === "Inches"
        ? Math.round(parseFloat(feedRate) * 25.4) // Inches to Metric
        : Math.round(parseFloat(feedRate) / 25.4); // Metric to Inches

    setFeedRate(convertedFeedRate.toString()); // Update feed rate as a string
    setUnit(newUnit); // Update unit
  };

  const getToleranceRange = () => {
    if (
      chiploadData &&
      chiploadData[bitDiameter] &&
      chiploadData[bitDiameter][material]
    ) {
      return chiploadData[bitDiameter][material];
    }
    return null;
  };

  const isChiploadInRange = () => {
    const range = getToleranceRange();
    if (!range) return false;
    const [min, max] = range;
    return chipload >= min && chipload <= max;
  };

  const toleranceRange = getToleranceRange();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        style={{
          width: "35%",
          padding: "20px",
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Chipload Calculator
        </Typography>

        {/* Unit Toggle */}
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={(e, newUnit) => handleUnitToggle(newUnit)}
          aria-label="Unit Toggle"
          style={{ marginBottom: "20px" }}
        >
          <ToggleButton value="Metric" aria-label="Metric">
            Metric (mm)
          </ToggleButton>
          <ToggleButton value="Inches" aria-label="Inches">
            Inches (IPM)
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Material Selector */}
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel>Material</InputLabel>
          <Select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          >
            <MenuItem value="Hardwood">Hardwood</MenuItem>
            <MenuItem value="Softwood/Plywood">Softwood/Plywood</MenuItem>
            <MenuItem value="MDF/Particle Wood">MDF/Particle Wood</MenuItem>
            <MenuItem value="Soft Plastic">Soft Plastic</MenuItem>
            <MenuItem value="Hard Plastic">Hard Plastic</MenuItem>
          </Select>
        </FormControl>

        {/* Bit Diameter Selector */}
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel>Bit Diameter</InputLabel>
          <Select
            value={bitDiameter}
            onChange={(e) => setBitDiameter(e.target.value)}
          >
            {Object.keys(chiploadData).map((diameter) => (
              <MenuItem key={diameter} value={diameter}>
                {diameter}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Inputs and Submit */}
        <form onSubmit={calculateChipload}>
          <TextField
            label={`Feed Rate (${unit === "Inches" ? "IPM" : "MMPM"})`}
            type="text" // Allow unrestricted input
            value={feedRate}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) || value === "") setFeedRate(value); // Allow empty or numeric input
            }}
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Speed of Bit (RPM)"
            type="text" // Allow unrestricted input
            value={rpm}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) || value === "") setRpm(value); // Allow empty or numeric input
            }}
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Number of Flutes"
            type="text" // Allow unrestricted input
            value={flutes}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) || value === "") setFlutes(value); // Allow empty or numeric input
            }}
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Calculate Chipload
          </Button>
        </form>

        {/* Results */}
        {chipload && (
          <div style={{ marginTop: "20px" }}>
            <Typography
              variant="h6"
              className={isChiploadInRange() ? "chipload-good" : "chipload-bad"}
              align="center"
            >
              Chipload: {chipload}
            </Typography>
            {toleranceRange && (
              <Typography variant="body1" align="center">
                Tolerance Range: {toleranceRange[0]} - {toleranceRange[1]}
              </Typography>
            )}
          </div>
        )}
      </Paper>
    </div>
  );
}

export default App;

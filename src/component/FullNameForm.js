import { Button, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";

const FullNameForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Trim values and check if both fields are non-empty
        const fName = firstName.trim();
        const lName = lastName.trim();

        if (fName && lName) {
            setFullName(`${fName} ${lName}`);
        } else {
            // Clear the full name if incomplete data
            setFullName("");
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
                <Typography variant="h5">Full Name Display</Typography>

                <form onSubmit={handleSubmit} data-testid="form">
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}>
                        <TextField
                            label="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            inputProps={{ "data-testid": "first-name-input" }}
                        />
                        <TextField
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            inputProps={{ "data-testid": "last-name-input" }}
                        />
                        <Button type="submit" variant="contained" color="success">
                            Submit
                        </Button>
                    </Box>
                </form>

                {/* Display full name only if both inputs are filled */}
                {fullName && (
                    <Typography
                        variant="h6"
                        sx={{ marginTop: 2 }}
                        data-testid="display-fullname"
                    >
                        Full Name: {fullName}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default FullNameForm;

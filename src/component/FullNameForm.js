import { Button, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
const FullNameForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const fName = firstName.trim();
        const lName = lastName.trim();
        //  Only show full name if both fields are filled
        if (fName && lName) {
            setFullName(`Full Name: ${fName} ${lName}`);
        } else {
            setFullName(""); // Clear output if any field is empty
        }
    };
    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
            <Typography variant="h5" gutterBottom>
                Full Name Display
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                    Submit
                </Button>
            </form>
            {/*  Only render if fullName is non-empty */}
            {fullName && (
                <Typography variant="h6" sx={{ mt: 3 }}>
                    {fullName}
                </Typography>
            )}
        </Box>
    );
};
export default FullNameForm;
import { Button, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";

const FullNameForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isFullName, setIsFullName] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            setIsFullName(true)
        } else {
            return;
        }
    };

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Full Name Display
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
                >
                    <TextField
                        label="First Name"
                        variant="outlined"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="success">
                        Submit
                    </Button>
                    {isFullName && <Box>Full Name: {`${firstName} ${lastName}`}</Box>}
                </Box>

            </Box>
        </>
    );
};

export default FullNameForm;
